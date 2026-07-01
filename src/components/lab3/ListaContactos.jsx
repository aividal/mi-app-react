import { useState } from 'react'
import Modal from './Modal'
import BotonAccion from './BotonAccion'
import Alerta from './Alerta'

function ListaContactos() {
  const [contactos, setContactos] = useState([
    { id: 1, nombre: 'Ana García', telefono: '555-1234', favorito: true },
    { id: 2, nombre: 'Carlos López', telefono: '555-5678', favorito: false },
    { id: 3, nombre: 'María Pérez', telefono: '555-9012', favorito: true },
    { id: 4, nombre: 'Juan Torres', telefono: '555-3456', favorito: false },
    { id: 5, nombre: 'Sofía Martín', telefono: '555-7890', favorito: false },
  ])

  const [busqueda, setBusqueda] = useState('')
  const [soloFavoritos, setSoloFavoritos] = useState(false)
  const [modalAbierto, setModalAbierto] = useState(false)
  const [contactoAEliminar, setContactoAEliminar] = useState(null)

  const toggleFavorito = (id) => {
    setContactos((prev) =>
      prev.map((c) => c.id === id ? { ...c, favorito: !c.favorito } : c)
    )
  }

  const abrirModalEliminar = (contacto) => {
    setContactoAEliminar(contacto)
    setModalAbierto(true)
  }

  const confirmarEliminar = () => {
    setContactos((prev) => prev.filter((c) => c.id !== contactoAEliminar.id))
    setModalAbierto(false)
    setContactoAEliminar(null)
  }

  const cancelarEliminar = () => {
    setModalAbierto(false)
    setContactoAEliminar(null)
  }

  const totalFavoritos = contactos.filter((c) => c.favorito).length

  let contactosFiltrados = contactos.filter((c) => {
    const coincideBusqueda =
      c.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      c.telefono.includes(busqueda)
    const coincideFavorito = soloFavoritos ? c.favorito : true
    return coincideBusqueda && coincideFavorito
  })

  return (
    <div>
      <p>Favoritos: {totalFavoritos} / {contactos.length} — Resultados: {contactosFiltrados.length}</p>

      <input
        type="text"
        placeholder="Buscar por nombre o teléfono..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ padding: '8px', width: '100%', marginBottom: '8px', boxSizing: 'border-box' }}
      />

      <BotonAccion
        texto={soloFavoritos ? 'Mostrar todos' : 'Solo favoritos'}
        variante="secundario"
        onClick={() => setSoloFavoritos((v) => !v)}
      />

      {contactosFiltrados.length === 0 ? (
        <Alerta tipo="info" titulo="Sin resultados">
          No se encontraron contactos
        </Alerta>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {contactosFiltrados.map((c) => (
            <li key={c.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderBottom: '1px solid #eee' }}>
              <span
                style={{ cursor: 'pointer', fontSize: '20px' }}
                onClick={() => toggleFavorito(c.id)}
              >
                {c.favorito ? '★' : '☆'}
              </span>
              <span style={{ flex: 1 }}>{c.nombre}</span>
              <span style={{ color: '#666' }}>{c.telefono}</span>
              <BotonAccion
                texto="Eliminar"
                variante="peligro"
                onClick={() => abrirModalEliminar(c)}
              />
            </li>
          ))}
        </ul>
      )}

      <Modal titulo="Confirmar eliminación" abierto={modalAbierto}>
        <p>¿Estás seguro de eliminar a {contactoAEliminar?.nombre}?</p>
        <BotonAccion texto="Cancelar" variante="secundario" onClick={cancelarEliminar} />
        <BotonAccion texto="Eliminar" variante="peligro" onClick={confirmarEliminar} />
      </Modal>
    </div>
  )
}

export default ListaContactos