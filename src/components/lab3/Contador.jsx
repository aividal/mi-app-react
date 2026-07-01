import { useState } from 'react'
import BotonAccion from './BotonAccion'
import Alerta from './Alerta'

function Contador() {
  const [valor, setValor] = useState(0)

  return (
    <div style={{ padding: '16px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3 style={{ marginTop: 0 }}>Contador: {valor}</h3>

      <div>
        <BotonAccion
          texto="Decrementar"
          variante="secundario"
          disabled={valor === 0}
          onClick={() => setValor((v) => v - 1)}
        />
        <BotonAccion
          texto="Incrementar"
          variante="primario"
          onClick={() => setValor((v) => v + 1)}
        />
        <BotonAccion
          texto="Incrementar +5"
          variante="primario"
          onClick={() => setValor((v) => v + 5)}
        />
        <BotonAccion
          texto="Reiniciar"
          variante="peligro"
          onClick={() => setValor(0)}
        />
      </div>

      {valor === 0 && (
        <Alerta tipo="info" titulo="Información">
          El contador está en cero
        </Alerta>
      )}

      {valor > 10 && (
        <Alerta tipo="advertencia" titulo="Atención">
          ¡Valor alto!
        </Alerta>
      )}
    </div>
  )
}

export default Contador