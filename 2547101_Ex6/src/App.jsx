import { useEffect, useState } from "react";
import axios from "axios";
import ResultCard from "./components/ResultCard";

export default function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/62313fb9-8b75-47a1-b672-180ac49a60e7") // Mock Exam Result API
      .then((res) => {
        setResults(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch exam results");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Exam Result Dashboard
      </h1>

      {loading && <p className="text-center text-lg">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((res, index) => (
            <ResultCard key={index} {...res} />
          ))}
        </div>
      )}
    </div>
  );
}
