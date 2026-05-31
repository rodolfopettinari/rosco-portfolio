import './Skin1Visual.css'

export default function Skin1Visual() {
  return (
    <div className="s1-visual">
      {/* ghost background letters */}
      <div className="s1-ghost s1-ghost-1">G</div>
      <div className="s1-ghost s1-ghost-2">D</div>

      {/* structural lines */}
      <div className="s1-line-h" style={{ top: '38%' }} />
      <div className="s1-line-h" style={{ top: '68%' }} />
      <div className="s1-line-v" style={{ left: '72%' }} />
      <div className="s1-vbar" />

      {/* accent dots */}
      <div className="s1-dot" style={{ top: 'calc(38% - 2.5px)', left: '2rem' }} />
      <div className="s1-dot" style={{ top: 'calc(68% - 2.5px)', right: '2.5rem', opacity: 0.5 }} />

      {/* HERO TYPOGRAPHIC BLOCK */}
      <div className="s1-hero">
        <div className="s1-top-label">Rodolfo Pettinari</div>
        <span className="s1-big-word">Graphic</span>
        <span className="s1-big-word italic">designer</span>
        <span className="s1-big-word accent">who</span>
        <span className="s1-big-word">codes.</span>
        <div className="s1-hero-divider" />
        <div className="s1-hero-bottom">
          <span className="s1-tag">Universidad de Buenos Aires</span>
          <span className="s1-tag accent">·</span>
          <span className="s1-tag">Frontend Developer</span>
          <span className="s1-tag accent">·</span>
          <span className="s1-tag">UI / UX</span>
        </div>
      </div>

      {/* COLOR SYSTEM */}
      <div className="s1-section-title">color system</div>
      <div className="s1-color-block">
        <div className="s1-swatch-row">
          <div className="s1-swatch-item">
            <div className="s1-swatch" style={{ background: '#1a1a18', border: '0.5px solid rgba(255,255,255,0.1)' }} />
            <div className="s1-swatch-stack">
              <div className="s1-swatch-mini" style={{ background: '#4a4a45' }} />
              <div className="s1-swatch-mini" style={{ background: '#8a8a82' }} />
              <div className="s1-swatch-mini" style={{ background: '#d4d2c8' }} />
            </div>
            <div className="s1-swatch-label">--ink</div>
            <div className="s1-swatch-hex">#1a1a18</div>
          </div>
          <div className="s1-swatch-item">
            <div className="s1-swatch" style={{ background: '#be4050' }} />
            <div className="s1-swatch-stack">
              <div className="s1-swatch-mini" style={{ background: '#d4727f' }} />
              <div className="s1-swatch-mini" style={{ background: '#e8a0a8' }} />
              <div className="s1-swatch-mini" style={{ background: '#f9eaec' }} />
            </div>
            <div className="s1-swatch-label">--accent</div>
            <div className="s1-swatch-hex">#be4050</div>
          </div>
          <div className="s1-swatch-item">
            <div className="s1-swatch" style={{ background: '#faf9f5', border: '0.5px solid rgba(255,255,255,0.08)' }} />
            <div className="s1-swatch-stack">
              <div className="s1-swatch-mini" style={{ background: '#f0ede4' }} />
              <div className="s1-swatch-mini" style={{ background: '#e8e2d4' }} />
              <div className="s1-swatch-mini" style={{ background: '#d4d2c8' }} />
            </div>
            <div className="s1-swatch-label">--page</div>
            <div className="s1-swatch-hex">#faf9f5</div>
          </div>
        </div>
      </div>

      {/* TYPOGRAPHY */}
      <div className="s1-section-title">typography</div>
      <div className="s1-type-block">
        <div className="s1-type-row">
          <span className="s1-type-specimen" style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 900, color: '#faf9f5' }}>Aa</span>
          <span className="s1-type-meta">Playfair Display · 900 · display</span>
        </div>
        <div className="s1-type-row">
          <span className="s1-type-specimen" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontStyle: 'italic', color: 'rgba(250,249,245,0.5)' }}>Aa</span>
          <span className="s1-type-meta">Playfair Display · italic · subhead</span>
        </div>
        <div className="s1-type-row">
          <span className="s1-type-specimen" style={{ fontFamily: "'Source Serif 4', serif", fontSize: '0.9rem', color: 'rgba(250,249,245,0.6)' }}>Aa</span>
          <span className="s1-type-meta">Source Serif 4 · 400 · body</span>
        </div>
        <div className="s1-type-row">
          <span className="s1-type-specimen" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: 'rgba(190,64,80,0.8)' }}>Aa</span>
          <span className="s1-type-meta">JetBrains Mono · labels / tokens</span>
        </div>
      </div>

      {/* FOOTER */}
      <div className="s1-footer">
        <span className="s1-footer-name">Rodolfo "Rosco" Pettinari</span>
        <span className="s1-footer-year">2026</span>
      </div>
    </div>
  )
}