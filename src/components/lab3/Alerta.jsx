function Alerta({ tipo = 'info', titulo, children }) {
  const estilos = {
    exito:       { icono: '✅', fondo: '#d4edda', borde: '#28a745', texto: '#155724' },
    advertencia: { icono: '⚠️', fondo: '#fff3cd', borde: '#ffc107', texto: '#856404' },
    error:       { icono: '❌', fondo: '#f8d7da', borde: '#dc3545', texto: '#721c24' },
    info:        { icono: 'ℹ️', fondo: '#d1ecf1', borde: '#17a2b8', texto: '#0c5460' },
  }

  const estiloActual = estilos[tipo]

  const contenedorStyle = {
    backgroundColor: estiloActual.fondo,
    border: `1px solid ${estiloActual.borde}`,
    color: estiloActual.texto,
    borderRadius: '6px',
    padding: '12px 16px',
    margin: '8px 0',
  }

  return (
    <div style={contenedorStyle}>
      <strong>{estiloActual.icono} {titulo}</strong>
      <div>{children}</div>
    </div>
  )
}

export default Alerta