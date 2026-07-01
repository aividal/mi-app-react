import { useNotas } from '../context/NotasContext'
import { Link } from 'react-router-dom'

function Inicio() {
  const { notas } = useNotas()

  const fijadas = notas.filter((n) => n.fijada).length
  const categorias = ['personal', 'trabajo', 'estudio', 'ideas']

  const badgeColor = {
    personal: '#3498db',
    trabajo: '#e74c3c',
    estudio: '#2ecc71',
    ideas: '#f39c12',
  }

  return (
    <div>
      <h2>Bienvenido a MisNotas 👋</h2>
      <p>Organiza tus ideas, tareas y pensamientos en un solo lugar.</p>

      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', margin: '24px 0' }}>
        <div style={{ padding: '16px', backgroundColor: '#eaf4fb', borderRadius: '8px', minWidth: '140px' }}>
          <h3 style={{ margin: 0 }}>{notas.length}</h3>
          <p style={{ margin: 0, color: '#555' }}>Total notas</p>
        </div>
        <div style={{ padding: '16px', backgroundColor: '#fef9e7', borderRadius: '8px', minWidth: '140px' }}>
          <h3 style={{ margin: 0 }}>{fijadas}</h3>
          <p style={{ margin: 0, color: '#555' }}>Fijadas</p>
        </div>
      </div>

      <h3>Por categoría</h3>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {categorias.map((cat) => (
          <span key={cat} style={{ backgroundColor: badgeColor[cat], color: 'white', padding: '6px 14px', borderRadius: '20px' }}>
            {cat}: {notas.filter((n) => n.categoria === cat).length}
          </span>
        ))}
      </div>

      <div style={{ marginTop: '24px' }}>
        <Link to="/lab5/notas" style={{ marginRight: '12px', color: '#2c3e50', fontWeight: 'bold' }}>Ver todas las notas →</Link>
        <Link to="/lab5/notas/nueva" style={{ color: '#f39c12', fontWeight: 'bold' }}>Crear nueva nota →</Link>
      </div>
    </div>
  )
}

export default Inicio