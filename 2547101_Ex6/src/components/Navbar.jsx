import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <h1 className="text-2xl font-extrabold text-white tracking-wide drop-shadow-md hover:scale-105 transform transition">
            Edu<span className="text-yellow-300">Track</span>
          </h1>

          {/* Navigation Links */}
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-semibold transition duration-300 
                  ${
                    location.pathname === link.path
                      ? "text-yellow-300"
                      : "text-white hover:text-yellow-200"
                  }
                `}
              >
                {link.label}
                {/* underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-300 transition-transform duration-300 origin-left ${
                    location.pathname === link.path
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
