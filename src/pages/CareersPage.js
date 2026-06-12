import React, { useState, useEffect, useRef } from 'react';

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

const ROLES = [
  {
    id: 1, dept: 'Growth',
    title: 'Provider Partnerships Manager',
    type: 'Full-time', location: 'Hybrid',
    desc: 'Own the provider acquisition funnel. You will identify, reach out to, and onboard high-quality service providers — car detailers, cleaning services and beyond — into the 7appointa network.',
    skills: ['Sales', 'Relationship Management', 'CRM', 'Communications'],
  },
  {
    id: 2, dept: 'Operations',
    title: 'Scheduling Coordinator',
    type: 'Part-time', location: 'Remote',
    desc: 'Manage the day-to-day booking flow between customers and providers. You will handle confirmations, changes, and exceptions — making sure every appointment goes smoothly.',
    skills: ['Communication', 'Organisation', 'Customer Service', 'Attention to Detail'],
  },
  {
    id: 3, dept: 'Design',
    title: 'Product Designer',
    type: 'Contract', location: 'Remote',
    desc: 'Create intuitive, clean experiences for both customers and service providers. Own end-to-end design from research to high-fidelity Figma handoff.',
    skills: ['Figma', 'UX Research', 'Prototyping', 'Design Systems'],
  },
  {
    id: 4, dept: 'Marketing',
    title: 'Content & SEO Specialist',
    type: 'Part-time', location: 'Remote',
    desc: 'Grow our organic presence across search and social. You will create content that attracts both customers looking for services and professionals looking to grow their client base.',
    skills: ['SEO', 'Content Writing', 'Analytics', 'Social Media'],
  },
  {
    id: 5, dept: 'Operations',
    title: 'Customer Support',
    type: 'Part-time', location: 'Remote',
    desc: 'Serve as the first point of contact for customers and providers. You will handle inquiries, resolve issues, and ensure a smooth experience on both sides of the platform.',
    skills: ['Communication', 'Problem Solving', 'Customer Service', 'Patience'],
  },
];

const DEPTS = ['All', ...Array.from(new Set(ROLES.map(r => r.dept)))];

const PERKS = [
  { title: 'Remote-first', desc: 'Work from anywhere. We care about outcomes, not office hours.' },
  { title: 'Equity Options', desc: 'Early employees share in the company\'s success.' },
  { title: 'Fast-paced Growth', desc: 'Build things that go live within days, not quarters.' },
  { title: 'Health Coverage', desc: 'Comprehensive health and wellness benefits.' },
];

export default function CareersPage() {
  const [selected, setSelected] = useState('All');
  const filtered = selected === 'All' ? ROLES : ROLES.filter(r => r.dept === selected);

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Hero */}
      <section style={{
        padding: '80px 24px 72px', position: 'relative', overflow: 'hidden',
        borderBottom: '1px solid var(--border-soft)',
      }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        }}>
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04 }}
               xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid2" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M60 0 L0 0 0 60" fill="none" stroke="#FFFFFF" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid2)"/>
          </svg>
        </div>
        <div style={{ maxWidth: 1160, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="anim-fade-up" style={{
            display: 'inline-block', padding: '5px 14px', borderRadius: 100, marginBottom: 24,
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
            fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--text-3)',
          }}>
            We're hiring
          </div>
          <h1 className="anim-fade-up-d1" style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(36px,5vw,64px)', letterSpacing: '-0.03em',
            lineHeight: 1.1, marginBottom: 24, color: '#FFFFFF',
          }}>
            Build the future of<br />service marketplaces
          </h1>
          <p className="anim-fade-up-d2" style={{
            color: 'var(--text-2)', fontSize: 17, maxWidth: 560, lineHeight: 1.75, marginBottom: 0,
          }}>
            We're a small, ambitious team building the infrastructure that connects skilled service professionals with customers who need them. Come shape the foundation.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section style={{ padding: '72px 24px 0' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="perks-grid">
            {PERKS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div style={{
                  background: 'var(--ink-2)', border: '1px solid var(--border-soft)',
                  borderRadius: 14, padding: '24px 20px',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14,
                    marginBottom: 8, color: '#FFFFFF',
                  }}>{p.title}</div>
                  <div style={{ color: 'var(--text-3)', fontSize: 13, lineHeight: 1.65 }}>{p.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Role listings */}
      <section style={{ padding: '72px 24px 100px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <Reveal>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(26px,3vw,40px)', letterSpacing: '-0.025em',
              marginBottom: 28, color: '#FFFFFF',
            }}>Open Positions</h2>
          </Reveal>

          {/* Department filter */}
          <Reveal delay={0.08}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
              {DEPTS.map(d => (
                <button key={d} onClick={() => setSelected(d)} style={{
                  padding: '7px 18px', borderRadius: 100, fontSize: 13, fontWeight: 600,
                  border: `1px solid ${selected === d ? 'rgba(255,255,255,0.4)' : 'var(--border)'}`,
                  background: selected === d ? 'rgba(255,255,255,0.08)' : 'transparent',
                  color: selected === d ? '#FFFFFF' : 'var(--text-3)',
                  cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'var(--font-body)',
                }}>
                  {d}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Role cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {filtered.map((role, i) => (
              <Reveal key={role.id} delay={i * 0.06}>
                <RoleCard {...role} />
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-3)' }}>
              No open roles in this department right now.
            </div>
          )}

          {/* General apply */}
          <Reveal delay={0.15}>
            <div style={{
              marginTop: 52, padding: '36px', borderRadius: 18,
              background: 'var(--ink-2)', border: '1px solid var(--border)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              gap: 24, flexWrap: 'wrap',
            }}>
              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, marginBottom: 6 }}>
                  Don't see a role that fits?
                </h4>
                <p style={{ color: 'var(--text-2)', fontSize: 14 }}>
                  We're always looking for exceptional people. Send us your story.
                </p>
              </div>
              <a href="mailto:Contact@7appointa.com?subject=General Application — 7appointa" style={{
                padding: '11px 26px', borderRadius: 9, fontSize: 14, fontWeight: 600,
                background: '#FFFFFF', color: '#000000',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'background 0.2s', whiteSpace: 'nowrap', display: 'inline-block',
              }}
              onMouseEnter={e => e.currentTarget.style.background='#DDDDDD'}
              onMouseLeave={e => e.currentTarget.style.background='#FFFFFF'}>
                Send general application
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      <style>{`
        @media(max-width:900px){ .perks-grid{ grid-template-columns:repeat(2,1fr) !important; } }
        @media(max-width:500px){ .perks-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </div>
  );
}

function RoleCard({ title, dept, type, location, desc, skills }) {
  const [open, setOpen] = useState(false);
  const [hov, setHov] = useState(false);

  const typeColor = { 'Full-time': '#FFFFFF', 'Part-time': '#AAAAAA', 'Contract': '#888888' };

  return (
    <div style={{
      background: hov || open ? 'var(--ink-3)' : 'var(--ink-2)',
      border: `1px solid ${open ? 'rgba(255,255,255,0.18)' : hov ? 'rgba(255,255,255,0.1)' : 'var(--border)'}`,
      borderRadius: 16, overflow: 'hidden', transition: 'all 0.2s ease',
    }}
    onMouseEnter={() => setHov(true)}
    onMouseLeave={() => setHov(false)}>
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '22px 26px', cursor: 'pointer', gap: 16, flexWrap: 'wrap',
      }} onClick={() => setOpen(!open)}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1 }}>
          <div style={{
            padding: '3px 11px', borderRadius: 100, fontSize: 11, fontWeight: 700,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            background: 'rgba(255,255,255,0.06)', color: 'var(--text-3)',
            border: '1px solid rgba(255,255,255,0.08)', whiteSpace: 'nowrap',
          }}>{dept}</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: '#FFFFFF' }}>{title}</h3>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{
            padding: '3px 10px', borderRadius: 100, fontSize: 11, fontWeight: 600,
            color: typeColor[type], background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}>{type}</span>
          <span style={{ color: 'var(--text-3)', fontSize: 13 }}>{location}</span>
          <div style={{
            width: 30, height: 30, borderRadius: 7, display: 'flex', alignItems: 'center',
            justifyContent: 'center', background: 'rgba(255,255,255,0.05)',
            transition: 'transform 0.25s ease',
            transform: open ? 'rotate(180deg)' : 'none',
          }}>
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M3 5L7 9L11 5" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Expanded */}
      {open && (
        <div style={{ padding: '0 26px 26px', borderTop: '1px solid var(--border-soft)' }}>
          <p style={{ color: 'var(--text-2)', fontSize: 15, lineHeight: 1.75, marginTop: 20, marginBottom: 20 }}>
            {desc}
          </p>
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
              color: 'var(--text-3)', marginBottom: 10 }}>Key skills</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {skills.map(s => (
                <span key={s} style={{
                  padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 500,
                  background: 'rgba(255,255,255,0.05)', color: 'var(--text-2)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}>{s}</span>
              ))}
            </div>
          </div>
          <a href={`mailto:Contact@7appointa.com?subject=Application: ${title}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '11px 24px', borderRadius: 9, fontSize: 14, fontWeight: 700,
            background: '#FFFFFF', color: '#000000',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background='#DDDDDD'; e.currentTarget.style.transform='translateY(-1px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background='#FFFFFF'; e.currentTarget.style.transform='none'; }}>
            Apply for this role
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M7 3L11 7L7 11" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
