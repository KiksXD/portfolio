import { useEffect, useRef } from 'react';
import './About.css';

const stats = [
  { num: '4+', label: 'Hackathons' },
  { num: '3',  label: 'Countries'  },
  { num: '68', label: 'CCA Points' },
  { num: '3.5',label: 'GPA'        },
];

const badges = [
  'Myanmar 🇲🇲', 'Malaysia 🇲🇾', 'Singapore 🇸🇬',
  'IELTS 7.5', 'GPA 3.5', 'NYA Gold',
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
              <span>KMT</span>
            </div>
          </div>
          <div className="about-badges">
            {badges.map(b => <span key={b} className="badge">{b}</span>)}
          </div>
        </div>

        <div className="about-text reveal">
          <h2 className="section-title">
            International<br />Engineer &amp;<br />
            <span style={{ color: 'var(--accent)' }}>Builder.</span>
          </h2>
          <p>
            I'm <span>Kaung Myat Tun</span> (also known as Kikko) — a Computer Engineering
            student at Singapore Polytechnic with a passion for engineering solutions that
            work in the real world.
          </p>
          <p>
            Having studied across <span>Myanmar, Malaysia, and Singapore</span>, I bring a
            global perspective and genuine adaptability to every team. I thrive in
            cross-cultural environments and believe that diversity in thought drives better products.
          </p>
          <p>
            From <span>hackathons</span> to hands-on lab projects, from <span>student
            ambassador</span> leadership to serving customers on weekends — I approach every
            experience as an opportunity to grow technically and as a person.
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
