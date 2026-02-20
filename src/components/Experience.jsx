import { useEffect, useRef } from 'react';
import './Experience.css';

const experiences = [
  {
    year: '2025',
    role: 'EEE Students Ambassador',
    place: 'Singapore Polytechnic — EEE School',
    desc: 'Served as Student Facilitator and Group Leader at World Skills, RNIC, and School Orientation Camp. Student Mentor in EEE Mentorship Program. Class Deputy Representative and Representative. Supported School Annual Awards and Open House events.',
    tags: ['Leadership', 'Mentorship', 'Event Management'],
  },
  {
    year: '2024',
    role: "McDonald's Service & Kitchen Crew",
    place: "McDonald's Singapore — 6 months",
    desc: 'Handled high-volume service and kitchen operations. Developed speed, consistency, and teamwork skills in a fast-paced food service environment.',
    tags: ['Customer Service', 'Teamwork', 'Operations'],
  },
  {
    year: '2024',
    role: 'VOCO Banquet Server',
    place: 'VOCO Hotel Singapore — 5 months',
    desc: 'Provided professional banquet service at upscale hotel events. Strengthened communication, presentation, and hospitality skills in a professional setting.',
    tags: ['Hospitality', 'Communication'],
  },
  {
    year: '2024',
    role: 'USS Service Crew',
    place: 'Universal Studios Singapore — 1 month',
    desc: 'Customer-facing service role in a high-footfall theme park environment, managing guest experiences and maintaining safety protocols.',
    tags: ['Guest Experience', 'Safety'],
  },
  {
    year: '2024–25',
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
