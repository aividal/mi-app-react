import { useNotas } from '../context/NotasContext'
import { Link } from 'react-router-dom'

const badgeColor = {
  personal: '#3498db',
  trabajo: '#e74c3c',
  estudio: '#2ecc71',
  ideas: '#f39c12',
}

function Notas() {
  const { notas, filtroCategoria, busqueda, cambiarFiltro, cambiarBusqueda, toggleFijada } = useNotas()

  const notasFiltradas = notas
    .filter((n) => {
      const coincideBusqueda =
        n.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        n.contenido.toLowerCase().includes(busqueda.toLowerCase())
      const coincideCategoria = filtroCategoria === 'todas' || n.categoria === filtroCategoria
      return coincideBusqueda && coincideCategoria
    })
    .sort((a, b) => b.fijada - a.fijada)

  const fijadas = notasFiltradas.filter((n) => n.fijada)
  const noFijadas = notasFiltradas.filter((n) => !n.fijada)

  const tarjetaStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '12px',
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    boxShadow: '0 2px 4px rgba(0,0,0,0.06)',
    backgroundColor: 'white',
  }

  const renderTarjeta = (nota) => (
    <Link key={nota.id} to={`/lab5/notas/${nota.id}`} style={{ ...tarjetaStyle, borderLeft: nota.fijada ? '4px solid    #f39c12' : '4px solid transparent' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong>{nota.titulo}</strong>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span
            style={{ cursor: 'pointer', fontSize: '18px' }}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleFijada(nota.id) }}
          >
            {nota.fijada ? '📌' : '📍'}
          </span>
          <span style={{ backgroundColor: badgeColor[nota.categoria], color: 'white', padding: '2px 10px', borderRadius: '12px', fontSize: '12px' }}>
            {nota.categoria}
          </span>
        </div>
      </div>
      <p style={{ color: '#555', margin: '8px 0 0' }}>
        {nota.contenido.length > 100 ? nota.contenido.slice(0, 100) + '...' : nota.contenido}
      </p>
      <small style={{ color: '#999' }}>{new Date(nota.fechaCreacion).toLocaleDateString()}</small>
    </Link>
  )

  return (
    <div>
      <h2>Mis Notas</h2>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Buscar notas..."
          value={busqueda}
          onChange={(e) => cambiarBusqueda(e.target.value)}
          style={{ padding: '8px', flex: 1, minWidth: '200px', borderRadius: '6px', border: '1px solid #ddd' }}
        />
        <select
          value={filtroCategoria}
          onChange={(e) => cambiarFiltro(e.target.value)}
          style={{ padding: '8px', borderRadius: '6px', border: '1px solid #ddd' }}
        >
          <option value="todas">Todas</option>
          <option value="personal">Personal</option>
          <option value="trabajo">Trabajo</option>
          <option value="estudio">Estudio</option>
          <option value="ideas">Ideas</option>
        </select>
      </div>

      <p style={{ color: '#777' }}>{notasFiltradas.length} de {notas.length} notas</p>

      {notasFiltradas.length === 0 && (
        <div style={{ padding: '24px', backgroundColor: '#d1ecf1', borderRadius: '8px', color: '#0c5460' }}>
          ℹ️ No se encontraron notas con esos criterios
        </div>
      )}

      {fijadas.length > 0 && (
        <>
          <h3 style={{ color: '#f39c12' }}>📌 Fijadas</h3>
          {fijadas.map(renderTarjeta)}
        </>
      )}

      {noFijadas.length > 0 && (
        <>
          {fijadas.length > 0 && <h3>Otras notas</h3>}
          {noFijadas.map(renderTarjeta)}
        </>
      )}
    </div>
  )
}

export default Notas