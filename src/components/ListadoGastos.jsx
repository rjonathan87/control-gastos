import Gasto from "./Gasto"

const ListadoGastos = ({gastos}) => {
  
  return (
    <div>
      <div className="listado-gastos contenedor">
        <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>
        
        {gastos.map(gasto => (
          <Gasto key={gasto.id} gasto={gasto} />
        ))}
      </div>
    </div>
  )
}

export default ListadoGastos