import { useState } from 'react'

function Acordeon({ titulo, children }) {
  const [expandido, setExpandido] = useState(false)

  const toggleExpandido = () => {
    setExpandido((valorAnterior) => !valorAnterior)
  }

  const headerStyle = {
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
    padding: '10px 14px',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
  }

  const contenidoStyle = {
    padding: '12px 14px',
    border: '1px solid #ddd',
    borderTop: 'none',
  }

  return (
    <div style={{ marginBottom: '10px' }}>
      <div style={headerStyle} onClick={toggleExpandido}>
        <span>{titulo}</span>
        <span>{expandido ? '▼' : '▶'}</span>
      </div>

      {expandido && (
        <div style={contenidoStyle}>
          {children}
        </div>
      )}
    </div>
  )
}

export default Acordeon