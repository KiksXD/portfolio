import { useEffect, useRef } from 'react';
import './About.css';
import profilePhoto from '../assets/Kikko.png';

const stats = [
  { num: '6+',  label: 'Projects'    },
  { num: '82',  label: 'CCA Points'  },
];

const badges = [
  'ATAR 83.25', 'IELTS 7.5', 'GPA 3.6', 'NYAA GOLD',
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const reveals = sectionRef.current.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    reveals.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <div className="section-label">01 — About me</div>
      <div className="about-grid">

        <div className="about-img-wrap reveal">
          <div className="about-img-frame">
            <div className="about-img-placeholder">
              <div className="placeholder-text">KMT</div>
              <img src={profilePhoto} alt="KMT" className="about-img" />
            </div>
          </div>
          <div className="about-badges">
            {badges.map(b => <span key={b} className="badge">{b}</span>)}
          </div>
        </div>

        <div className="about-text reveal">
          <h2 className="section-title">
            Purpose-Driven<br />
            <span style={{ color: 'var(--accent)' }}>Engineer &amp;<br />Architect.</span>
          </h2>
          <p>
            I'm <span>Kaung Myat Tun</span> (also known as <span>Kikko</span>) — a <span>Computer Engineering</span> Diploma
            student at Singapore Polytechnic with a passion for engineering solutions that
            work in the real world.
          </p>
          <p>
            As a Computer Engineering student, I treat <span>software</span> and <span>hardware</span> as two sides of the same coin.
            Having a solid foundation in both allows me to look at <span>complex engineering systems</span> holistically and build with
            purpose from the ground up.
          </p>
          <p>
            From rapid software deployment in high-pressure hackathons &amp; mini-projects to diagnosing complex hardware
            components during my engineering internship — I treat every challenge as a <span>sandbox for growth</span>. I approach every
            experience as an opportunity to push my <span>technical limits</span> and <span>build systems</span> that work in the real world.
          </p>
          <div className="stat-row">
            {stats.map(s => (
              <div key={s.label} className="stat">
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
