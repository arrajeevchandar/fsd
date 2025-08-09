export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white text-center p-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm">&copy; {new Date().getFullYear()} EduTrack. All rights reserved.</p>
      </div>
    </footer>
  );
}
