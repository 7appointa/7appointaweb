import React, { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Navbar({ navigate, currentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (p) => { navigate(p); setMenuOpen(false); };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(0,0,0,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}>
        <div style={{
          maxWidth: 1160, margin: '0 auto', padding: '0 24px',
          height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}
               onClick={() => go('home')}>
            <Logo size={36} />
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20,
              color: '#FFFFFF', letterSpacing: '-0.02em',
            }}>7appointa</span>
          </div>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="desktop-nav">
            {['home','careers'].map(p => (
              <button key={p} style={{
                padding: '8px 16px', borderRadius: 8, fontSize: 15, fontWeight: 500,
                color: currentPage === p || hoveredLink === p ? '#FFFFFF' : 'var(--text-2)',
                background: currentPage === p || hoveredLink === p ? 'rgba(255,255,255,0.08)' : 'none',
                border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                fontFamily: 'var(--font-body)',
              }}
              onClick={() => go(p)}
              onMouseEnter={() => setHoveredLink(p)}
              onMouseLeave={() => setHoveredLink(null)}>
                {p === 'home' ? 'Home' : 'Careers'}
              </button>
            ))}
            <a href="#how-it-works"
              style={{
                padding: '8px 16px', borderRadius: 8, fontSize: 15, fontWeight: 500,
                color: hoveredLink === 'how' ? '#FFFFFF' : 'var(--text-2)',
                background: hoveredLink === 'how' ? 'rgba(255,255,255,0.08)' : 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={() => setHoveredLink('how')}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={() => { if(currentPage !== 'home') go('home'); }}>
              How It Works
            </a>
            <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer" style={{
              padding: '9px 22px', borderRadius: 10, fontSize: 14, fontWeight: 600,
              background: '#FFFFFF', color: '#000000', border: 'none',
              transition: 'all 0.2s', fontFamily: 'var(--font-body)', letterSpacing: '0.01em',
              display: 'inline-block',
            }}
            onMouseEnter={e => { e.currentTarget.style.background='#DDDDDD'; e.currentTarget.style.transform='translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background='#FFFFFF'; e.currentTarget.style.transform='none'; }}>
              Apply Now
            </a>
          </div>

          {/* Hamburger */}
          <button style={{
            display: 'none', flexDirection: 'column', gap: 5, cursor: 'pointer',
            background: 'none', border: 'none', padding: 4,
          }} className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span style={{ width: 22, height: 2, background: '#FFFFFF', borderRadius: 2, transition: '0.3s', display: 'block',
              transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ width: 22, height: 2, background: '#FFFFFF', borderRadius: 2, display: 'block', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ width: 22, height: 2, background: '#FFFFFF', borderRadius: 2, transition: '0.3s', display: 'block',
              transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 72, left: 0, right: 0,
          background: 'rgba(0,0,0,0.97)', backdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '20px 24px 28px', zIndex: 999,
          display: 'flex', flexDirection: 'column', gap: 8,
        }}>
          <button style={{ padding: '12px 16px', borderRadius: 10, fontSize: 15, fontWeight: 500,
            color: 'var(--text-2)', cursor: 'pointer', border: 'none', background: 'none',
            fontFamily: 'var(--font-body)', textAlign: 'left', width: '100%' }}
            onClick={() => go('home')}>Home</button>
          <button style={{ padding: '12px 16px', borderRadius: 10, fontSize: 15, fontWeight: 500,
            color: 'var(--text-2)', cursor: 'pointer', border: 'none', background: 'none',
            fontFamily: 'var(--font-body)', textAlign: 'left', width: '100%' }}
            onClick={() => go('careers')}>Careers</button>
          <a href="#how-it-works" style={{ padding: '12px 16px', borderRadius: 10, fontSize: 15, fontWeight: 500,
            color: 'var(--text-2)', display: 'block' }}
            onClick={() => { if(currentPage !== 'home') go('home'); setMenuOpen(false); }}>
            How It Works
          </a>
          <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer" style={{
            marginTop: 8, padding: '12px 20px', borderRadius: 10, fontSize: 14, fontWeight: 600,
            background: '#FFFFFF', color: '#000000', display: 'block', textAlign: 'center',
          }}>Apply Now</a>
        </div>
      )}

      <style>{`
        @media (max-width: 700px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
