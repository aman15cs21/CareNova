import React from "react";
import { Link } from "react-router-dom";

export default function SymptomChecker() {
  return (
    <section className="checker-section">
      <div className="checker-section__content">

        {/* Title */}
        <p className="eyebrow"><span className="eyebrow__dot" /> Your next step is closer than you think</p>
        <h2>
          Ready to understand<br />what your body is saying?
        </h2>

        {/* Subtitle */}
        <p>
          Get started now and discover what your symptoms might mean.
          Our AI is here to help you 24/7.
        </p>

        {/* Button */}
        <Link to="/diagnose">
          <span className="button button--light">Start free diagnosis <span>↗</span></span>
        </Link>
      </div>
    </section>
  );
}
