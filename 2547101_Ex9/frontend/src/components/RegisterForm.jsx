import React, { useState } from "react";
import axios from "axios";

export default function RegisterForm({ onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("profilePic", profilePic);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/register",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setMessage(res.data.message || "✅ Registered successfully!");
      
      // 🔥 Trigger reload in App.jsx
      if (onRegister) onRegister();

      // Clear form after submit
      setName("");
      setEmail("");
      setPhone("");
      setProfilePic(null);

    } catch (err) {
      console.error("❌ Error:", err);
      setMessage("❌ Something went wrong. Check server logs.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
        User Registration
      </h2>
      {message && (
        <p className="text-center mb-4 text-sm text-red-500">{message}</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Profile Picture</label>
          <input
            type="file"
            className="w-full"
            onChange={(e) => setProfilePic(e.target.files[0])}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
