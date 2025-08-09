export default function ResultCard({ name, course, score, grade }) {
  // Dynamic color based on grade
  const gradeColors = {
    A: "text-green-500 bg-green-100",
    B: "text-yellow-500 bg-yellow-100",
    C: "text-orange-500 bg-orange-100",
    F: "text-red-500 bg-red-100",
  };

  return (
    <div className="relative group bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg overflow-hidden border border-blue-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Top Accent Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      {/* Card Content */}
      <div className="p-6">
        <h2 className="text-2xl font-extrabold text-blue-700 group-hover:text-blue-900 transition-colors">
          {name}
        </h2>
        <p className="text-gray-500 text-sm italic">{course}</p>

        <div className="mt-4 space-y-2">
          <p className="text-lg text-gray-700">
            <span className="font-semibold text-gray-900">Score:</span> {score}
          </p>
          <span
            className={`inline-block px-3 py-1 text-sm font-bold rounded-full shadow-sm ${gradeColors[grade] || "text-gray-600 bg-gray-200"}`}
          >
            Grade: {grade}
          </span>
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
    </div>
  );
}
