import Perfil from './components/Perfil'
import Clima from './components/Clima'
import EstadoPedido from './components/EstadoPedido'
import MensajeBienvenida from './components/MensajeBienvenida'
import ListaHabilidades from './components/ListaHabilidades'
import ListaProductos from './components/ListaProductos'
import ListaTareas from './components/ListaTareas'
import Tarjeta from './components/Tarjeta'
import Dashboard from './components/Dashboard'

function App() {
  const estiloSeccion = {
    borderBottom: "2px solid #eee",
    padding: "24px",
    marginBottom: "16px",
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1>Laboratorio 1 — React JSX</h1>

      <section style={estiloSeccion}><h2>Ejercicio 1 — Perfil</h2><Perfil /></section>
      <section style={estiloSeccion}><h2>Ejercicio 2 — Clima</h2><Clima /></section>
      <section style={estiloSeccion}><h2>Ejercicio 3 — Estado Pedido</h2><EstadoPedido /></section>
      <section style={estiloSeccion}><h2>Ejercicio 4 — Bienvenida</h2><MensajeBienvenida /></section>
      <section style={estiloSeccion}><h2>Ejercicio 5 — Habilidades</h2><ListaHabilidades /></section>
      <section style={estiloSeccion}><h2>Ejercicio 6 — Productos</h2><ListaProductos /></section>
      <section style={estiloSeccion}><h2>Ejercicio 7 — Tareas</h2><ListaTareas /></section>
      <section style={estiloSeccion}><h2>Ejercicio 8 — Tarjeta</h2><Tarjeta /></section>
      <section style={estiloSeccion}><h2>Ejercicio 9 — Dashboard</h2><Dashboard /></section>
    </div>
  )
}

export default App