import imgMain from "../assets/image_main.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-section__inner">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow__dot" /> Your health, made clearer</p>
          <h1>Understand your body.<br /><em>Take charge</em> of your health.</h1>
          <p className="hero-copy__intro">A simpler way to explore your symptoms, understand what they may mean, and take your next step with confidence.</p>
          <div className="hero-actions">
            <Link to="/diagnose" className="button button--primary">Start your check <span>↗</span></Link>
            <a href="#how-it-works" className="button button--quiet"><span className="button__play">▶</span> See how it works</a>
          </div>
          <div className="hero-proof">
            <div><strong>98%</strong><span>model accuracy</span></div>
            <div><strong>24/7</strong><span>always available</span></div>
            <div><strong>100k+</strong><span>health checks</span></div>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-art__backdrop" />
          <div className="hero-art__label"><span>✦</span> Care that starts with listening</div>
          <img  src={imgMain} alt="A patient speaking with a doctor" />
          {/* <div className="hero-art__note"><span></span><div><strong></strong><small></small></div></div> */}
        </div>
      </div>
      <div className="hero-section__ticker"><span>Built for better conversations</span><span>•</span><span>Clear answers, thoughtful next steps</span><span>•</span><span>Healthcare that feels human</span></div>
    </section>
  );
}
