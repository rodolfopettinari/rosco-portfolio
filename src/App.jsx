import './index.css'

const PaperCorner = () => (
  <svg
    style={{ position: 'fixed', top: 0, right: 0, width: 380, height: 380, pointerEvents: 'none', zIndex: 0 }}
    viewBox="0 0 280 280"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="paper-noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/>
        <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise"/>
        <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="blended"/>
        <feComposite in="blended" in2="SourceGraphic" operator="in"/>
      </filter>
      <filter id="worn">
        <feTurbulence type="turbulence" baseFrequency="0.02 0.05" numOctaves="3" seed="8" result="turb"/>
        <feDisplacementMap in="SourceGraphic" in2="turb" scale="3" xChannelSelector="R" yChannelSelector="G"/>
      </filter>
      <radialGradient id="corner-fade" cx="100%" cy="0%" r="70%">
        <stop offset="0%" stopColor="#c8b99a" stopOpacity="0.55"/>
        <stop offset="40%" stopColor="#d4c4a8" stopOpacity="0.3"/>
        <stop offset="100%" stopColor="#e8dfc8" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <rect width="280" height="280" fill="url(#corner-fade)" filter="url(#paper-noise)"/>
    <ellipse cx="210" cy="50" rx="40" ry="37" fill="none" stroke="#a09070" strokeWidth="1.2" strokeOpacity="0.18" filter="url(#worn)"/>
    <ellipse cx="210" cy="50" rx="31" ry="29" fill="none" stroke="#a09070" strokeWidth="0.6" strokeOpacity="0.1" filter="url(#worn)"/>
    <line x1="280" y1="0" x2="190" y2="90" stroke="#a09070" strokeWidth="0.5" strokeOpacity="0.15"/>
    <circle cx="235" cy="32" r="2.5" fill="#9a8a6a" fillOpacity="0.12"/>
    <circle cx="255" cy="58" r="1.8" fill="#9a8a6a" fillOpacity="0.1"/>
    <circle cx="222" cy="75" r="1.2" fill="#9a8a6a" fillOpacity="0.14"/>
    <circle cx="260" cy="22" r="1.5" fill="#9a8a6a" fillOpacity="0.09"/>
    <circle cx="245" cy="95" r="2" fill="#9a8a6a" fillOpacity="0.08"/>
    <circle cx="270" cy="80" r="1.3" fill="#9a8a6a" fillOpacity="0.11"/>
  </svg>
)

const skills = [
  'Visual Systems', 'Iconography', 'Design Tokens',
  'React', 'HTML & CSS', 'Figma', 'Illustrator', 'UI/UX'
]

const projects = [
  { title: 'Project One', type: 'Visual Identity · 2023' },
  { title: 'Project Two', type: 'Icon System · 2022' },
  { title: 'Project Three', type: 'Frontend · UI Design · 2024' },
]

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function App() {
  return (
    <>
      <PaperCorner />

      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 720,
        margin: '0 auto',
        padding: '0 2rem 4rem'
      }}>

        {/* TOP BAR */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 0 1rem',
          borderBottom: '0.5px solid var(--ink-faint)',
          fontSize: 11,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--ink-light)'
        }}>
          <span>Rodolfo Pettinari</span>
          <span>Buenos Aires, Argentina</span>
        </div>

        {/* HERO */}
        <section style={{ padding: '3.5rem 0 3rem', borderBottom: '2px solid var(--ink)' }}>
          <div style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2.8rem, 7vw, 4.2rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1,
            marginBottom: '0.35rem'
          }}>
            Pet·ti·na·ri
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '1.2rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--ink-mid)' }}>
              /ˈRosco/
            </span>
            <span style={{ fontSize: '0.82rem', fontStyle: 'italic', color: 'var(--ink-light)' }}>
              n. — graphic designer who codes.
            </span>
          </div>

          <div style={{ width: '2.5rem', height: '1.5px', background: 'var(--accent)', marginBottom: '1.2rem' }} />

          <p style={{ fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 560 }}>
            A visual systems thinker with roots in{' '}
            <strong style={{ color: 'var(--accent)', fontWeight: 500 }}>graphic design</strong>{' '}
            and a second language in{' '}
            <strong style={{ color: 'var(--accent)', fontWeight: 500 }}>frontend development</strong>.
            Obsessed with iconography, typographic hierarchy, and the craft of building things that scale.
          </p>

          <p style={{ marginTop: '1rem', fontSize: '0.82rem', color: 'var(--ink-light)', fontStyle: 'italic' }}>
            See also:{' '}
            <span onClick={() => scrollTo('work')} style={{ color: 'var(--accent)', fontStyle: 'normal', borderBottom: '0.5px solid var(--accent)', cursor: 'pointer' }}>selected work</span>
            {' · '}
            <span onClick={() => scrollTo('contact')} style={{ color: 'var(--accent)', fontStyle: 'normal', borderBottom: '0.5px solid var(--accent)', cursor: 'pointer' }}>contact</span>
          </p>
        </section>

        {/* ABOUT */}
        <section style={{ paddingTop: '2.8rem' }} id="about">
          <SectionLabel>About</SectionLabel>
          <div style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--ink-mid)', maxWidth: 580 }}>
            <p>I started as a graphic designer — Illustrator, Photoshop, print, identity systems — and over time taught myself to code. That path wasn't accidental. I wanted to understand not just how things look, but how they're built.</p>
            <p style={{ marginTop: '1rem' }}>Today I work at the intersection of design and frontend engineering. I care about visual precision, systematic thinking, and the kind of consistency that makes a product feel trustworthy.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem' }}>
            {skills.map(skill => (
              <span key={skill} style={{
                fontSize: '0.78rem',
                color: 'var(--accent)',
                border: '0.5px solid var(--accent)',
                padding: '0.3rem 0.75rem',
                borderRadius: '2rem',
                letterSpacing: '0.04em',
                background: 'var(--accent-light)'
              }}>{skill}</span>
            ))}
          </div>
        </section>

        {/* WORK */}
        <section style={{ paddingTop: '2.8rem' }} id="work">
          <SectionLabel>Selected Work</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {projects.map(p => (
              <div key={p.title} style={{
                background: 'white',
                border: '0.5px solid var(--ink-faint)',
                borderRadius: 4,
                overflow: 'hidden',
                cursor: 'pointer'
              }}>
                <div style={{
                  width: '100%',
                  aspectRatio: '4/3',
                  background: 'var(--ink-faint)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  color: 'var(--ink-light)',
                  fontStyle: 'italic'
                }}>image coming soon</div>
                <div style={{ padding: '0.85rem 1rem', borderTop: '0.5px solid var(--ink-faint)' }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.95rem', fontWeight: 500, marginBottom: '0.2rem' }}>{p.title}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--ink-light)', fontStyle: 'italic' }}>{p.type}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section style={{ paddingTop: '2.8rem' }} id="contact">
          <SectionLabel>Contact</SectionLabel>
          {[
            { label: 'email', value: 'your@email.com' },
            { label: 'linkedin', value: 'linkedin.com/in/rosco' },
            { label: 'github', value: 'github.com/rosco' },
            { label: 'location', value: 'Buenos Aires, Argentina · Available remote' },
          ].map(item => (
            <div key={item.label} style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.5rem',
              padding: '0.6rem 0',
              borderBottom: '0.5px solid var(--ink-faint)',
              fontSize: '0.9rem'
            }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--ink-light)', fontStyle: 'italic', minWidth: 80 }}>{item.label}</span>
              <span style={{ color: item.label === 'location' ? 'var(--ink-mid)' : 'var(--accent)' }}>{item.value}</span>
            </div>
          ))}
        </section>

        {/* FOOTER */}
        <div style={{
          marginTop: '4rem',
          paddingTop: '1.5rem',
          borderTop: '0.5px solid var(--ink-faint)',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.75rem',
          color: 'var(--ink-light)',
          fontStyle: 'italic'
        }}>
          <span>Rodolfo "Rosco" Pettinari</span>
          <span>2026</span>
        </div>

      </div>
    </>
  )
}

function SectionLabel({ children }) {
  return (
    <div style={{
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ink-light)',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }}>
      {children}
      <span style={{ flex: 1, height: '0.5px', background: 'var(--ink-faint)', display: 'block' }} />
    </div>
  )
}