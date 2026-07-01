function EstadoPedido() {
  const estado = "enviado"  // prueba: pendiente, enviado, entregado, cancelado

  // Decidimos el ícono según el estado
  let icono
  let mensaje

  if (estado === "pendiente") {
    icono = "⏳"
    mensaje = "Tu pedido está siendo procesado"
  } else if (estado === "enviado") {
    icono = "🚚"
    mensaje = "Tu pedido está en camino"
  } else if (estado === "entregado") {
    icono = "✅"
    mensaje = "Tu pedido ha sido entregado"
  } else {
    icono = "❌"
    mensaje = "Tu pedido fue cancelado"
  }

  return (
    <div>
      <p>{icono} {mensaje}</p>

      {/* El && significa: "solo muestra esto SI la condición es true" */}
      {estado === "enviado" && (
        <p>Tiempo estimado de entrega: 2-3 días hábiles</p>
      )}
    </div>
  )
}

export default EstadoPedido 