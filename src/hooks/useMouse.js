import { useState, useEffect, useRef } from 'react'

// Hook compartido para animaciones disparadas por el mouse.
// Expone DOS cosas:
//   - position: { x, y } normalizado de -1 a 1 (centro = 0,0). Ideal para parallax.
//   - onMove(callback): registra una función que se llama en cada movimiento,
//     recibiendo la distancia recorrida desde el último frame. Ideal para
//     efectos basados en "cuánto se movió" (como la máquina tipográfica).
export function useMouse() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const callbacksRef = useRef(new Set())
  const last = useRef({ x: 0, y: 0, started: false })

  // Permite que cualquier componente registre un callback de movimiento.
  const onMove = (cb) => {
    useEffect(() => {
      callbacksRef.current.add(cb)
      return () => callbacksRef.current.delete(cb)
    }, [])
  }

  useEffect(() => {
    const handle = (e) => {
      // posición normalizada -1..1 respecto al centro de la ventana
      const nx = (e.clientX / window.innerWidth) * 2 - 1
      const ny = (e.clientY / window.innerHeight) * 2 - 1
      setPosition({ x: nx, y: ny })

      // distancia recorrida desde el último movimiento
      if (!last.current.started) {
        last.current = { x: e.clientX, y: e.clientY, started: true }
        return
      }
      const dx = e.clientX - last.current.x
      const dy = e.clientY - last.current.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      last.current.x = e.clientX
      last.current.y = e.clientY

      callbacksRef.current.forEach((cb) => cb(dist, { x: e.clientX, y: e.clientY }))
    }

    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [])

  return { position, onMove }
}