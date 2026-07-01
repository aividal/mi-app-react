import { useState, useEffect } from 'react'

function useLocalStorage(clave, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const guardado = localStorage.getItem(clave)
      return guardado ? JSON.parse(guardado) : valorInicial
    } catch {
      return valorInicial
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(clave, JSON.stringify(valor))
    } catch {
      console.error('Error guardando en localStorage')
    }
  }, [clave, valor])

  return [valor, setValor]
}

export default useLocalStorage