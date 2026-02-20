import './Hero.css';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-grid-bg" />
      <div className="hero-number">KMT</div>

      <div className="hero-content">
        <div className="hero-tag">Available for internships &amp; opportunities</div>
        <h1 className="hero-name">
          <span className="dim">Kaung</span><br />
          <span>Myat</span><br />
          <span className="accent">Tun_</span>
        </h1>
        <p className="hero-sub">
          <span>Computer Engineering Student</span> at Singapore Polytechnic.<br />
          Building practical tech — from <span>AIoT systems</span> to <span>cloud-native applications</span>.<br />
          International student from Myanmar, shaped by <span>three countries</span>.
        </p>
        <div className="hero-ctas">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-secondary">Get in Touch</a>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        Scroll to explore
      </div>

      <div className="hero-locs">
        <span>📍 <strong>Woodlands, Singapore</strong></span>
        <span>📧 <strong>Kmtun13579@gmail.com</strong></span>
        <span>📞 <strong>+65 9427 5904</strong></span>
      </div>
    </section>
  );
}
