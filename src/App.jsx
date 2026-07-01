import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { NotasProvider } from './context/NotasContext'

import Layout from './components/lab5/Layout'
import Inicio from './pages/Inicio'
import Notas from './pages/Notas'
import NuevaNota from './pages/NuevaNota'
import DetalleNota from './pages/DetalleNota'
import EditarNota from './pages/EditarNota'
import NoEncontrada from './pages/NoEncontrada'

import Acordeon from './components/lab3/Acordeon'
import Perfil from './components/lab1/Perfil'
import Clima from './components/lab1/Clima'
import EstadoPedido from './components/lab1/EstadoPedido'
import MensajeBienvenida from './components/lab1/MensajeBienvenida'
import ListaHabilidades from './components/lab1/ListaHabilidades'
import ListaProductos from './components/lab1/ListaProductos'
import ListaTareas from './components/lab1/ListaTareas'
import Tarjeta from './components/lab1/Tarjeta'
import Dashboard from './components/lab1/Dashboard'
import Alerta from './components/lab3/Alerta'
import BotonAccion from './components/lab3/BotonAccion'
import Modal from './components/lab3/Modal'
import Contador from './components/lab3/Contador'
import ListaContactos from './components/lab3/ListaContactos'
import FormularioEvento from './components/lab3/FormularioEvento'
import VisorDocumento from './components/lab4/VisorDocumento'
import TemporizadorPomodoro from './components/lab4/TemporizadorPomodoro'
import ConfiguracionUsuario from './components/lab4/ConfiguracionUsuario'

// ===== PÁGINAS DE CADA LAB =====

function PaginaInicio() {
  const navigate = useNavigate()

  const labs = [
    { numero: 2, titulo: 'Componentes JSX', color: '#3b0351', ruta: '/lab2' },
    { numero: 3, titulo: 'Props y Estado', color: '#3b0351', ruta: '/lab3' },
    { numero: 4, titulo: 'Efectos y localStorage', color: '#3b0351', ruta: '/lab4' },
    { numero: 5, titulo: 'Estado Global y Routing', color: '#3b0351', ruta: '/lab5' },
  ]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f6fa', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{color: '#380346', marginBottom: '8px' }}>🎓 Mis Laboratorios</h1>
      <p style={{ color: '#4e0462', marginBottom: '40px' }}>Programación Web Avanzada</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 200px)', gap: '20px' }}>
        {labs.map((lab) => (
          <button
            key={lab.numero}
            onClick={() => navigate(lab.ruta)}
            style={{
              backgroundColor: lab.color,
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              padding: '30px 20px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              transition: 'transform 0.1s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <span style={{ fontSize: '32px', fontWeight: 'bold' }}>Lab {lab.numero}</span>
            <span style={{ fontSize: '13px', opacity: 0.9 }}>{lab.titulo}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

function Lab2() {
  const navigate = useNavigate()
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px', fontFamily: 'sans-serif' }}>
      <button onClick={() => navigate('/')} style={{ marginBottom: '20px', padding: '8px 16px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
        ← Volver
      </button>
      <h1>Laboratorio 2 — Componentes JSX</h1>
      <Acordeon titulo="Ejercicio 1 — Perfil"><Perfil /></Acordeon>
      <Acordeon titulo="Ejercicio 2 — Clima"><Clima /></Acordeon>
      <Acordeon titulo="Ejercicio 3 — Estado Pedido"><EstadoPedido /></Acordeon>
      <Acordeon titulo="Ejercicio 4 — Bienvenida"><MensajeBienvenida /></Acordeon>
      <Acordeon titulo="Ejercicio 5 — Habilidades"><ListaHabilidades /></Acordeon>
      <Acordeon titulo="Ejercicio 6 — Productos"><ListaProductos /></Acordeon>
      <Acordeon titulo="Ejercicio 7 — Tareas"><ListaTareas /></Acordeon>
      <Acordeon titulo="Ejercicio 8 — Tarjeta"><Tarjeta /></Acordeon>
      <Acordeon titulo="Ejercicio 9 — Dashboard"><Dashboard /></Acordeon>
    </div>
  )
}

function Lab3() {
  const navigate = useNavigate()
  const [modalAbierto, setModalAbierto] = useState(false)
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px', fontFamily: 'sans-serif' }}>
      <button onClick={() => navigate('/')} style={{ marginBottom: '20px', padding: '8px 16px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
        ← Volver
      </button>
      <h1>Laboratorio 3 — Props y Estado</h1>
      <Acordeon titulo="Ejercicio 1 — Alertas">
        <Alerta tipo="exito" titulo="Operación exitosa">Tu cambio fue guardado correctamente.</Alerta>
        <Alerta tipo="advertencia" titulo="Cuidado">Esta acción no se puede deshacer.</Alerta>
        <Alerta tipo="error" titulo="Error">No se pudo conectar con el servidor.</Alerta>
        <Alerta tipo="info" titulo="Información">Tu sesión expirará en 10 minutos.</Alerta>
      </Acordeon>
      <Acordeon titulo="Ejercicio 1 — Acordeón">
        <Acordeon titulo="Sección 1"><p>Contenido de la sección 1</p></Acordeon>
        <Acordeon titulo="Sección 2"><p>Contenido de la sección 2</p></Acordeon>
        <Acordeon titulo="Sección 3"><p>Contenido de la sección 3</p></Acordeon>
      </Acordeon>
      <Acordeon titulo="Ejercicio 2 — Modal y Contador">
        <BotonAccion texto="Abrir Modal" variante="primario" onClick={() => setModalAbierto(true)} />
        <Modal titulo="Este es el Modal" abierto={modalAbierto}>
          <p>Contenido del modal.</p>
          <BotonAccion texto="Cerrar" variante="secundario" onClick={() => setModalAbierto(false)} />
        </Modal>
        <Contador />
      </Acordeon>
      <Acordeon titulo="Ejercicio 3 — Lista de Contactos"><ListaContactos /></Acordeon>
      <Acordeon titulo="Ejercicio 4 — Formulario de Evento"><FormularioEvento /></Acordeon>
    </div>
  )
}

function Lab4() {
  const navigate = useNavigate()
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px', fontFamily: 'sans-serif' }}>
      <button onClick={() => navigate('/')} style={{ marginBottom: '20px', padding: '8px 16px', backgroundColor: '#e67e22', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
        ← Volver
      </button>
      <h1>Laboratorio 4 — Efectos </h1>
      <Acordeon titulo="Ejercicio 1 — Visor Documento"><VisorDocumento /></Acordeon>
      <Acordeon titulo="Ejercicio 2 — Temporizador Pomodoro"><TemporizadorPomodoro /></Acordeon>
      <Acordeon titulo="Ejercicio 3 — Configuración Usuario"><ConfiguracionUsuario /></Acordeon>
    </div>
  )
}

function Lab5() {
  return (
    <NotasProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="notas" element={<Notas />} />
          <Route path="notas/nueva" element={<NuevaNota />} />
          <Route path="notas/:id" element={<DetalleNota />} />
          <Route path="notas/:id/editar" element={<EditarNota />} />
          <Route path="*" element={<NoEncontrada />} />
        </Route>
      </Routes>
    </NotasProvider>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/lab2/*" element={<Lab2 />} />
        <Route path="/lab3/*" element={<Lab3 />} />
        <Route path="/lab4/*" element={<Lab4 />} />
        <Route path="/lab5/*" element={<Lab5 />} />
        <Route path="*" element={<NoEncontrada />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App