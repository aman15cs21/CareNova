import React from "react";
import imgMain from "../assets/image_main.jpg";
import { Link } from "react-router-dom";

export default function Hero() {

  const heroStyle = {
    background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0c4a6e 100%)",
    width: "100%",
    minHeight: "calc(100vh - 70px)",
    display: "flex",
    alignItems: "center",
    marginTop: "70px"
  };

  return (
    <section style={heroStyle}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-16 py-20 lg:py-32">

        <div className="flex-1">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 rounded-full">
            <p className="text-blue-200 text-sm font-semibold">🩺 Smart Health Screening</p>
          </div>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Intelligent Disease <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-300">Detection System</span>
          </h1>

          <p className="mt-5 text-lg text-blue-100 max-w-xl leading-relaxed">
            Our advanced AI analyzes your symptoms and vital signs to provide accurate health insights. Get instant diagnosis recommendations and preventive care guidance.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <Link to="/diagnose" className="px-8 py-4 bg-white text-blue-900 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Start Your Diagnosis →
            </Link>
            <button className="px-8 py-4 bg-blue-500/20 border-2 border-blue-300 text-white font-semibold rounded-xl hover:bg-blue-500/30 transition-all duration-200">
              Watch Demo
            </button>
          </div>

          <div className="mt-10 flex gap-8">
            <div>
              <p className="text-3xl font-bold text-white">50K+</p>
              <p className="text-blue-200 text-sm">Happy Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">98%</p>
              <p className="text-blue-200 text-sm">Accuracy Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">24/7</p>
              <p className="text-blue-200 text-sm">Available</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={imgMain}
            alt="Medical Consultation"
            className="w-full max-w-md lg:max-w-xl rounded-3xl shadow-2xl border-4 border-blue-400/30"
          />
        </div>

      </div>
    </section>
  );
}
