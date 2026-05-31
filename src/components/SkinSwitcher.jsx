import { useState, useEffect, useRef } from 'react'

export default function SkinSwitcher({ skins, activeIndex, onChange }) {
  const [menuOpen, setMenuOpen] = useState(false)
  // Una vez que el usuario interactúa manualmente, el scroll deja de cambiar el skin.
  const [autoEnabled, setAutoEnabled] = useState(true)
  const autoEnabledRef = useRef(true)

  // Mantenemos el ref sincronizado para poder leerlo dentro del listener de scroll.
  useEffect(() => {
    autoEnabledRef.current = autoEnabled
  }, [autoEnabled])

  // Cambio automático por scroll: al pasar 70px, sugiere el SIGUIENTE skin UNA sola vez.
  // Después se autodesactiva para evitar loops y respetar al usuario.
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!autoEnabledRef.current) return
  //     if (window.scrollY > 120) {
  //       autoEnabledRef.current = false   // se apaga inmediatamente
  //       setAutoEnabled(false)
  //       onChange(1)                      // va al skin 2 una sola vez
  //     }
  //   }
  //   window.addEventListener('scroll', handleScroll, { passive: true })
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [onChange])

  const handleManualSelect = (index) => {
    setAutoEnabled(false)       // desactiva el cambio por scroll para siempre
    onChange(index)
    setMenuOpen(false)
  }

  return (
    <div className="skin-switcher">
      <button
        className="skin-switcher-btn"
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Change theme"
      >
        <span /><span /><span />
      </button>

      {menuOpen && (
        <div className="skin-switcher-menu">
          {skins.map((skin, i) => (
            <button
              key={skin.id}
              className={`skin-switcher-item ${i === activeIndex ? 'active' : ''}`}
              onClick={() => handleManualSelect(i)}
            >
              {skin.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}