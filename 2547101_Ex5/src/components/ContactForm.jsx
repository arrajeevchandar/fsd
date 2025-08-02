// src/components/ContactForm.jsx
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      {submitted ? (
        <div className="text-center text-green-600 font-semibold">
          Thank you, {formData.name}! Your message has been submitted.
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 border rounded"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-2 border rounded"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
}
