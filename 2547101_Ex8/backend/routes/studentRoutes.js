const express = require("express");
const router = express.Router();
const db = require("../db");

// GET student result by register_no
router.get("/result/:register_no", (req, res) => {
  const register_no = parseInt(req.params.register_no); // ensure integer

  db.query(
    "SELECT * FROM students WHERE register_no = ?",
    [register_no],
    (err, result) => {
      if (err) throw err;

      if (result.length === 0) {
        return res.status(404).json({ message: "No student found" });
      }

      const student = result[0];
      const total =
        student.subject1 +
        student.subject2 +
        student.subject3 +
        student.subject4 +
        student.subject5;

      const percentage = (total / 500) * 100;
      const status = percentage >= 40 ? "PASS" : "FAIL";

      res.json({
        name: student.name,
        register_no: student.register_no,
        marks: {
          subject1: student.subject1,
          subject2: student.subject2,
          subject3: student.subject3,
          subject4: student.subject4,
          subject5: student.subject5,
        },
        total,
        percentage,
        status,
      });
    }
  );
});


module.exports = router;
