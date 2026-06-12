import React, { useEffect, useRef, useState } from 'react';

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Reveal({ children, delay = 0, style = {} }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 0.7s ${delay}s ease, transform 0.7s ${delay}s ease`,
      ...style,
    }}>
      {children}
    </div>
  );
}

const STEPS = [
  {
    n: '01',
    title: 'Customer Books',
    body: 'A customer submits a booking request for the service they need.',
  },
  {
    n: '02',
    title: 'We Coordinate',
    body: 'Our team matches the request to the right provider based on location, availability, and specialty.',
  },
  {
    n: '03',
    title: 'You Show Up',
    body: 'You receive a confirmed appointment with all the details you need. Just show up and focus on delivering great work.',
  },
];

const SERVICES = [
  { title: 'Car Detailing' },
  { title: 'Home Cleaning' },
];

const FEATURES = [
  {
    title: 'Privacy First',
    body: 'Customer contact details are never shared. You only receive what you need: confirmed appointment details.',
  },
  {
    title: 'Managed Scheduling',
    body: 'We handle scheduling and keep your calendar organized.',
  },
  {
    title: 'Instant Notifications',
    body: 'Get real-time updates for new bookings, changes, and cancellations straight to your inbox.',
  },
  {
    title: 'Confirmed Bookings',
    body: 'You receive only confirmed bookings in your service area.',
  },
  {
    title: 'Grow Your Business',
    body: 'More bookings, less admin. 7appointa becomes your silent marketing engine running 24/7.',
  },
  {
    title: 'Dedicated Support',
    body: 'A real support team is always available to help you resolve issues and maximize your earnings.',
  },
];

export default function LandingPage({ navigate }) {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <ServicesSection />
      <WhySection />
      <CtaBanner />
    </div>
  );
}

/* ── HERO ── */
function HeroSection() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '120px 24px 80px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle grid background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04 }}
             xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M60 0 L0 0 0 60" fill="none" stroke="#FFFFFF" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>

      <div style={{ maxWidth: 1160, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 720 }}>
          <h1 className="anim-fade-up-d1" style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(44px, 6vw, 80px)', lineHeight: 1.06,
            letterSpacing: '-0.035em', marginBottom: 28, color: '#FFFFFF',
          }}>
            Get Booked<br />by Customers
          </h1>

          <p className="anim-fade-up-d2" style={{
            fontSize: 18, color: 'var(--text-2)', lineHeight: 1.75,
            maxWidth: 560, marginBottom: 44,
          }}>
            7Appointa connects skilled service providers with customers who are ready to book.
            We take care of scheduling and appointment management, so you can focus on
            delivering exceptional service.
          </p>

          <div className="anim-fade-up-d3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
              <button style={{
                padding: '15px 36px', borderRadius: 10, fontSize: 15, fontWeight: 700,
                background: '#FFFFFF', color: '#000000', border: 'none',
                transition: 'all 0.2s', fontFamily: 'var(--font-body)',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => { e.currentTarget.style.background='#DDDDDD'; e.currentTarget.style.transform='translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background='#FFFFFF'; e.currentTarget.style.transform='none'; }}>
                Apply Now
              </button>
            </a>
            <a href="#how-it-works">
              <button style={{
                padding: '15px 28px', borderRadius: 10, fontSize: 15, fontWeight: 600,
                background: 'transparent', color: 'var(--text-1)',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'all 0.2s', fontFamily: 'var(--font-body)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.35)'; }}
              onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.borderColor='rgba(255,255,255,0.2)'; }}>
                See How It Works
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── HOW IT WORKS ── */
function HowItWorks() {
  return (
    <section id="how-it-works" style={{
      padding: '100px 24px',
      borderTop: '1px solid var(--border-soft)',
    }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <Reveal>
          <SectionLabel>Process</SectionLabel>
          <h2 style={headingStyle}>How 7appointa Works</h2>
          <p style={subStyle}>Three steps between you and your next confirmed appointment.</p>
        </Reveal>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 60,
          position: 'relative',
        }} className="steps-grid">
          <div style={{
            position: 'absolute', top: 52, left: '16%', right: '16%', height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
            zIndex: 0,
          }} className="steps-line" />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12}>
              <StepCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:720px){ .steps-grid{ grid-template-columns:1fr !important; } .steps-line{ display:none; } }`}</style>
    </section>
  );
}

function StepCard({ n, title, body }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{
      position: 'relative', zIndex: 1,
      background: hov ? 'var(--ink-3)' : 'var(--ink-2)',
      border: `1px solid ${hov ? 'rgba(255,255,255,0.18)' : 'var(--border)'}`,
      borderRadius: 18, padding: '32px 28px',
      transition: 'all 0.3s ease',
      transform: hov ? 'translateY(-4px)' : 'none',
    }}
    onMouseEnter={() => setHov(true)}
    onMouseLeave={() => setHov(false)}>
      <div style={{
        width: 48, height: 48, borderRadius: 12,
        background: hov ? '#FFFFFF' : 'rgba(255,255,255,0.06)',
        border: `1px solid ${hov ? '#FFFFFF' : 'rgba(255,255,255,0.12)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 14,
        color: hov ? '#000000' : 'var(--text-2)',
        transition: 'all 0.3s', marginBottom: 20,
      }}>{n}</div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, marginBottom: 10 }}>{title}</h3>
      <p style={{ color: 'var(--text-2)', fontSize: 15, lineHeight: 1.7 }}>{body}</p>
    </div>
  );
}

/* ── SERVICES ── */
function ServicesSection() {
  return (
    <section id="services" style={{
      padding: '100px 24px',
      background: 'var(--ink-2)',
      borderTop: '1px solid var(--border-soft)',
      borderBottom: '1px solid var(--border-soft)',
    }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <Reveal>
          <SectionLabel>Services</SectionLabel>
          <h2 style={headingStyle}>Service Categories We Work With</h2>
          <p style={subStyle}>
            We collaborate with professionals across the following service areas.
            Apply now if you provide any of these services.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginTop: 56 }}
             className="services-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:640px){ .services-grid{ grid-template-columns:1fr !important; } }`}</style>
    </section>
  );
}

function ServiceCard({ title }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{
      background: hov ? 'var(--ink-3)' : 'var(--ink)',
      border: `1px solid ${hov ? 'rgba(255,255,255,0.2)' : 'var(--border)'}`,
      borderRadius: 20, padding: '48px 40px',
      transition: 'all 0.3s ease',
      transform: hov ? 'translateY(-3px)' : 'none',
      display: 'flex', flexDirection: 'column', gap: 28,
      justifyContent: 'space-between',
    }}
    onMouseEnter={() => setHov(true)}
    onMouseLeave={() => setHov(false)}>
      <h3 style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'clamp(22px, 3vw, 32px)', letterSpacing: '-0.02em',
      }}>{title}</h3>
      <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer" style={{ alignSelf: 'flex-start' }}>
        <button style={{
          padding: '11px 28px', borderRadius: 9, fontSize: 14, fontWeight: 700,
          background: '#FFFFFF', color: '#000000', border: 'none',
          transition: 'all 0.2s', fontFamily: 'var(--font-body)',
        }}
        onMouseEnter={e => { e.currentTarget.style.background='#DDDDDD'; }}
        onMouseLeave={e => { e.currentTarget.style.background='#FFFFFF'; }}>
          Apply Now
        </button>
      </a>
    </div>
  );
}

/* ── WHY SECTION ── */
function WhySection() {
  return (
    <section style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <Reveal>
          <SectionLabel>Why 7appointa</SectionLabel>
          <h2 style={headingStyle}>All you need to grow.</h2>
          <p style={subStyle}>Built for service providers who want to work, not manage leads.</p>
        </Reveal>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 56,
        }} className="features-grid">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.1}>
              <FeatureCard {...f} />
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){ .features-grid{ grid-template-columns:repeat(2,1fr) !important; } }
        @media(max-width:560px){ .features-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}

function FeatureCard({ title, body }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{
      background: hov ? 'var(--ink-3)' : 'transparent',
      border: `1px solid ${hov ? 'rgba(255,255,255,0.14)' : 'var(--border-soft)'}`,
      borderRadius: 16, padding: '28px 24px',
      transition: 'all 0.3s ease',
    }}
    onMouseEnter={() => setHov(true)}
    onMouseLeave={() => setHov(false)}>
      <h4 style={{
        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16,
        marginBottom: 10, color: '#FFFFFF',
      }}>{title}</h4>
      <p style={{ color: 'var(--text-3)', fontSize: 14, lineHeight: 1.7 }}>{body}</p>
    </div>
  );
}

/* ── CTA BANNER ── */
function CtaBanner() {
  return (
    <section style={{
      padding: '80px 24px 100px',
      borderTop: '1px solid var(--border-soft)',
    }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <Reveal>
          <div style={{
            background: 'var(--ink-2)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 24, padding: 'clamp(40px,5vw,72px)',
            textAlign: 'center',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(28px,4vw,48px)', letterSpacing: '-0.025em',
              lineHeight: 1.12, marginBottom: 16, color: '#FFFFFF',
            }}>
              Ready to Fill Your<br />Calendar with Bookings?
            </h2>
            <p style={{ color: 'var(--text-2)', fontSize: 16, marginBottom: 36, lineHeight: 1.7 }}>
              Join service providers already growing with 7appointa.
            </p>
            <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
              <button style={{
                padding: '15px 40px', borderRadius: 10, fontSize: 15, fontWeight: 700,
                background: '#FFFFFF', color: '#000000', border: 'none',
                transition: 'all 0.2s', fontFamily: 'var(--font-body)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background='#DDDDDD'; e.currentTarget.style.transform='translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background='#FFFFFF'; e.currentTarget.style.transform='none'; }}>
                Apply Now
              </button>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── helpers ── */
const headingStyle = {
  fontFamily: 'var(--font-display)', fontWeight: 800,
  fontSize: 'clamp(28px,3.5vw,44px)', letterSpacing: '-0.025em',
  lineHeight: 1.15, marginBottom: 16, marginTop: 10, color: '#FFFFFF',
};
const subStyle = {
  color: 'var(--text-2)', fontSize: 16, maxWidth: 560, lineHeight: 1.75,
};
function SectionLabel({ children }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 4,
      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
      color: 'var(--text-3)',
    }}>
      <span style={{ width: 16, height: 1, background: 'var(--text-3)', display: 'block' }} />
      {children}
    </div>
  );
}
