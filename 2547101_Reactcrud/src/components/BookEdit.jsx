import { useState } from "react";

export default function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const onHandleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim()) return;
    onSubmit(book.id, title);
  };

  return (
    <form
      onSubmit={onHandleSubmit}
      className="bg-white/10 backdrop-blur-lg border border-white/20 p-3 rounded-xl shadow-md"
    >
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="w-full px-3 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition"
        placeholder="New title..."
      />
      <button className="mt-2 px-4 py-1 rounded-lg bg-gradient-to-r from-cyan-400 to-teal-500 text-slate-900 font-semibold shadow hover:scale-105 transition-transform">
        Save
      </button>
    </form>
  );
}
