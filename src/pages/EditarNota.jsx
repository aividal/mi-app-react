import { useParams, Link, useNavigate } from 'react-router-dom'
import { useNotas } from '../context/NotasContext'
import FormularioNota from '../components/lab5/FormularioNota'

function EditarNota() {
  const { id } = useParams()
  const { notas, editarNota } = useNotas()
  const navigate = useNavigate()

  const nota = notas.find((n) => n.id === id)

  if (!nota) {
    return (
      <div>
        <h2>Nota no encontrada</h2>
        <Link to="/notas">← Volver a notas</Link>
      </div>
    )
  }

  const handleGuardar = (datos) => {
    editarNota({ ...datos, id })
    navigate(`/notas/${id}`)
  }

  return (
    <div>
      <h2>Editar Nota</h2>
      <FormularioNota
        valoresIniciales={nota}
        textBoton="Guardar cambios"
        onGuardar={handleGuardar}
      />
    </div>
  )
}

export default EditarNota