import './Hero.css';
import mcl39 from '../assets/MCL39.png';

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
          <span>Computer Engineering Student</span> at <span className="highlight-red">Singapore Polytechnic</span>.<br />
          Specializing in <span className="highlight-yellow">Robotics</span> &amp; <span className="highlight-purple">Machine Learning</span>.<br />
          Electrical Engineering Intern at <span className="highlight-blue">BeeX Autonomous Systems</span>.
        </p>
        <div className="hero-ctas">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-secondary">Get in Touch</a>
        </div>
      </div>

      <img src={mcl39} alt="MCL39" className="hero-car-img" />

      <div className="hero-scroll">
        <div className="scroll-line" />
        Scroll to explore
      </div>

      <div className="hero-locs">
        <span>📍 <strong>Singapore</strong></span>
        <span>📧 <strong>kmtun13579@gmail.com</strong></span>
        <span>📞 <strong>+65 9427 5904</strong></span>
      </div>
    </section>
  );
}
