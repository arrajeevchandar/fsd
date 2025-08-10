import BookShow from "./BookShow";

export default function BookList({ books, onDelete, onEdit }) {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-6">
      {books.length > 0 ? (
        books.map((book) => (
          <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
        ))
      ) : (
        <p className="text-white/50 text-lg animate-fadeInUp">No books yet... Add one below!</p>
      )}
    </div>
  );
}
