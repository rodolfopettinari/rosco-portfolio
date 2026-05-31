import { useState, useRef } from 'react'
import { useMouse } from '../hooks/useMouse'
import './Skin1Visual.css'

// ─── Typographic machine ──────────────────────────────────────────────────────

const WORD_LABELS = ['Graphic', 'designer', 'who', 'codes.']

// Sizes in proportion X / 1.75X / 3.06X / 5.36X, X ≈ 38px
const SIZES = [38, 66, 116, 204]

const COLORS = [
  'rgba(250,249,245,0.3)',
  '#faf9f5',
  '#BE404F',
]

const INITIAL_WORDS = [
  { size: 204, color: '#faf9f5' },
  { size: 116, color: 'rgba(250,249,245,0.3)' },
  { size: 38,  color: '#BE404F' },
  { size: 66,  color: '#faf9f5' },
]

function styleFromSize(size) {
  if (size >= 116) return { fontStyle: 'italic', fontWeight: 900 }
  if (size === 66)  return { fontStyle: 'normal', fontWeight: 700 }
  return { fontStyle: 'normal', fontWeight: 400 }
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function nextWordState(current) {
  const curSizes = current.map(w => w.size)
  let sizes
  do { sizes = shuffle(SIZES) } while (sizes.every((s, i) => s === curSizes[i]))

  const doubleColor = COLORS[Math.floor(Math.random() * 3)]
  const singles = COLORS.filter(c => c !== doubleColor)
  const colors = shuffle([doubleColor, doubleColor, singles[0], singles[1]])

  return sizes.map((size, i) => ({ size, color: colors[i] }))
}

// ─── Ghost character grid ─────────────────────────────────────────────────────

// Characters that look good at various sizes in Playfair Display
const GHOST_POOL = ['G', 'D', 'R', 'P', 'O', 'g', 'd', 'r', 'p', 'c', '/', '&']

// Rhomboid grid: even rows have 6 nodes, odd rows have 5 (offset by half a column).
// The jitter is random but fixed at module load — positions are stable across renders.
const GRID_NODES = (() => {
  const evenXs = [2, 18, 36, 54, 72, 90]
  const oddXs  = [10, 27, 45, 63, 81]
  const rowYs  = [5, 21, 39, 57, 74, 91]
  return rowYs.flatMap((y, row) =>
    (row % 2 === 0 ? evenXs : oddXs).map(x => ({
      x: x + (Math.random() * 6 - 3),  // ±3% horizontal jitter
      y: y + (Math.random() * 8 - 4),  // ±4% vertical jitter
    }))
  )
})()
// Total: 3 even rows × 6 + 3 odd rows × 5 = 33 nodes

function generateGhosts() {
  return GRID_NODES.map(({ x, y }) => {
    // Squaring skews toward 0, so most characters are small/far, few are large/near
    const depth = Math.random() ** 2
    return {
      x, y,
      char: GHOST_POOL[Math.floor(Math.random() * GHOST_POOL.length)],
      fontSize: 8 + depth * 492,       // 8px (far) → 500px (near)
      opacity:  0.013 + depth * 0.055, // 0.013 (far) → 0.068 (near)
      color: Math.random() < 0.12 ? '#be4050' : '#faf9f5',
      fontWeight: Math.random() < 0.4 ? 900 : 400,
      fontStyle:  Math.random() < 0.25 ? 'italic' : 'normal',
    }
  })
}

const INITIAL_GHOSTS = generateGhosts()

// ─── Component ────────────────────────────────────────────────────────────────

export default function Skin1Visual() {
  const { onMove } = useMouse()
  const [words, setWords]   = useState(INITIAL_WORDS)
  const [ghosts, setGhosts] = useState(INITIAL_GHOSTS)
  const accumRef = useRef(0)

  // Both the typographic machine and the ghost grid fire on the same 50px tick.
  onMove((dist) => {
    accumRef.current += dist
    if (accumRef.current >= 50) {
      accumRef.current = 0
      setWords(prev => nextWordState(prev))
      setGhosts(generateGhosts())
    }
  })

  return (
    <div className="s1-visual">
      {/* Rhomboid ghost character grid — renders behind everything else */}
      {ghosts.map((g, i) => (
        <div
          key={i}
          className="s1-ghost-item"
          style={{
            left:       g.x + '%',
            top:        g.y + '%',
            fontSize:   g.fontSize + 'px',
            opacity:    g.opacity,
            color:      g.color,
            fontWeight: g.fontWeight,
            fontStyle:  g.fontStyle,
          }}
        >{g.char}</div>
      ))}

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

        <div className="s1-words-area">
          {words.map((w, i) => {
            const { fontStyle, fontWeight } = styleFromSize(w.size)
            return (
              <span
                key={WORD_LABELS[i]}
                className="s1-big-word"
                style={{ fontSize: w.size + 'px', fontStyle, fontWeight, color: w.color }}
              >
                {WORD_LABELS[i]}
              </span>
            )
          })}
        </div>

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
