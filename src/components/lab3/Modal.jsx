function Modal({ titulo, abierto, children }) {
  if (!abierto) return null

  const fondoStyle = {
    position: 'fixed',
    top: 0, left: 0,
    width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  }

  const contenedorStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '24px',
    minWidth: '300px',
    maxWidth: '500px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
  }

  return (
    <div style={fondoStyle}>
      <div style={contenedorStyle}>
        <h3 style={{ marginTop: 0 }}>{titulo}</h3>
        {children}
      </div>
    </div>
  )
}

export default Modal