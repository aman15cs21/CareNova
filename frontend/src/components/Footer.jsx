import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="brand-mark__icon">
              <span>✦</span>
            </div>
            <h2>health<span>check</span></h2>
          </div>
          <p>
            Advanced AI-powered health diagnosis platform designed to help you understand your symptoms and make informed health decisions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3>Explore</h3>
          <ul>
            <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="/diagnose" className="hover:text-blue-400 transition-colors">Diagnosis</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3>Company</h3>
          <ul>
            <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3>Good to know</h3>
          <ul>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="site-footer__bottom">
        <div>
          <p>
            &copy; 2024 HealthCheck AI. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
