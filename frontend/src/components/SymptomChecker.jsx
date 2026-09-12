import React from "react";
import { Link } from "react-router-dom";

export default function SymptomChecker() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-teal-600 py-24 flex justify-center items-center">
      <div className="text-center px-4">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Ready to Check Your Symptoms?
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          Get started now and discover what your symptoms might mean.
          Our AI is here to help you 24/7.
        </p>

        {/* Button */}
        <Link to="/diagnose">
          <button className="mt-8 px-8 py-4 bg-white text-blue-700 font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
            Start Free Diagnosis
          </button>
        </Link>
      </div>
    </section>
  );
}
