import React from "react";

export default function Features() {
  const features = [
    {
      title: "AI-Powered Analysis",
      desc: "Machine learning algorithms analyze your symptoms with medical accuracy.",
      icon: "✦",
      color: ""
    },
    {
      title: "Real-Time Diagnosis",
      desc: "Get instant predictions for possible medical conditions.",
      icon: "↗",
      color: ""
    },
    {
      title: "Health Recommendations",
      desc: "Receive personalized preventive health measures and care tips.",
      icon: "♡",
      color: ""
    },
    {
      title: "Secure & Private",
      desc: "Your health data is encrypted and kept completely confidential.",
      icon: "✓",
      color: ""
    }
  ];

  return (
    <section className="features-section" id="features">
      <div className="max-w-7xl mx-auto px-6">

        <div className="section-heading">
          <p className="eyebrow"><span className="eyebrow__dot" /> Made for real life</p>
          <h2>Good health starts<br /><em>with understanding.</em></h2>
          <p>
            Experience cutting-edge healthcare technology combined with medical expertise.
          </p>
        </div>

        <div className="feature-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((f, index) => (
            <div key={index} className="feature-card">
              <div className="feature-card__icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
