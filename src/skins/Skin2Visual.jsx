import './Skin2Visual.css'

export default function Skin2Visual() {
  return (
    <div className="s2-visual">
      <div className="s2-ghost">R</div>

      {/* TYPOGRAPHIC HERO */}
      <div className="s2-hero">
        <div className="s2-hero-label">Rodolfo Pettinari</div>
        <div className="s2-hero-type">
          <span className="blue">Graphic</span> <span className="ghost-word">designer</span><br />
          who <span className="pink">codes.</span>
        </div>
        <div className="s2-hero-divider" />
        <div className="s2-hero-tags">
          <span className="s2-htag">Universidad de Buenos Aires</span>
          <span className="s2-htag pink">·</span>
          <span className="s2-htag">Product / UI / UX</span>
          <span className="s2-htag pink">·</span>
          <span className="s2-htag">Frontend Developer</span>
        </div>
      </div>

      {/* PLATFORM STAGE */}
      <div className="s2-stage">

        {/* TABLET */}
        <div className="s2-tablet">
          <div className="s2-tablet-screen">
            <div className="s2-tb-head">
              <div className="s2-tb-title">Reports</div>
              <div className="s2-tb-tabs"><div className="s2-tb-tab active" /><div className="s2-tb-tab" /><div className="s2-tb-tab" /></div>
            </div>
            <div className="s2-tb-area">
              <svg viewBox="0 0 140 48" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                <defs>
                  <linearGradient id="tba" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6C91C2" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#6C91C2" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="12" x2="140" y2="12" stroke="#e8eaed" strokeWidth="0.5" />
                <line x1="0" y1="24" x2="140" y2="24" stroke="#e8eaed" strokeWidth="0.5" />
                <line x1="0" y1="36" x2="140" y2="36" stroke="#e8eaed" strokeWidth="0.5" />
                <path d="M0,36 L23,30 L46,33 L70,20 L93,24 L116,11 L140,7 L140,48 L0,48 Z" fill="url(#tba)" />
                <path d="M0,36 L23,30 L46,33 L70,20 L93,24 L116,11 L140,7" fill="none" stroke="#6C91C2" strokeWidth="1.5" />
                <path d="M0,42 L23,39 L46,40 L70,34 L93,36 L116,30 L140,27" fill="none" stroke="#E75A7C" strokeWidth="1.2" strokeDasharray="3 2" />
              </svg>
            </div>
            <div className="s2-tb-stats">
              <div className="s2-tb-st"><div className="s2-tb-st-num" style={{ color: '#6C91C2' }}>2.4k</div><div className="s2-tb-st-lbl">Sessions</div></div>
              <div className="s2-tb-st"><div className="s2-tb-st-num" style={{ color: '#E75A7C' }}>68%</div><div className="s2-tb-st-lbl">Retention</div></div>
            </div>
          </div>
        </div>

        {/* MAC */}
        <div className="s2-mac">
          <div className="s2-mac-screen">
            <div className="s2-mac-bar">
              <div className="s2-mac-dot" style={{ background: '#ff5f57' }} />
              <div className="s2-mac-dot" style={{ background: '#febc2e' }} />
              <div className="s2-mac-dot" style={{ background: '#28c840' }} />
              <span className="s2-mac-bar-title">app.rosco.design/analytics</span>
            </div>
            <div className="s2-dash">
              <div className="s2-dash-head">
                <div>
                  <div className="s2-dash-h-title">Analytics Overview</div>
                  <div className="s2-dash-h-sub">Last 30 days · updated 2m ago</div>
                </div>
                <div className="s2-dash-range">
                  <span className="s2-range-btn">7d</span>
                  <span className="s2-range-btn active">30d</span>
                  <span className="s2-range-btn">90d</span>
                </div>
              </div>

              <div className="s2-kpis">
                <div className="s2-kpi">
                  <div className="s2-kpi-top"><span className="s2-kpi-name">Revenue</span><span className="s2-kpi-delta up">+12%</span></div>
                  <div className="s2-kpi-num">$48.2k</div>
                  <svg className="s2-kpi-spark" viewBox="0 0 60 16" preserveAspectRatio="none">
                    <path d="M0,12 L10,10 L20,11 L30,6 L40,8 L50,3 L60,4" fill="none" stroke="#6C91C2" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="s2-kpi">
                  <div className="s2-kpi-top"><span className="s2-kpi-name">Users</span><span className="s2-kpi-delta up">+8%</span></div>
                  <div className="s2-kpi-num">12,847</div>
                  <svg className="s2-kpi-spark" viewBox="0 0 60 16" preserveAspectRatio="none">
                    <path d="M0,10 L10,11 L20,7 L30,8 L40,5 L50,6 L60,2" fill="none" stroke="#6C91C2" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="s2-kpi">
                  <div className="s2-kpi-top"><span className="s2-kpi-name">Churn</span><span className="s2-kpi-delta down">−3%</span></div>
                  <div className="s2-kpi-num">2.1%</div>
                  <svg className="s2-kpi-spark" viewBox="0 0 60 16" preserveAspectRatio="none">
                    <path d="M0,4 L10,5 L20,3 L30,7 L40,6 L50,9 L60,8" fill="none" stroke="#E75A7C" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>

              <div className="s2-main-chart">
                <div className="s2-mc-head">
                  <span className="s2-mc-title">Revenue vs. Target</span>
                  <div className="s2-mc-legend">
                    <span className="s2-legend-item"><span className="s2-legend-dot" style={{ background: '#6C91C2' }} />Actual</span>
                    <span className="s2-legend-item"><span className="s2-legend-dot" style={{ background: '#E75A7C' }} />Target</span>
                  </div>
                </div>
                <div className="s2-mc-plot">
                  <div className="s2-y-labels"><span>50k</span><span>25k</span><span>0</span></div>
                  <svg viewBox="0 0 300 80" preserveAspectRatio="none" style={{ paddingLeft: '18px' }}>
                    <defs>
                      <linearGradient id="mcg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6C91C2" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#6C91C2" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <line x1="0" y1="20" x2="300" y2="20" stroke="#e8eaed" strokeWidth="0.5" />
                    <line x1="0" y1="45" x2="300" y2="45" stroke="#e8eaed" strokeWidth="0.5" />
                    <line x1="0" y1="70" x2="300" y2="70" stroke="#e8eaed" strokeWidth="0.5" />
                    <path d="M0,60 L43,52 L86,55 L130,38 L173,42 L216,25 L260,28 L300,15 L300,80 L0,80 Z" fill="url(#mcg)" />
                    <path d="M0,60 L43,52 L86,55 L130,38 L173,42 L216,25 L260,28 L300,15" fill="none" stroke="#6C91C2" strokeWidth="2" />
                    <path d="M0,64 L43,60 L86,58 L130,50 L173,48 L216,40 L260,38 L300,32" fill="none" stroke="#E75A7C" strokeWidth="1.5" strokeDasharray="4 3" />
                    <circle cx="216" cy="25" r="2.5" fill="#6C91C2" />
                    <circle cx="300" cy="15" r="2.5" fill="#6C91C2" />
                  </svg>
                </div>
                <div className="s2-x-labels"><span>Wk 1</span><span>Wk 2</span><span>Wk 3</span><span>Wk 4</span></div>
              </div>

              <div className="s2-bottom-row">
                <div className="s2-panel bars">
                  <div className="s2-panel-title">Sales by Channel</div>
                  <div className="s2-barchart">
                    <div className="s2-ax"><span>100</span><span>50</span><span>0</span></div>
                    {[['60%','25%','Jan'],['70%','20%','Feb'],['50%','35%','Mar'],['85%','15%','Apr'],['65%','30%','May'],['78%','22%','Jun']].map(([a,b,l]) => (
                      <div className="s2-bar-group" key={l}>
                        <div className="s2-bar-stack">
                          <div className="s2-bar-seg" style={{ height: a, background: '#6C91C2' }} />
                          <div className="s2-bar-seg" style={{ height: b, background: '#E75A7C' }} />
                        </div>
                        <span className="s2-bar-label">{l}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="s2-panel donut">
                  <div className="s2-panel-title">Traffic Source</div>
                  <div className="s2-donut-wrap">
                    <div className="s2-donut"><div className="s2-donut-center">12k</div></div>
                    <div className="s2-donut-legend">
                      <div className="s2-dl-item"><span className="s2-dl-dot" style={{ background: '#6C91C2' }} /><span className="s2-dl-text">Organic</span><span className="s2-dl-val">48%</span></div>
                      <div className="s2-dl-item"><span className="s2-dl-dot" style={{ background: '#E75A7C' }} /><span className="s2-dl-text">Paid</span><span className="s2-dl-val">28%</span></div>
                      <div className="s2-dl-item"><span className="s2-dl-dot" style={{ background: '#2C363F' }} /><span className="s2-dl-text">Direct</span><span className="s2-dl-val">24%</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PHONE */}
        <div className="s2-phone">
          <div className="s2-phone-screen">
            <div className="s2-ph-top">
              <div className="s2-ph-greet">Good morning, Rosco</div>
              <div className="s2-ph-balance">$8,420.50</div>
              <svg className="s2-ph-mini-area" viewBox="0 0 80 30" preserveAspectRatio="none" style={{ width: '100%', marginTop: '4px' }}>
                <path d="M0,22 L13,18 L26,20 L40,12 L53,15 L66,7 L80,9" fill="none" stroke="#6C91C2" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="s2-ph-body">
              <div className="s2-ph-row">
                <div className="s2-ph-ico" style={{ background: 'rgba(108,145,194,0.18)' }} />
                <div className="s2-ph-row-lines"><div className="s2-ph-l" style={{ width: '80%' }} /><div className="s2-ph-l" style={{ width: '50%' }} /></div>
                <span className="s2-ph-amt" style={{ color: '#6C91C2' }}>+$1.2k</span>
              </div>
              <div className="s2-ph-row">
                <div className="s2-ph-ico" style={{ background: 'rgba(231,90,124,0.18)' }} />
                <div className="s2-ph-row-lines"><div className="s2-ph-l" style={{ width: '70%' }} /><div className="s2-ph-l" style={{ width: '45%' }} /></div>
                <span className="s2-ph-amt" style={{ color: '#E75A7C' }}>−$340</span>
              </div>
              <div className="s2-ph-row">
                <div className="s2-ph-ico" style={{ background: 'rgba(44,54,63,0.12)' }} />
                <div className="s2-ph-row-lines"><div className="s2-ph-l" style={{ width: '75%' }} /><div className="s2-ph-l" style={{ width: '40%' }} /></div>
                <span className="s2-ph-amt" style={{ color: '#6C91C2' }}>+$890</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* SYSTEM */}
      <div className="s2-system">
        <div className="s2-sys-col">
          <div className="s2-sys-label">color system</div>
          <div className="s2-sys-colors">
            {[['#2C363F','#2C363F'],['#6C91C2','#6C91C2'],['#E75A7C','#E75A7C'],['#FAFAFA','#FAFAFA'],['#FFFFFF','#FFFFFF']].map(([bg,hex]) => (
              <div className="s2-sys-sw" key={hex}>
                <div className="s2-sys-swatch" style={{ background: bg, border: bg === '#FFFFFF' ? '1px solid rgba(255,255,255,0.2)' : 'none' }} />
                <div className="s2-sys-hex">{hex}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="s2-sys-col">
          <div className="s2-sys-label">typography</div>
          <div className="s2-sys-type-item">
            <span className="s2-sys-spec" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.3rem', fontWeight: 800, color: '#fff' }}>Aa</span>
            <span className="s2-sys-meta">DM Sans · 800 · display</span>
          </div>
          <div className="s2-sys-type-item">
            <span className="s2-sys-spec" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 400, color: 'rgba(255,255,255,0.7)' }}>Aa</span>
            <span className="s2-sys-meta">Inter · 400 · body / UI</span>
          </div>
        </div>
      </div>

      <div className="s2-footer">
        <span className="s2-footer-name">Rodolfo "Rosco" Pettinari</span>
        <span className="s2-footer-year">2026</span>
      </div>

    </div>
  )
}