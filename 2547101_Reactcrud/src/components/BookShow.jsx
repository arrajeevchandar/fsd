import { useState } from "react";
import BookEdit from "./BookEdit";

export default function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleSubmit = (id, newTitle) => {
    onEdit(id, newTitle);
    setShowEdit(false);
  };

  return (
    <div className="relative p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-glass w-[260px] min-h-[160px] flex flex-col gap-3 transition-transform hover:scale-[1.02] hover:shadow-cyan-500/30 animate-fadeInUp">
      {/* Edit Button */}
      <button
        onClick={() => setShowEdit(!showEdit)}
        className="absolute top-3 right-12 text-white/80 hover:text-cyan-300 transition"
      >
        ✏️
      </button>

      {/* Delete Button */}
      <button
        onClick={() => onDelete(book.id)}
        className="absolute top-3 right-3 text-white/80 hover:text-red-400 transition"
      >
        ❌
      </button>

      {/* Content */}
      <div className="mt-5">
        {showEdit ? (
          <BookEdit book={book} onSubmit={handleSubmit} />
        ) : (
          <h3 className="text-lg font-semibold text-white drop-shadow">{book.title}</h3>
        )}
      </div>
    </div>
  );
}
