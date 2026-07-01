import { useState, useEffect } from 'react'

function useNotificacion(duracion = 3000) {
  const [notificacion, setNotificacion] = useState(null)

  useEffect(() => {
    if (!notificacion) return

    const timeout = setTimeout(() => {
      setNotificacion(null)
    }, duracion)

    return () => clearTimeout(timeout)
  }, [notificacion, duracion])

  const mostrar = (mensaje, tipo = 'info') => {
    setNotificacion({ id: Date.now(), mensaje, tipo })
  }

  const cerrar = () => setNotificacion(null)

  return { notificacion, mostrar, cerrar }
}

export default useNotificacion