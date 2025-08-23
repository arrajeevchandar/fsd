const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",  // change this
  database: "erms_db"
});

db.connect((err) => {
  if (err) throw err;
  console.log("✅ MySQL Connected...");
});

module.exports = db;
