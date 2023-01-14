import { useState } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import { generaId } from './helpers'
import IconNuevoGasto from './img/nuevo-gasto.svg'

function App() {

  const [gastos, setGastos] = useState([])

  const [presupuesto, setPresupuesto] = useState('')
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }

  const guardarGasto = gasto => {
    gasto.id = generaId()
    gasto.fecha = Date.now()
    setGastos([...gastos, gasto])
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  return (
    <div className={modal && 'fijar'}>
      <Header 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      
      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos 
              gastos={gastos}
            />
          </main>
          <div className="nuevo-gasto">
            <img 
              src={IconNuevoGasto} 
              alt="icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal 
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
        />
      )}
    </div>
  )
}

export default App
