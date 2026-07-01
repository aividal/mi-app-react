import { useState, useEffect } from 'react'
import BotonAccion from '../lab3/BotonAccion'

function VisorDocumento() {
  const [contador, setContador] = useState(0)

  useEffect(() => {
    document.title = `Contador: ${contador} - Mi App`

    return () => {
      document.title = 'Mi App'
    }
  }, [contador])

  return (
    <div>
      <p>Contador: {contador}</p>
      <BotonAccion texto="Incrementar" variante="primario" onClick={() => setContador((v) => v + 1)} />
      <BotonAccion texto="Decrementar" variante="secundario" onClick={() => setContador((v) => v - 1)} />
    </div>
  )
}

export default VisorDocumento