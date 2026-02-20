import { useEffect, useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const handleScroll = () => {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 200) current = s.id;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['about', 'experience', 'skills', 'projects', 'education', 'contact'];

  return (
    <nav className="navbar">
      <a href="#hero" className="nav-logo">KMT/</a>
      <ul className="nav-links">
        {links.map(link => (
          <li key={link}>
            <a
              href={`#${link}`}
              style={{ color: activeSection === link ? 'var(--accent)' : '' }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
      <a href="mailto:Kmtun13579@gmail.com" className="nav-cta">Hire Me</a>
    </nav>
  );
}
