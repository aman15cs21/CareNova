import React from "react";

export default function Stats() {
  const stats = [
    { value: "100K+", label: "Successful Diagnoses", icon: "📊" },
    { value: "98%", label: "Accuracy Rate", icon: "🎯" },
    { value: "24/7", label: "Always Available", icon: "⏰" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-6xl mb-4">{stat.icon}</div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white">{stat.value}</h1>
              <p className="text-blue-200 text-lg mt-3">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
