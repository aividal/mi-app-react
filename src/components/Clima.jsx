function Clima() {
  const temperatura = 20  // cambia este número para probar

  // Calculamos la sensación ANTES del return
  let sensacion
  let recomendacion

  if (temperatura < 15) {
    sensacion = "frío"
    recomendacion = "Lleva abrigo"
  } else if (temperatura <= 25) {
    sensacion = "agradable"
    recomendacion = "Disfruta el día"
  } else {
    sensacion = "caluroso"
    recomendacion = "Mantente hidratado"
  }

  return (
    <div>
      <p>Temperatura: {temperatura}°C</p>
      <p>Sensación: {sensacion}</p>
      <p>Recomendación: {recomendacion}</p>
    </div>
  )
}

export default Clima