import { useState, useEffect } from 'react'
import BotonAccion from '../lab3/BotonAccion'

const valorPorDefecto = {
  nombre: '',
  tema: 'claro',
  notificaciones: true,
}

function ConfiguracionUsuario() {
  const [config, setConfig] = useState(() => {
    try {
      const guardado = localStorage.getItem('config-usuario')
      return guardado ? JSON.parse(guardado) : valorPorDefecto
    } catch {
      return valorPorDefecto
    }
  })

  useEffect(() => {
    localStorage.setItem('config-usuario', JSON.stringify(config))
  }, [config])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setConfig((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const restablecer = () => {
    localStorage.removeItem('config-usuario')
    setConfig(valorPorDefecto)
  }

  return (
    <div>
      <div style={{ marginBottom: '12px' }}>
        <label>Nombre: </label>
        <input name="nombre" value={config.nombre} onChange={handleChange} style={{ padding: '6px' }} />
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label>Tema: </label>
        <select name="tema" value={config.tema} onChange={handleChange} style={{ padding: '6px' }}>
          <option value="claro">Claro</option>
          <option value="oscuro">Oscuro</option>
        </select>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label>
          <input type="checkbox" name="notificaciones" checked={config.notificaciones} onChange={handleChange} />
          {' '}Notificaciones
        </label>
      </div>

      <BotonAccion texto="Restablecer valores" variante="peligro" onClick={restablecer} />

      <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '6px' }}>
        <strong>Vista previa:</strong>
        <pre>{JSON.stringify(config, null, 2)}</pre>
      </div>
    </div>
  )
}

export default ConfiguracionUsuario