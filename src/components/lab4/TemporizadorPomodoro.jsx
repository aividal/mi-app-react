import { useState, useEffect, useRef } from 'react'
import BotonAccion from '../lab3/BotonAccion'

function TemporizadorPomodoro() {
  const [segundos, setSegundos] = useState(1500)
  const [corriendo, setCorriendo] = useState(false)
  const terminado = useRef(false)

  useEffect(() => {
    if (!corriendo) return

    const intervalo = setInterval(() => {
      setSegundos((v) => {
        if (v <= 1) {
          clearInterval(intervalo)
          terminado.current = true
          return 0
        }
        return v - 1
      })
    }, 1000)

    return () => clearInterval(intervalo)
  }, [corriendo])

  useEffect(() => {
    if (segundos === 0 && terminado.current) {
      terminado.current = false
      setCorriendo(false)
      alert('¡Tiempo terminado!')
    }
  }, [segundos])

  const minutos = Math.floor(segundos / 60).toString().padStart(2, '0')
  const segs = (segundos % 60).toString().padStart(2, '0')

  return (
    <div>
      <h2 style={{ fontSize: '48px', margin: '16px 0' }}>{minutos}:{segs}</h2>
      <BotonAccion
        texto="Iniciar"
        variante="primario"
        onClick={() => setCorriendo(true)}
        disabled={corriendo || segundos === 0}
      />
      <BotonAccion
        texto="Pausar"
        variante="secundario"
        onClick={() => setCorriendo(false)}
        disabled={!corriendo}
      />
      <BotonAccion
        texto="Reiniciar"
        variante="peligro"
        onClick={() => { setCorriendo(false); setSegundos(1500); terminado.current = false }}
      />
    </div>
  )
}

export default TemporizadorPomodoro
