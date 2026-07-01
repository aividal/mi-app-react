import { useNotas } from '../context/NotasContext'
import { useNavigate } from 'react-router-dom'
import FormularioNota from '../components/lab5/FormularioNota'

function NuevaNota() {
  const { agregarNota } = useNotas()
  const navigate = useNavigate()

  const handleGuardar = (datos) => {
    agregarNota(datos)
    navigate('/lab5/notas')
  }

  return (
    <div>
      <h2>Nueva Nota</h2>
      <FormularioNota textBoton="Guardar nota" onGuardar={handleGuardar} />
    </div>
  )
}

export default NuevaNota