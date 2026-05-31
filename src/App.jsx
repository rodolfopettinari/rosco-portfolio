import { useState, useEffect } from 'react'
import './index.css'
import './App.css'
import { skins } from './skins/skinConfig'
import LeftPanel from './components/LeftPanel'
import SkinSwitcher from './components/SkinSwitcher'
import Skin1Visual from './skins/Skin1Visual'
import Skin2Visual from './skins/Skin2Visual'

// Mapea cada skin a su composición visual derecha.
const visuals = [Skin1Visual, Skin2Visual]

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeSkin = skins[activeIndex]

  // Aplica los tokens del skin activo como CSS variables en el root.
  useEffect(() => {
    const root = document.documentElement
    Object.entries(activeSkin.tokens).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })
  }, [activeSkin])

  const RightVisual = visuals[activeIndex]

  return (
    <div className={`portfolio-shell skin-${activeSkin.id}`}>
      <SkinSwitcher
        skins={skins}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
      />

      <div className="split-layout">
        <div className="split-left">
          <LeftPanel />
        </div>
        <div className="split-right" style={{ background: activeSkin.tokens['--right-bg'] }}>
          <RightVisual />
        </div>
      </div>
    </div>
  )
}