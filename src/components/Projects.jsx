import { useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
  {
    num: '01',
    title: 'Arduino Autonomous Car',
    desc: 'Built a self-driving car using Arduino capable of road tracking and obstacle detection/avoidance. Implemented sensor fusion with ultrasonic and IR sensors for real-time decision making.',
    tech: ['C++', 'Arduino', 'Ultrasonic', 'IR Sensors'],
  },
  {
    num: '02',
    title: 'AIoT Smart Drinks Vending Machine',
    desc: 'DevOps-driven AIoT vending system with AI-based drink recommendation, cloud connectivity via AWS, and containerized deployment using Docker and Kubernetes. Full end-to-end pipeline from hardware to cloud.',
    tech: ['Python', 'AWS IoT', 'Docker', 'Kubernetes', 'AI/ML'],
  },
  {
    num: '03',
    title: 'Portfolio Website',
    desc: 'This very portfolio — built with React, Vite, and modern CSS. Designed with a focus on performance, accessibility, and strong visual identity to showcase engineering work.',
    tech: ['React', 'Vite', 'JSX', 'CSS'],
  },
  {
    num: '04',
    title: 'Hackathon Solutions',
    desc: 'Competed in Whitehacks (CTF cybersecurity), BuildingBloCS (CS education), Brainhack (defence AI), and BASG — building diverse solutions ranging from security tools to AI models under time pressure.',
    tech: ['Python', 'AI/ML', 'CTF', 'Cybersecurity'],
  },
];

export default function Projects() {
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
    <section id="projects" ref={sectionRef}>
      <div className="section-label">04 — Projects</div>
      <h2 className="section-title reveal">
        Featured<br /><span style={{ color: 'var(--accent)' }}>Work.</span>
      </h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.num} className="project-card reveal">
            <div className="project-num">{p.num}</div>
            <div className="project-title">{p.title}</div>
            <div className="project-desc">{p.desc}</div>
            <div className="project-tech">
              {p.tech.map(t => <span key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
