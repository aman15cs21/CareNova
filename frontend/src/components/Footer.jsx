import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full">
              <span className="text-xl">⚕️</span>
            </div>
            <h2 className="text-2xl font-bold">HealthCheck</h2>
          </div>
          <p className="mt-2 text-gray-300 leading-relaxed">
            Advanced AI-powered health diagnosis platform designed to help you understand your symptoms and make informed health decisions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-white text-lg mb-4">Product</h3>
          <ul className="space-y-3 text-gray-300">
            <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="/diagnose" className="hover:text-blue-400 transition-colors">Diagnosis</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-white text-lg mb-4">Company</h3>
          <ul className="space-y-3 text-gray-300">
            <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold text-white text-lg mb-4">Legal</h3>
          <ul className="space-y-3 text-gray-300">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 pt-8 mt-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
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
