function Dashboard() {
  const usuario = { nombre: "Luis", email: "luis@email.com", rol: "admin" }

  const notificaciones = [
    { id: 1, mensaje: "Nuevo comentario en tu post", leida: false },
    { id: 2, mensaje: "Tu pedido fue enviado", leida: true },
    { id: 3, mensaje: "Tienes una reunión mañana", leida: false },
    { id: 4, mensaje: "Actualización disponible", leida: true },
  ]

  const actividadReciente = [
    { id: 1, accion: "Inicio de sesión", fecha: "2025-05-25" },
    { id: 2, accion: "Editó su perfil", fecha: "2025-05-24" },
    { id: 3, accion: "Subió un archivo", fecha: "2025-05-23" },
  ]

  const noLeidas = notificaciones.filter((n) => n.leida === false)

  return (
    <>
      {/* Sección 1 */}
      <section>
        <h2>Usuario</h2>
        <p>Nombre: {usuario.nombre}</p>
        <p>Email: {usuario.email}</p>
        <p>Rol: {usuario.rol}</p>
      </section>

      {/* Sección 2 */}
      <section>
        <h2>Notificaciones no leídas: {noLeidas.length}</h2>
        {noLeidas.length === notificaciones.length - noLeidas.length && noLeidas.length === 0 ? (
          <p>No tienes notificaciones pendientes</p>
        ) : (
          <ul>
            {notificaciones.map((n) => (
              <li
                key={n.id}
                style={{
                  fontWeight: n.leida ? "normal" : "bold",
                  opacity: n.leida ? 0.5 : 1,
                }}
              >
                {n.mensaje}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Sección 3 */}
      <section>
        <h2>Actividad reciente</h2>
        {actividadReciente.length === 0 ? (
          <p>No hay actividad reciente</p>
        ) : (
          <ul>
            {actividadReciente.map((a) => (
              <li key={a.id}>{a.accion} — {a.fecha}</li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

export default Dashboard