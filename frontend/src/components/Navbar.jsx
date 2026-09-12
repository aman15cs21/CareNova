import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-blue-900 to-blue-800 shadow-lg fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
            <span className="text-2xl">⚕️</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">HealthCheck</h1>
            <p className="text-xs text-blue-200">AI Diagnosis</p>
          </div>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex gap-8">
          <Link to="/" className="text-blue-100 hover:text-white font-medium transition-colors duration-200">Home</Link>
          <Link to="/diagnose" className="text-blue-100 hover:text-white font-medium transition-colors duration-200">Diagnosis</Link>
        </div>

      </div>
    </nav>
  );
}
