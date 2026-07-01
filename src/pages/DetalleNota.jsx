import { useParams, Link, useNavigate } from 'react-router-dom'
import { useNotas } from '../context/NotasContext'

const badgeColor = {
  personal: '#3498db',
  trabajo: '#e74c3c',
  estudio: '#2ecc71',
  ideas: '#f39c12',
}

function DetalleNota() {
  const { id } = useParams()
  const { notas, eliminarNota } = useNotas()
  const navigate = useNavigate()

  const nota = notas.find((n) => n.id === id)

  if (!nota) {
    return (
      <div>
        <h2>Nota no encontrada</h2>
        <Link to="/notas">← Volver a notas</Link>
      </div>
    )
  }

  const handleEliminar = () => {
    if (window.confirm(`¿Estás seguro de eliminar "${nota.titulo}"?`)) {
      eliminarNota(id)
      navigate('/notas')
    }
  }

  const botonStyle = (color) => ({
    backgroundColor: color,
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    marginRight: '8px',
    textDecoration: 'none',
    display: 'inline-block',
  })

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <h2 style={{ margin: 0 }}>{nota.titulo} {nota.fijada ? '📌' : ''}</h2>
        <span style={{ backgroundColor: badgeColor[nota.categoria], color: 'white', padding: '4px 14px', borderRadius: '20px' }}>
          {nota.categoria}
        </span>
      </div>

      <p style={{ color: '#777', marginTop: '4px' }}>
        Creada el {new Date(nota.fechaCreacion).toLocaleDateString()}
      </p>

      <div style={{ backgroundColor: '#f9f9f9', borderRadius: '8px', padding: '20px', margin: '20px 0', lineHeight: '1.7' }}>
        {nota.contenido}
      </div>

      <div style={{ marginTop: '24px' }}>
        <Link to="/lab5/notas" style={botonStyle('#6c757d')}>← Volver</Link>
        <Link to={`/lab5/notas/${id}/editar`} style={botonStyle('#007bff')}>✏️ Editar</Link>
         navigate('/lab5/notas')
        <button onClick={handleEliminar} style={botonStyle('#dc3545')}>🗑️ Eliminar</button>
      </div>
    </div>
  )
}

export default DetalleNota