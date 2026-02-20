import { useEffect, useRef } from 'react';
import './App.css';

import Navbar     from './components/navbar';
import Hero       from './components/Hero';
import About      from './components/About';
import Experience from './components/Experience';
import Skills     from './components/Skills';
import Projects   from './components/Projects';
import Contact    from './components/Contact';

export default function App() {
  const cursorRef     = useRef(null);
  const cursorRingRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring   = cursorRingRef.current;
    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = e => { mx = e.clientX; my = e.clientY; };
    document.addEventListener('mousemove', onMove);

    let rafId;
    const animate = () => {
      cursor.style.left = mx + 'px';
      cursor.style.top  = my + 'px';
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      rafId = requestAnimationFrame(animate);
    };
    animate();

    const grow   = () => { cursor.style.width = '20px'; cursor.style.height = '20px'; };
    const shrink = () => { cursor.style.width = '12px'; cursor.style.height = '12px'; };
    document.querySelectorAll('a, button, .skill-item, .project-card').forEach(el => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div className="cursor"      ref={cursorRef}     />
      <div className="cursor-ring" ref={cursorRingRef} />

      <Navbar />

      <main>
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Contact />
      </main>

      <footer>
        <span>© 2025 Kaung Myat Tun / Kikko</span>
        <span>Computer Engineering · Singapore Polytechnic</span>
        <span>Built with ♥ &amp; code</span>
      </footer>
    </>
  );
}
