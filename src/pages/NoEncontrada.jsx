import { Link } from 'react-router-dom'

function NoEncontrada() {
  return (
    <div style={{ textAlign: 'center', padding: '60px' }}>
      <h1 style={{ fontSize: '80px', margin: 0 }}>404</h1>
      <h2>Página no encontrada</h2>
      <p>La ruta que buscas no existe.</p>
      <Link to="/" style={{ color: '#2c3e50', fontWeight: 'bold' }}>← Volver al inicio</Link>
    </div>
  )
}

export default NoEncontrada