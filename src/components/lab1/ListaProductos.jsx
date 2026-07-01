function ListaProductos() {
  const productos = [
    { id: 1, nombre: "Laptop", precio: 999.99, disponible: true },
    { id: 2, nombre: "Mouse", precio: 25.50, disponible: false },
    { id: 3, nombre: "Teclado", precio: 45.00, disponible: true },
    { id: 4, nombre: "Monitor", precio: 350.00, disponible: false },
    { id: 5, nombre: "Auriculares", precio: 80.00, disponible: true },
  ]

  return (
    <div>
      <h2>Productos</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>${producto.precio.toFixed(2)}</td>
              <td style={{ color: producto.disponible ? "green" : "red" }}>
                {producto.disponible ? "Disponible" : "Agotado"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListaProductos