import { useState } from 'react'
import IconClose from '../img/cerrar.svg'
import Mensaje from './Mensaje'

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto}) => {
  
  const [nombre_gasto, setNombre_gasto] = useState('')
  const [cantidad_gasto, setCantidad_gasto] = useState(0)
  const [categoria_gasto, setCategoria_gasto] = useState('')

  const [mensaje, setMensaje] = useState('')
  
  const ocultarModal = () => {
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  const handleSubmit = e => {
    e.preventDefault()

    if([nombre_gasto,cantidad_gasto,categoria_gasto].includes('')){
      setMensaje('Error en algunos datos')
      setTimeout(() => {
        setMensaje('')
      }, 2500);
      return 
    }

    guardarGasto({nombre_gasto,cantidad_gasto,categoria_gasto})
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img 
          src={IconClose} 
          alt="imagen cerrar modal"
          onClick={ocultarModal}
        />
      </div>

      <form 
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >
        <legend>Nuevo Gasto</legend>
        <div className='campo'>
          <label htmlFor="nombre_gasto">Nombre del gasto</label>
          <input type="text" name="nombre_gasto" id="nombre_gasto" placeholder='Introduce el nombre del gasto' 
            value={nombre_gasto}
            onChange={e => setNombre_gasto(e.target.value)}
          />
        </div>
        <div className='campo'>
          <label htmlFor="cantidad_gasto">Cantidad del gasto</label>
          <input type="text" name="cantidad_gasto" id="cantidad_gasto" placeholder='Introduce la cantidad del gasto'
            value={cantidad_gasto}
            onChange={e => setCantidad_gasto(Number(e.target.value))}
          />
        </div>
        <div className='campo'>
          <label htmlFor="categoria_gasto">Categoría</label>
          <select id="categoria_gasto" name="categoria_gasto"
            value={categoria_gasto}
            onChange={e => setCategoria_gasto(e.target.value)}
          >
            <option value="">-- Selecciona --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
        <input type="submit" value="Añadir gasto" onClick={handleSubmit} />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  )
}

export default Modal