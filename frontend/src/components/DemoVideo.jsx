import imgMain from "../assets/image_main.jpg";

export default function DemoVideo() {
    return (
        <section className="demo-section" id="how-it-works">
            <div className="demo-section__heading">
                <p className="eyebrow"><span className="eyebrow__dot" /> A calmer way to care</p>
                <h2>See how HealthCheck<br /><em>works for you.</em></h2>
                <p>From your first symptom to your next step, here is what a thoughtful health check looks like.</p>
            </div>
            <div className="video-frame" aria-label="Demo video placeholder">
                <img src={imgMain} alt="HealthCheck demo preview" />
                <div className="video-frame__overlay" />
                <div className="video-frame__content">
                    <button type="button" className="video-frame__play" aria-label="Play demo video">▶</button>
                    <div><strong>Your demo video goes here</strong><span>Replace this preview with your product walkthrough</span></div>
                </div>
                <span className="video-frame__duration">02:14</span>
            </div>
        </section>
    );
}
