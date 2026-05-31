import './LeftPanel.css'

const projects = [
  { title: 'Project One', type: 'Visual Identity · 2023' },
  { title: 'Project Two', type: 'Icon System · 2022' },
  { title: 'Project Three', type: 'Frontend · UI Design · 2024' },
]

const contacts = [
  { label: 'email', value: 'your@email.com', href: 'mailto:your@email.com' },
  { label: 'linkedin', value: 'linkedin.com/in/rodolfopettinari', href: 'https://linkedin.com/in/rodolfopettinari' },
  { label: 'github', value: 'github.com/rosco', href: 'https://github.com/rosco' },
]

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function LeftPanel() {
  return (
    <div className="left-panel">

      {/* TOP BAR */}
      <div className="top-bar">
        <span>Rodolfo Pettinari</span>
        <span>Buenos Aires, Argentina</span>
      </div>

      {/* HERO */}
      <section className="hero">
        <h1 className="hero-title">Pet·ti·na·ri</h1>
        <div className="hero-meta">
          <span className="hero-phonetic">/ˈRosco/</span>
          <span className="hero-pos">n. — graphic designer who codes.</span>
        </div>
        <div className="hero-divider" />
        <p className="hero-definition">
          <strong>Graphic designer</strong>{' '}
          trained at the Universidad de Buenos Aires +{' '}
          <strong>UI/UX developer</strong>{' '}
          trained by twenty years of building websites and apps.
          With a calibrated eye for typography, readability, color, and hierarchy of information.
        </p>
        <p className="hero-see-also">
          See also:{' '}
          <span onClick={() => scrollTo('work')}>selected work</span>
          {' · '}
          <span onClick={() => scrollTo('contact')}>contact</span>
        </p>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <SectionLabel>About</SectionLabel>
        <div className="about-text">
          <p>I became a Graphic Designer in the early 2000s and started my career as a software developer in 2006. A lot has changed since then: frameworks have come and gone, best practices have been rewritten, and visual trends have cycled through more times than I can count. But the design principles remain the same — the things that make a UI easy to follow, a layout easy to read, and a brand identity recognizable.</p>
          <p>These are rules dictated by human perception — a mixture of knowledge in morphology, typography, visual communication, and lateral thinking. I had the privilege of learning these at one of the best places in the world to study them: the Universidad de Buenos Aires.</p>
          <p>Since 2006 I've been building websites and apps professionally — mostly frontend, always with that design foundation underneath. Over the years I've learned that developers who can't design and designers who can't code are both missing half the picture. I'm looking for a place where that actually matters.</p>
        </div>
      </section>

      {/* WORK */}
      <section className="section" id="work">
        <SectionLabel>Selected Work</SectionLabel>
        <div className="work-grid">
          {projects.map(p => (
            <div key={p.title} className="work-card">
              <div className="work-thumb">image coming soon</div>
              <div className="work-info">
                <div className="work-title">{p.title}</div>
                <div className="work-type">{p.type}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <SectionLabel>Contact</SectionLabel>
        {contacts.map(item => (
          <div key={item.label} className="contact-row">
            <span className="contact-label">{item.label}</span>
            <a className="contact-link" href={item.href} target="_blank" rel="noreferrer">{item.value}</a>
          </div>
        ))}
        <div className="contact-row">
          <span className="contact-label">location</span>
          <span className="contact-location">Buenos Aires, Argentina · Available remote</span>
        </div>
      </section>

      {/* FOOTER */}
      <div className="footer">
        <span>Rodolfo "Rosco" Pettinari</span>
        <span>2026</span>
      </div>

    </div>
  )
}

function SectionLabel({ children }) {
  return <div className="section-label">{children}</div>
}