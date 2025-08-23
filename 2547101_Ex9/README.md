# 🚀 ERMS Registration Portal

A **Full-Stack Web Application** for the **Exam Result Management System (ERMS)** domain.  
This app allows users to **register with profile picture upload**, receive an **email confirmation**, and perform **CRUD operations** on user data stored in **MySQL**.  

---

## ✨ Features
- 📝 **User Registration** with:
  - Name  
  - Email  
  - Phone Number  
  - Profile Picture (uploaded via **Multer**)  

- 📩 **Email Confirmation** using **Nodemailer** (HTML email + Gmail App Password / OAuth2).  

- 📊 **CRUD Operations** (Create, Read, Update, Delete) on user data stored in **MySQL**.  

- 🌐 **REST API Endpoints** for backend communication.  

- 🎨 Modern **React + TailwindCSS UI** with Glassmorphism effects.  

---

## 🛠️ Tech Stack
- **Frontend**: React + Tailwind CSS  
- **Backend**: Node.js + Express.js  
- **Database**: MySQL  
- **File Upload**: Multer (stores profile pictures locally in `uploads/`)  
- **Email Service**: Nodemailer (Gmail with App Password or OAuth2)  

---

## 📂 Project Structure
📦 erms-registration-portal
├── 📂 backend
│ ├── server.js # Express server
│ ├── routes/users.js # REST API routes
│ ├── config/db.js # MySQL connection
│ ├── utils/mailer.js # Nodemailer setup
│ ├── 📂 uploads # Profile pictures storage
│
├── 📂 frontend
│ ├── src
│ │ ├── App.jsx
│ │ ├── components
│ │ │ ├── RegisterForm.jsx
│ │ │ ├── UserList.jsx
│ │ │ └── EditUser.jsx
│ │ └── ...
│
├── README.md # Project documentation

---

2️⃣ Backend Setup
cd backend
npm install


Create a .env file inside backend:

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=erms_db
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=yourapppassword

Run MySQL and create the database:
CREATE DATABASE erms_db;

USE erms_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  phone VARCHAR(20),
  profilePic VARCHAR(255)
);

Start the backend:

npm start

3️⃣ Frontend Setup
cd ../frontend
npm install
npm run dev