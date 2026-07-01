import { createContext, useContext, useReducer, useEffect } from 'react'

const estadoInicial = {
  notas: [
    { id: '1', titulo: 'Comprar víveres', contenido: 'Leche, pan, huevos, frutas y verduras para la semana', categoria: 'personal', fijada: true, fechaCreacion: new Date().toISOString() },
    { id: '2', titulo: 'Estudiar React Router', contenido: 'Repasar useParams, useNavigate, BrowserRouter y rutas anidadas', categoria: 'estudio', fijada: true, fechaCreacion: new Date().toISOString() },
    { id: '3', titulo: 'Reunión de equipo', contenido: 'Revisar avances del sprint y planificar las tareas de la próxima semana', categoria: 'trabajo', fijada: false, fechaCreacion: new Date().toISOString() },
    { id: '4', titulo: 'Idea app de viajes', contenido: 'Crear una app que permita planificar itinerarios y guardar fotos de viajes', categoria: 'ideas', fijada: false, fechaCreacion: new Date().toISOString() },
    { id: '5', titulo: 'Ejercicio diario', contenido: 'Salir a correr 30 minutos cada mañana antes del desayuno', categoria: 'personal', fijada: false, fechaCreacion: new Date().toISOString() },
  ],
  filtroCategoria: 'todas',
  busqueda: '',
}

function reducer(estado, accion) {
  switch (accion.type) {
    case 'AGREGAR_NOTA':
      return { ...estado, notas: [accion.payload, ...estado.notas] }
    case 'ELIMINAR_NOTA':
      return { ...estado, notas: estado.notas.filter((n) => n.id !== accion.payload) }
    case 'EDITAR_NOTA':
      return {
        ...estado,
        notas: estado.notas.map((n) => n.id === accion.payload.id ? { ...n, ...accion.payload } : n),
      }
    case 'TOGGLE_FIJADA':
      return {
        ...estado,
        notas: estado.notas.map((n) => n.id === accion.payload ? { ...n, fijada: !n.fijada } : n),
      }
    case 'CAMBIAR_FILTRO':
      return { ...estado, filtroCategoria: accion.payload }
    case 'CAMBIAR_BUSQUEDA':
      return { ...estado, busqueda: accion.payload }
    default:
      return estado
  }
}

const NotasContext = createContext(null)

export function NotasProvider({ children }) {
  const estadoGuardado = () => {
    try {
      const data = localStorage.getItem('notas-app')
      return data ? { ...estadoInicial, notas: JSON.parse(data) } : estadoInicial
    } catch {
      return estadoInicial
    }
  }

  const [estado, dispatch] = useReducer(reducer, estadoInicial, estadoGuardado)

  useEffect(() => {
    localStorage.setItem('notas-app', JSON.stringify(estado.notas))
  }, [estado.notas])

  const agregarNota = (nota) => dispatch({ type: 'AGREGAR_NOTA', payload: { ...nota, id: Date.now().toString(), fechaCreacion: new Date().toISOString() } })
  const eliminarNota = (id) => dispatch({ type: 'ELIMINAR_NOTA', payload: id })
  const editarNota = (nota) => dispatch({ type: 'EDITAR_NOTA', payload: nota })
  const toggleFijada = (id) => dispatch({ type: 'TOGGLE_FIJADA', payload: id })
  const cambiarFiltro = (filtro) => dispatch({ type: 'CAMBIAR_FILTRO', payload: filtro })
  const cambiarBusqueda = (busqueda) => dispatch({ type: 'CAMBIAR_BUSQUEDA', payload: busqueda })

  return (
    <NotasContext.Provider value={{ ...estado, agregarNota, eliminarNota, editarNota, toggleFijada, cambiarFiltro, cambiarBusqueda }}>
      {children}
    </NotasContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useNotas() {
  const contexto = useContext(NotasContext)
  if (!contexto) throw new Error('useNotas debe usarse dentro de NotasProvider')
  return contexto
}