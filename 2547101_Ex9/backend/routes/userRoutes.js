const express = require("express");
const multer = require("multer");
const db = require("../db");
const nodemailer = require("nodemailer");
require("dotenv").config();

const router = express.Router();

// Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

// ✅ Register user + send email
router.post("/register", upload.single("profilePic"), async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const profilePic = req.file ? req.file.filename : null;

    await db.query(
      "INSERT INTO users (name, email, phone, profile_picture) VALUES (?, ?, ?, ?)",
      [name, email, phone, profilePic]
    );

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "✅ Registration Successful",
      text: `Hello ${name},\n\nYour registration was successful.\n\nRegards,\nExam Result Management System`,
    });

    res.json({ message: "User registered and email sent" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// ✅ Fetch all users
router.get("/", async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM users");
    res.json(results);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// ✅ Delete user
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM users WHERE id = ?", [id]);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;
