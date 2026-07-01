function BotonAccion({ texto, variante = 'primario', disabled = false, onClick }) {
  const estilos = {
    primario:   { backgroundColor: '#007bff', color: 'white', border: 'none' },
    secundario: { backgroundColor: '#6c757d', color: 'white', border: 'none' },
    peligro:    { backgroundColor: '#dc3545', color: 'white', border: 'none' },
  }

  const botonStyle = {
    ...estilos[variante],
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    margin: '4px',
    fontSize: '14px',
  }

  return (
    <button style={botonStyle} disabled={disabled} onClick={onClick}>
      {texto}
    </button>
  )
}

export default BotonAccion