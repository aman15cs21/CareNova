import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="site-nav">
      <div className="site-nav__inner">

        {/* Logo */}
        <Link to="/" className="brand-mark">
          <span className="brand-mark__icon">✦</span>
          <span className="brand-mark__name">health<span>check</span></span>
        </Link>

        {/* Menu */}
        <div className="site-nav__links">
          <a href="#how-it-works">How it works</a>
          <a href="#features">Why HealthCheck</a>
          <Link to="/diagnose">Diagnosis</Link>
        </div>

        <Link to="/diagnose" className="nav-cta">Check your symptoms <span>↗</span></Link>
      </div>
    </nav>
  );
}
