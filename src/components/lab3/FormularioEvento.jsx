import { useState } from 'react'
import Alerta from './Alerta'
import BotonAccion from './BotonAccion'

const estadoInicial = {
  titulo: '',
  fecha: '',
  categoria: '',
  descripcion: '',
  esPublico: false,
}

function FormularioEvento() {
  const [form, setForm] = useState(estadoInicial)
  const [errores, setErrores] = useState({})
  const [eventos, setEventos] = useState([])
  const [exitoso, setExitoso] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const validar = () => {
    const nuevosErrores = {}
    const hoy = new Date().toISOString().split('T')[0]

    if (form.titulo.length < 5)
      nuevosErrores.titulo = 'El título debe tener al menos 5 caracteres'
    if (!form.fecha)
      nuevosErrores.fecha = 'La fecha no puede estar vacía'
    else if (form.fecha < hoy)
      nuevosErrores.fecha = 'La fecha no puede ser una fecha pasada'
    if (!form.categoria)
      nuevosErrores.categoria = 'Debes seleccionar una categoría'
    if (form.descripcion.length < 20)
      nuevosErrores.descripcion = 'La descripción debe tener al menos 20 caracteres'

    return nuevosErrores
  }

  const handleSubmit = () => {
    const nuevosErrores = validar()
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores)
      return
    }

    setEventos((prev) => [...prev, { ...form, id: Date.now() }])
    setErrores({})
    setForm(estadoInicial)
    setExitoso(true)

    setTimeout(() => setExitoso(false), 4000)
  }

  const camposVacios = !form.titulo || !form.fecha || !form.categoria || !form.descripcion

  return (
    <div>
      {exitoso && (
        <Alerta tipo="exito" titulo="Evento registrado">
          El evento fue guardado correctamente.
        </Alerta>
      )}

      <div style={{ marginBottom: '12px' }}>
        <label>Título</label>
        <input
          name="titulo"
          value={form.titulo}
          onChange={handleChange}
          style={{ display: 'block', width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
        {errores.titulo && <Alerta tipo="error" titulo="Error">{errores.titulo}</Alerta>}
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
          style={{ display: 'block', width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
        {errores.fecha && <Alerta tipo="error" titulo="Error">{errores.fecha}</Alerta>}
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label>Categoría</label>
        <select
          name="categoria"
          value={form.categoria}
          onChange={handleChange}
          style={{ display: 'block', width: '100%', padding: '8px', boxSizing: 'border-box' }}
        >
          <option value="">Selecciona una categoría</option>
          <option value="conferencia">Conferencia</option>
          <option value="taller">Taller</option>
          <option value="seminario">Seminario</option>
          <option value="otro">Otro</option>
        </select>
        {errores.categoria && <Alerta tipo="error" titulo="Error">{errores.categoria}</Alerta>}
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label>Descripción</label>
        <textarea
          name="descripcion"
          value={form.descripcion}
          onChange={handleChange}
          rows={4}
          style={{ display: 'block', width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
        {errores.descripcion && <Alerta tipo="error" titulo="Error">{errores.descripcion}</Alerta>}
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label>
          <input
            type="checkbox"
            name="esPublico"
            checked={form.esPublico}
            onChange={handleChange}
          />
          {' '}Evento público
        </label>
      </div>

      <BotonAccion
        texto="Registrar evento"
        variante="primario"
        disabled={camposVacios}
        onClick={handleSubmit}
      />

      {eventos.length > 0 && (
        <div style={{ marginTop: '24px' }}>
          <h3>Eventos registrados</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {eventos.map((ev) => (
              <li key={ev.id} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '6px', marginBottom: '8px' }}>
                <strong>{ev.titulo}</strong> — {ev.fecha} — {ev.categoria} — {ev.esPublico ? 'Público' : 'Privado'}
                <p style={{ margin: '4px 0 0', color: '#555' }}>{ev.descripcion}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default FormularioEvento