import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import IconNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  const [presupuesto, setPresupuesto] = useState('')
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 1500);
  }

  return (
    <>
      <Header 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      
      {isValidPresupuesto && (
        <div className="nuevo-gasto">
          <img 
            src={IconNuevoGasto} 
            alt="icono nuevo gasto"
            onClick={handleNuevoGasto}
          />
        </div>
      )}

      {modal && (
        <Modal 
          setModal={setModal}
          animarModal={animarModal}
        />
      )}
    </>
  )
}

export default App
