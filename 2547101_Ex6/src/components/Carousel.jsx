import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    bgColor: "bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600",
    title: "Welcome to EduTrack",
    description: "Your one-stop platform for accessing and managing exam results.",
  },
  {
    bgColor: "bg-gradient-to-r from-green-500 via-teal-600 to-cyan-700",
    title: "Track Your Performance",
    description: "Instant access to scores, re-evaluation, and academic updates.",
  },
  {
    bgColor: "bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500",
    title: "Stay Informed",
    description: "Never miss a notification about your academic progress.",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg h-64 md:h-80">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${slide.bgColor} min-w-full flex flex-col items-center justify-center text-white text-center px-8`}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">
              {slide.description}
            </p>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-20 hover:bg-opacity-80 transition"
        aria-label="Previous Slide"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-20 hover:bg-opacity-80 transition"
        aria-label="Next Slide"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
