import React from 'react';
import Logo from './Logo';

export default function Footer({ navigate }) {
  return (
    <footer style={{
      background: 'var(--ink-2)',
      borderTop: '1px solid var(--border)',
      padding: '64px 24px 36px',
    }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 48, marginBottom: 56,
        }}>
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Logo size={32} />
              <span style={{
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18,
                color: '#FFFFFF',
              }}>7appointa</span>
            </div>
            <p style={{ color: 'var(--text-3)', fontSize: 14, lineHeight: 1.7, maxWidth: 240 }}>
              Connecting service providers with customers who are ready to book.
            </p>
            {/* Social — X and LinkedIn only */}
            <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
              {[
                { label: 'X', href: 'https://x.com' },
                { label: 'in', href: 'https://linkedin.com' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                   style={{
                     width: 36, height: 36, borderRadius: 8,
                     border: '1px solid var(--border)',
                     display: 'flex', alignItems: 'center', justifyContent: 'center',
                     color: 'var(--text-3)', fontSize: 12, fontWeight: 700,
                     fontFamily: 'var(--font-display)',
                     transition: 'all 0.2s',
                   }}
                   onMouseEnter={e => {
                     e.currentTarget.style.borderColor = '#FFFFFF';
                     e.currentTarget.style.color = '#FFFFFF';
                     e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                   }}
                   onMouseLeave={e => {
                     e.currentTarget.style.borderColor = 'var(--border)';
                     e.currentTarget.style.color = 'var(--text-3)';
                     e.currentTarget.style.background = 'none';
                   }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13,
              color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Company
            </h4>
            <span style={{ color: 'var(--text-2)', fontSize: 14, cursor: 'pointer' }}
              onClick={() => navigate('home')}
              onMouseEnter={e => e.currentTarget.style.color='#FFFFFF'}
              onMouseLeave={e => e.currentTarget.style.color='var(--text-2)'}>Home</span>
            <a href="#how-it-works" style={{ color: 'var(--text-2)', fontSize: 14 }}
              onMouseEnter={e => e.currentTarget.style.color='#FFFFFF'}
              onMouseLeave={e => e.currentTarget.style.color='var(--text-2)'}>How It Works</a>
            <a href="#services" style={{ color: 'var(--text-2)', fontSize: 14 }}
              onMouseEnter={e => e.currentTarget.style.color='#FFFFFF'}
              onMouseLeave={e => e.currentTarget.style.color='var(--text-2)'}>Services</a>
            <span style={{ color: 'var(--text-2)', fontSize: 14, cursor: 'pointer' }}
              onClick={() => navigate('careers')}
              onMouseEnter={e => e.currentTarget.style.color='#FFFFFF'}
              onMouseLeave={e => e.currentTarget.style.color='var(--text-2)'}>Careers</span>
          </div>

          {/* Services */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13,
              color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Services
            </h4>
            {['Car Detailing', 'Home Cleaning', 'More Coming Soon'].map(s => (
              <span key={s} style={{ color: 'var(--text-2)', fontSize: 14 }}>{s}</span>
            ))}
          </div>

          {/* Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13,
              color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Contact
            </h4>
            <a href="mailto:Contact@7appointa.com"
               style={{ color: 'var(--text-2)', fontSize: 14, transition: 'color 0.2s' }}
               onMouseEnter={e => e.currentTarget.style.color='#FFFFFF'}
               onMouseLeave={e => e.currentTarget.style.color='var(--text-2)'}>
              Contact@7appointa.com
            </a>
            <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer"
               style={{
                 marginTop: 8, padding: '9px 20px', borderRadius: 9, fontSize: 13, fontWeight: 600,
                 background: '#FFFFFF', color: '#000000',
                 border: '1px solid rgba(255,255,255,0.2)', display: 'inline-block',
                 transition: 'background 0.2s',
               }}
               onMouseEnter={e => e.currentTarget.style.background='#DDDDDD'}
               onMouseLeave={e => e.currentTarget.style.background='#FFFFFF'}>
              Apply Now
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border-soft)', paddingTop: 24,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12,
        }}>
          <span style={{ color: 'var(--text-3)', fontSize: 13 }}>
            © {new Date().getFullYear()} 7appointa. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Service'].map(t => (
              <span key={t} style={{ color: 'var(--text-3)', fontSize: 13, cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color='var(--text-2)'}
                onMouseLeave={e => e.currentTarget.style.color='var(--text-3)'}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
