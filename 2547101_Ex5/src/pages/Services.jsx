// src/pages/Services.jsx

function ServiceCard({ title, description }) {
  return (
    <div className="p-6 rounded-xl shadow-md bg-white hover:shadow-xl transition-all border border-gray-100">
      <h3 className="text-xl font-semibold text-indigo-600 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default function Services() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Our Services</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          title="📄 View Results"
          description="Check your latest exam scores and previous academic performance effortlessly."
        />
        <ServiceCard
          title="📝 Apply for Re-evaluation"
          description="Submit a re-evaluation request if you think your results need another look."
        />
        <ServiceCard
          title="📢 Exam Notifications"
          description="Stay in the loop with the latest exam schedules, updates, and circulars."
        />
      </div>
    </div>
  );
}
