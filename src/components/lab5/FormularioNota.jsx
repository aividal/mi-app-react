import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '8px',
  boxSizing: 'border-box',
  borderRadius: '6px',
  border: '1px solid #ddd',
  marginTop: '4px',
}

function FormularioNota({ valoresIniciales, textBoton, onGuardar }) {
  const navigate = useNavigate()

  const [form, setForm] = useState(valoresIniciales || {
    titulo: '',
    contenido: '',
    categoria: 'personal',
    fijada: false,
  })

  const [errores, setErrores] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const validar = () => {
    const nuevosErrores = {}
    if (form.titulo.length < 3) nuevosErrores.titulo = 'El título debe tener al menos 3 caracteres'
    if (form.contenido.length < 10) nuevosErrores.contenido = 'El contenido debe tener al menos 10 caracteres'
    return nuevosErrores
  }

  const handleSubmit = () => {
    const nuevosErrores = validar()
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores)
      return
    }
    onGuardar(form)
  }

  const hayErrores = Object.keys(validar()).length > 0

  return (
    <div>
      <div style={{ marginBottom: '16px' }}>
        <label>Título</label>
        <input name="titulo" value={form.titulo} onChange={handleChange} style={inputStyle} />
        {errores.titulo && <p style={{ color: '#dc3545', margin: '4px 0 0' }}>{errores.titulo}</p>}
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label>Contenido</label>
        <textarea name="contenido" value={form.contenido} onChange={handleChange} rows={5} style={inputStyle} />
        {errores.contenido && <p style={{ color: '#dc3545', margin: '4px 0 0' }}>{errores.contenido}</p>}
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label>Categoría</label>
        <select name="categoria" value={form.categoria} onChange={handleChange} style={inputStyle}>
          <option value="personal">Personal</option>
          <option value="trabajo">Trabajo</option>
          <option value="estudio">Estudio</option>
          <option value="ideas">Ideas</option>
        </select>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label>
          <input type="checkbox" name="fijada" checked={form.fijada} onChange={handleChange} />
          {' '}Fijar nota
        </label>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={handleSubmit}
          disabled={hayErrores}
          style={{
            backgroundColor: hayErrores ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            cursor: hayErrores ? 'not-allowed' : 'pointer',
          }}
        >
          {textBoton}
        </button>
        <button
          onClick={() => navigate(-1)}
          style={{ backgroundColor: '#6c757d', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer' }}
        >
          Cancelar
        </button>
      </div>
    </div>
  )
}

export default FormularioNota