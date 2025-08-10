import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

export default function App() {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    setBooks(books.map(book => (book.id === id ? { ...book, title: newTitle } : book)));
  };

  const deleteBookById = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const bookCreate = (title) => {
    setBooks([
      ...books,
      { id: Math.round(Math.random() * 9999), title }
    ]);
  };

  return (
    <div className="min-h-screen pb-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <h1 className="text-center text-5xl font-extrabold py-8 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 drop-shadow-glow animate-fadeInUp">
        📚 My Book Collection
      </h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={bookCreate} />
    </div>
  );
}
