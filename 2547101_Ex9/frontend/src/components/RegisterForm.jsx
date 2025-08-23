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
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setMessage(res.data.message || "✅ Registered successfully!");
      if (onRegister) onRegister();

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
    <div className="p-6 bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl border border-white/40">
      <h2 className="text-3xl font-bold text-center mb-6 text-purple-700 drop-shadow">
        ✨ User Registration
      </h2>
      {message && (
        <p className="text-center mb-4 text-sm text-red-500 font-semibold">
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700">Name</label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">Phone</label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">Profile Picture</label>
          <input
            type="file"
            className="w-full p-2 border rounded-lg cursor-pointer"
            onChange={(e) => setProfilePic(e.target.files[0])}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          🚀 Register
        </button>
      </form>
    </div>
  );
}
