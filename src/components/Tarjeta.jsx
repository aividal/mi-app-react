function Tarjeta() {
  const datos = {
    titulo: "Proyecto Final",
    descripcion: "Una aplicación web construida con React y Vite.",
    etiquetas: ["React", "Vite", "CSS"],
    destacado: true,
  }

  const estiloContenedor = {
    border: datos.destacado ? "2px solid gold" : "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    maxWidth: "300px",
    background: datos.destacado ? "#fffbe6" : "white",
  }

  const estiloEtiqueta = {
    background: "#4a90e2",
    color: "white",
    borderRadius: "12px",
    padding: "2px 10px",
    marginRight: "6px",
    fontSize: "12px",
  }

  return (
    <div style={estiloContenedor}>
      <h3>{datos.titulo}</h3>
      <p>{datos.descripcion}</p>
      <div>
        {datos.etiquetas.map((etiqueta) => (
          <span key={etiqueta} style={estiloEtiqueta}>{etiqueta}</span>
        ))}
      </div>
    </div>
  )
}

export default Tarjeta