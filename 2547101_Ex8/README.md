# full stack development
CREATE DATABASE erms_db;
USE erms_db;
CREATE TABLE students (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100) NOT NULL,
 register_no INT UNIQUE NOT NULL,
 subject1 INT NOT NULL,
 subject2 INT NOT NULL,
 subject3 INT NOT NULL,
 subject4 INT NOT NULL,
 subject5 INT NOT NULL
);
INSERT INTO students (name, register_no, subject1, subject2, subject3, subject4, subject5) 
VALUES
('Ananya Sharma', 1001, 78, 82, 69, 91, 85),
('Rohit Mehta', 1002, 55, 61, 72, 64, 59),
('Priya Nair', 1003, 92, 88, 95, 90, 94),
('Arjun Reddy', 1004, 45, 38, 52, 41, 49),
('Neha Kapoor', 1005, 67, 74, 70, 72, 76),
('Vikram Singh', 1006, 81, 79, 84, 77, 82),
('Sneha Patil', 1007, 60, 58, 63, 57, 61),
('Amit Verma', 1008, 34, 45, 29, 50, 41),
('Divya Menon', 1009, 89, 93, 90, 87, 95),
('Karthik Iyer', 1010, 72, 65, 78, 70, 74),
('Pooja Das', 1011, 80, 85, 77, 81, 79),
('Rahul Khanna', 1012, 52, 49, 61, 55, 58),
('Meera Joshi', 1013, 95, 97, 92, 94, 96),
('Siddharth Rao', 1014, 40, 36, 42, 39, 44),
('Ayesha Khan', 1015, 76, 81, 79, 84, 77),
('Manish Gupta', 1016, 68, 72, 65, 70, 69),
('Ritu Sharma', 1017, 59, 63, 57, 61, 60),
('Aditya Mishra', 1018, 87, 90, 85, 89, 92),
('Shreya Kulkarni', 1019, 73, 76, 79, 74, 72),
('Nikhil Jain', 1020, 42, 48, 39, 45, 47)
