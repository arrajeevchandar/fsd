import { useState } from "react";

export default function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const formOnSubmit = (event) => {
    event.preventDefault();
    if (!title.trim()) return;
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="fixed bottom-0 w-full bg-white/10 backdrop-blur-2xl border-t border-white/20 shadow-glass p-4">
      <form
        onSubmit={formOnSubmit}
        className="flex flex-col sm:flex-row sm:items-center gap-3 max-w-4xl mx-auto"
      >
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Enter book title..."
          className="flex-1 px-4 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-500 text-slate-900 font-semibold shadow-glow hover:scale-105 hover:shadow-cyan-500/50 transition-transform"
        >
          ➕ Add Book
        </button>
      </form>
    </div>
  );
}
