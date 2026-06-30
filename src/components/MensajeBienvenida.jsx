function MensajeBienvenida() {
  // Prueba cambiando esto a null para ver el otro caso
  const usuario = { nombre: "Carlos", rol: "admin" }

  // EARLY RETURN: si no hay usuario, salimos antes
  if (usuario === null) {
    return <p>Por favor, inicia sesión para continuar</p>
  }

  // Si llegamos aquí, es porque SÍ hay usuario
  return (
    <div>
      <h2>Bienvenido, {usuario.nombre}</h2>
      <p>Rol: {usuario.rol}</p>
      {usuario.rol === "admin" && (
        <p>Tienes acceso completo al sistema</p>
      )}
    </div>
  )
}

export default MensajeBienvenida