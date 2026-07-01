import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { useNotas } from '../../context/NotasContext'

function Layout() {
  const { notas } = useNotas()
  const navigate = useNavigate()

  const navStyle = {
    backgroundColor: '#2c3e50',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  }

  const linkStyle = ({ isActive }) => ({
    color: isActive ? '#f39c12' : 'white',
    textDecoration: 'none',
    padding: '16px 0',
    fontWeight: isActive ? 'bold' : 'normal',
    borderBottom: isActive ? '3px solid #f39c12' : '3px solid transparent',
  })

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ backgroundColor: '#2c3e50', color: 'white', padding: '16px 24px' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>📝 MisNotas</h1>
        <small>Total de notas: {notas.length}</small>
      </header>

      <nav style={navStyle}>
        <button
          onClick={() => navigate('/')}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '14px',
            padding: '16px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          ← Volver
        </button>

        <NavLink to="/lab5" end style={linkStyle}>Inicio</NavLink>
        <NavLink to="/lab5/notas" style={linkStyle}>Notas</NavLink>
        <NavLink to="/lab5/notas/nueva" style={linkStyle}>Nueva nota</NavLink>
      </nav>

      <main style={{ flex: 1, padding: '24px', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
        <Outlet />
      </main>

      <footer style={{ backgroundColor: '#2c3e50', color: 'white', padding: '12px 24px', textAlign: 'center' }}>
        © 2026 MisNotas
      </footer>
    </div>
  )
}

export default Layout