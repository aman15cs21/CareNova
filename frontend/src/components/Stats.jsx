import React from "react";

export default function Stats() {
  const stats = [
    { value: "100K+", label: "Successful Diagnoses", icon: "📊" },
    { value: "98%", label: "Accuracy Rate", icon: "🎯" },
    { value: "24/7", label: "Always Available", icon: "⏰" }
  ];

  return (
    <section className="stats-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="stats-grid grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-item__icon">{stat.icon}</div>
              <h1>{stat.value}</h1>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
