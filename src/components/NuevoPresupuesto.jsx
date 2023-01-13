const NuevoPresupuesto = () => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
          <label htmlFor="nuevo-presupuesto">Definir Presupuesto</label>
          <input 
            type="text" 
            name="nuevo-presupuesto" 
            id="nuevo-presupuesto" 
            className="nuevo-presupuesto"
            placeholder="Añade tu presupuesto" />
        </div>

        <input type="submit" value="Añadir" />
      </form>
    </div>
  )
}

export default NuevoPresupuesto