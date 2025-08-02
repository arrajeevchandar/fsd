import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="px-6 py-10 max-w-7xl mx-auto space-y-12">
      <Carousel />

      <section className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-700 mb-4">
          Empowering Students with Seamless Result Management
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Get instant access to your academic progress, re-evaluation options,
          and direct communication with your faculty – all in one place.
        </p>
        <Link
          to="/services"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition"
        >
          Explore Services
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow rounded-lg text-center">
          <h3 className="text-xl font-semibold text-blue-600">Real-Time Results</h3>
          <p className="text-gray-700 mt-2">
            View your scores immediately after evaluation without delays.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg text-center">
          <h3 className="text-xl font-semibold text-blue-600">Re-evaluation Made Easy</h3>
          <p className="text-gray-700 mt-2">
            Raise re-evaluation requests and track their status transparently.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg text-center">
          <h3 className="text-xl font-semibold text-blue-600">Smart Notifications</h3>
          <p className="text-gray-700 mt-2">
            Stay updated about upcoming exams, marks releases, and more.
          </p>
        </div>
      </section>

      <section className="bg-blue-50 p-8 rounded-lg shadow text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Need Help?</h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-6">
          Our support team is ready to assist you with any concerns about your academic records.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
