export default function ResultCard({ name, course, score, grade }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition">
      <h2 className="text-xl font-bold text-blue-600">{name}</h2>
      <p className="text-gray-600">{course}</p>
      <p className="mt-2">
        <strong>Score:</strong> {score}
      </p>
      <p
        className={`font-bold mt-1 ${
          grade === "A"
            ? "text-green-600"
            : grade === "B"
            ? "text-yellow-600"
            : "text-red-600"
        }`}
      >
        Grade: {grade}
      </p>
    </div>
  );
}
