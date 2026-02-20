import { useEffect, useRef } from 'react';
import './Contact.css';

const contactLinks = [
  { label: 'Email',                href: 'mailto:Kmtun13579@gmail.com', display: 'Kmtun13579@gmail.com' },
  { label: 'Phone (Singapore)',    href: 'tel:+6594275904',             display: '+65 9427 5904' },
  { label: 'Location',             href: '#',                           display: 'Woodlands Circle, Blk 754A, Singapore' },
];

export default function Contact() {
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
    <section id="contact" ref={sectionRef}>
      <div className="section-label">06 — Contact</div>
      <div className="contact-inner">
        <h2 className="section-title reveal">
          Let's<br /><span style={{ color: 'var(--accent)' }}>Connect.</span>
        </h2>
        <p className="contact-intro reveal">
          I'm currently open to <span>internship opportunities</span>, interesting{' '}
          <span>projects</span>, and conversations about technology. Whether you have a
          role in mind or just want to talk engineering — my inbox is open.
        </p>
        <div className="contact-links reveal">
          {contactLinks.map(link => (
            <a key={link.label} href={link.href} className="contact-link">
              <div>
                <div className="contact-link-label">{link.label}</div>
                <div>{link.display}</div>
              </div>
              <span className="arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
