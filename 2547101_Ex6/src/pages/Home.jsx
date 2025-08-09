import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "../components/Carousel";
import ResultCard from "../components/ResultCard";
import { Link } from "react-router-dom";

export default function Home() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false); // default false so it doesn't show loading before click
  const [error, setError] = useState("");
  const [showResults, setShowResults] = useState(false); // controls visibility

  // Utility: Fisher-Yates shuffle to shuffle an array without mutating original
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const handleCheckResults = () => {
    setShowResults(true);
    setLoading(true);
    setError(""); // clear previous errors

    axios
      .get("https://mocki.io/v1/d9fcc8cf-d553-4ca9-9b62-2dde231a8e7c")
      .then((res) => {
        const shuffled = shuffleArray(res.data);
        const randomNine = shuffled.slice(0, 9);
        setResults(randomNine);

        // Simulate fetching data loading effect
        setTimeout(() => {
          setLoading(false);
        }, 2000); // 2 seconds loading
      })
      .catch(() => {
        setError("Failed to fetch exam results");
        setLoading(false);
      });
  };

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto space-y-12">
      {/* Carousel */}
      <Carousel />

      {/* Intro Section */}
      <section className="text-center max-w-3xl mx-auto px-4">
        <h1
          className="text-4xl md:text-6xl font-extrabold mb-6"
          style={{
            background:
              "linear-gradient(90deg, #4f46e5, #8b5cf6, #ec4899)", // Indigo → Purple → Pink
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Empowering Students with Seamless Result Management
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-8">
          Get instant access to your academic progress, re-evaluation options, and direct communication with your faculty – all in one place.
        </p>

        <button
          onClick={handleCheckResults}
          className="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold px-8 py-3 rounded-full shadow-xl hover:from-indigo-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-400"
          aria-label="Check Latest Exam Results"
        >
          Check Latest Results
        </button>
      </section>

      {/* Exam Result Dashboard — only show after button click */}
      {showResults && (
        <section>
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
            Latest Exam Results
          </h2>

          {loading && <p className="text-center text-lg">Loading...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}

          {!loading && !error && results.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((res, index) => (
                <ResultCard key={index} {...res} />
              ))}
            </div>
          )}
        </section>
      )}
<br />
  {/* Services Section */}
<>
  <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
    Features
  </h2>

  <section className="grid md:grid-cols-3 gap-8 mt-10">
    {[
      {
        title: "Real-Time Results",
        desc: "View your scores immediately after evaluation without delays.",
        icon: "📊",
        color: "from-blue-500 to-indigo-500",
      },
      {
        title: "Re-evaluation Made Easy",
        desc: "Raise re-evaluation requests and track their status transparently.",
        icon: "📝",
        color: "from-purple-500 to-pink-500",
      },
      {
        title: "Smart Notifications",
        desc: "Stay updated about upcoming exams, marks releases, and more.",
        icon: "🔔",
        color: "from-green-500 to-teal-500",
      },
    ].map((service, idx) => (
      <div
        key={idx}
        className="group p-6 bg-white shadow-lg rounded-xl text-center border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
      >
        <div
          className={`mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r ${service.color} text-white text-3xl shadow-md group-hover:scale-110 transition`}
        >
          {service.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mt-4 group-hover:text-indigo-600 transition">
          {service.title}
        </h3>
        <p className="text-gray-600 mt-2">{service.desc}</p>
      </div>
    ))}
  </section>
</>
 

      {/* Help Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-10 rounded-2xl shadow-xl text-center mt-14 relative overflow-hidden">
        {/* Decorative blur shapes */}
        <div className="absolute inset-0 bg-white opacity-10 blur-3xl"></div>

        <h2 className="relative text-3xl font-extrabold text-white mb-4 drop-shadow-lg">
          Need Help?
        </h2>
        <p className="relative text-white/90 max-w-xl mx-auto mb-6 leading-relaxed">
          Our support team is ready to assist you with any concerns about your academic records.
        </p>
        <Link
          to="/contact"
          className="relative inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
