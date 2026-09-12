import React from "react";

export default function Features() {
  const features = [
    {
      title: "AI-Powered Analysis",
      desc: "Machine learning algorithms analyze your symptoms with medical accuracy.",
      icon: "🧬",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Real-Time Diagnosis",
      desc: "Get instant predictions for possible medical conditions.",
      icon: "⚡",
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Health Recommendations",
      desc: "Receive personalized preventive health measures and care tips.",
      icon: "💊",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Secure & Private",
      desc: "Your health data is encrypted and kept completely confidential.",
      icon: "🔒",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Why Choose HealthCheck AI?
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Experience cutting-edge healthcare technology combined with medical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((f, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${f.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative p-8 border-2 border-gray-100 rounded-2xl hover:border-blue-200 transition-all duration-300 hover:shadow-xl bg-white">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
