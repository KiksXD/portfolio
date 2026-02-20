import { useEffect, useRef } from 'react';
import './Skills.css';

const skillGroups = [
  { icon: '⚙️', category: 'Programming Languages', items: ['C++', 'Python', 'Flutter', 'Dart'] },
  { icon: '🌐', category: 'Web Development',        items: ['HTML', 'CSS', 'JavaScript'] },
  { icon: '☁️', category: 'Cloud Technologies',     items: ['AWS EC2', 'AWS S3', 'AWS Lambda', 'AWS IoT'] },
  { icon: '🐳', category: 'DevOps',                  items: ['Kubernetes', 'Docker', 'DockerHub', 'CI/CD'] },
  { icon: '📊', category: 'Data Analysis',           items: ['PowerBI', 'KNIME', 'Data Pipelines'] },
  { icon: '🤖', category: 'Embedded & IoT',          items: ['Arduino', 'AIoT', 'Sensors', 'Automation'] },
];

export default function Skills() {
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
    <section id="skills" ref={sectionRef}>
      <div className="section-label">03 — Skills</div>
      <h2 className="section-title reveal">
        Technical<br /><span style={{ color: 'var(--accent)' }}>Stack.</span>
      </h2>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.category} className="skill-card reveal">
            <div className="skill-icon">{group.icon}</div>
            <div className="skill-category">{group.category}</div>
            <div className="skill-items">
              {group.items.map(item => (
                <span key={item} className="skill-item">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
