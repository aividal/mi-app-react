function ListaTareas() {
  const tareas = [
    { id: 1, titulo: "Estudiar React", completada: false, prioridad: "alta" },
    { id: 2, titulo: "Hacer ejercicio", completada: true, prioridad: "media" },
    { id: 3, titulo: "Leer un libro", completada: false, prioridad: "baja" },
    { id: 4, titulo: "Comprar comida", completada: true, prioridad: "alta" },
    { id: 5, titulo: "Llamar al médico", completada: false, prioridad: "alta" },
    { id: 6, titulo: "Organizar escritorio", completada: false, prioridad: "baja" },
    { id: 7, titulo: "Enviar correos", completada: true, prioridad: "media" },
  ]

  // .filter() crea un nuevo array con solo los elementos que cumplen la condición
  const pendientes = tareas.filter((tarea) => tarea.completada === false)
  const completadas = tareas.filter((tarea) => tarea.completada === true)

  return (
    <div>
      <h2>Tareas pendientes ({pendientes.length})</h2>
      {pendientes.length === 0 ? (
        <p>No hay tareas pendientes</p>
      ) : (
        <ul>
          {pendientes.map((tarea) => (
            <li
              key={tarea.id}
              style={{ color: tarea.prioridad === "alta" ? "red" : "black",
                       fontWeight: tarea.prioridad === "alta" ? "bold" : "normal" }}
            >
              {tarea.titulo} — <span>[{tarea.prioridad}]</span>
            </li>
          ))}
        </ul>
      )}

      <h2>Tareas completadas ({completadas.length})</h2>
      {completadas.length === 0 ? (
        <p>No hay tareas completadas</p>
      ) : (
        <ul>
          {completadas.map((tarea) => (
            <li key={tarea.id} style={{ textDecoration: "line-through" }}>
              {tarea.titulo}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListaTareas