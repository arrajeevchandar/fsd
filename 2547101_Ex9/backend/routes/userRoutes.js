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
router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    // Update DB
    await db.query(
      "UPDATE users SET name=?, email=?, phone=? WHERE id=?",
      [name, email, phone, id]
    );

    // Send confirmation email again
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "✅ Profile Updated",
      text: `Hello ${name},\n\nYour profile has been successfully updated.\n\nRegards,\nExam Result Management System`,
    });

    res.json({ message: "User updated and email sent" });
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
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

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // 1️⃣ Get user before deleting
    const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    const user = rows[0];

    // 2️⃣ Delete user
    await db.query("DELETE FROM users WHERE id = ?", [id]);

    // 3️⃣ Send delete confirmation email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "❌ Account Deleted",
      text: `Hello ${user.name},\n\nYour account has been deleted from the Exam Result Management System.\n\nRegards,\nAdmin`,
    });

    res.json({ message: "User deleted and email sent" });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;
