import { useState, useEffect, useRef } from 'react'

// Hook compartido para animaciones disparadas por el mouse O el scroll.
// Expone DOS cosas:
//   - position: { x, y } normalizado de -1 a 1 (centro = 0,0). Ideal para parallax.
//   - onMove(callback): registra una función que se llama tanto en mousemove como
//     en scroll, recibiendo la distancia recorrida en px. Los componentes que la usan
//     acumulan esa distancia sin distinguir si vino del mouse o del scroll.
export function useMouse() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const callbacksRef = useRef(new Set())
  const lastMouse = useRef({ x: 0, y: 0, started: false })
  const lastScrollY = useRef(null)

  // Permite que cualquier componente registre un callback de movimiento.
  const onMove = (cb) => {
    useEffect(() => {
      callbacksRef.current.add(cb)
      return () => callbacksRef.current.delete(cb)
    }, [])
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      // posición normalizada -1..1 respecto al centro de la ventana
      const nx = (e.clientX / window.innerWidth) * 2 - 1
      const ny = (e.clientY / window.innerHeight) * 2 - 1
      setPosition({ x: nx, y: ny })

      if (!lastMouse.current.started) {
        lastMouse.current = { x: e.clientX, y: e.clientY, started: true }
        return
      }
      const dx = e.clientX - lastMouse.current.x
      const dy = e.clientY - lastMouse.current.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      lastMouse.current.x = e.clientX
      lastMouse.current.y = e.clientY

      callbacksRef.current.forEach((cb) => cb(dist, { x: e.clientX, y: e.clientY }))
    }

    const handleScroll = () => {
      const currentY = window.scrollY
      if (lastScrollY.current === null) {
        lastScrollY.current = currentY
        return
      }
      const dist = Math.abs(currentY - lastScrollY.current)
      lastScrollY.current = currentY
      if (dist > 0) {
        callbacksRef.current.forEach((cb) => cb(dist, null))
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { position, onMove }
}