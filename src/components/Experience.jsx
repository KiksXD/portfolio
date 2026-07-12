import { useEffect, useRef } from 'react';
import './Experience.css';

const experiences = [
  {
    year: '2025',
    role: 'Electrical Engineer Internship',
    place: 'BeeX Autonomous Systems — 6 Months',
    desc: 'Researched & Built from end to end a Cathodic Protection Survey method using 2 half cells for Autonomous Underwater Drone to survey corrosion susceptibility of an underwater structure. Diagnose & Repair PCB for Battery Pods in 2 weeks. End to End Integration of EMAT Instrument (thickness measurement of underwater structures) into the Autonomous Underwater Drone.',
    tags: ['Electrolysis', 'Electrical', 'PCB Diagnosis'],
  },
  {
    year: '2024',
    role: 'EEE Students Ambassador',
    place: 'Singapore Polytechnic EEE School — 1 Year',
    desc: 'Leadership roles as Student Facilitator or Group Leader in events such as World Skills, RINC, School Orientation Camps & Programs such as Annual Awards & Open House. Student Mentor in EEE Mentorship Programme. Class Representative & Class Deputy Representative.',
    tags: ['Leadership', 'Mentorship', 'Event Management'],
  },
  {
    year: '2024',
    role: "McDonald's Service & Kitchen Crew",
    place: "McDonald's Singapore — 6 Months",
    desc: 'Managed cross-functional roles across front-of-house service and kitchen production. Developed strong multitasking capabilities, stress management, and clear communication skills while operating in a rapid, high-volume environment.',
    tags: ['Customer Service', 'Teamwork', 'Operations'],
  },
  {
    year: '2024',
    role: 'VOCO Banquet & Buffet Server',
    place: 'VOCO Hotel Singapore — 5 Months',
    desc: 'Provided professional banquet service at upscale hotel events. Strengthened communication, presentation, and hospitality skills in a professional setting.',
    tags: ['Guest Experience', 'Customer Service', 'Hospitality'],
  },
  {
    year: '2024-25',
    role: 'Engineering Hackathons',
    place: 'Whitehacks · BuildingBloCS · Brainhack · BASG',
    desc: 'Participated in multiple competitive hackathons covering cybersecurity, AI, and engineering challenges. Collaborated in teams to rapidly prototype and present working solutions under pressure.',
    tags: ['Cybersecurity', 'AI', 'Rapid Prototyping'],
  },
];

export default function Experience() {
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
    <section id="experience" ref={sectionRef}>
      <div className="section-label">02 — Experience</div>
      <h2 className="section-title reveal">
        Work &amp;<br /><span style={{ color: 'var(--accent)' }}>Leadership.</span>
      </h2>

      <div className="exp-list">
        {experiences.map((exp, i) => (
          <div key={i} className="exp-item reveal">
            <div className="exp-year">{exp.year}</div>
            <div className="exp-content">
              <div className="exp-role">{exp.role}</div>
              <div className="exp-place">{exp.place}</div>
              <div className="exp-desc">{exp.desc}</div>
              <div className="exp-tags">
                {exp.tags.map(t => <span key={t} className="exp-tag">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
