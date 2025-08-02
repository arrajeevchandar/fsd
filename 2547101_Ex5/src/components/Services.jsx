// src/components/Services.jsx
function ServiceCard({ title, description }) {
  return (
    <div className="p-4 border rounded-lg shadow bg-white">
      <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default function Services() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Our Services</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard title="View Results" description="Check your latest exam scores easily." />
        <ServiceCard title="Apply for Re-evaluation" description="Not satisfied? Request re-evaluation here." />
        <ServiceCard title="Exam Notifications" description="Stay updated with upcoming exams." />
      </div>
    </div>
  );
}
