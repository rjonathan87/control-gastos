import React from "react";
import { formatearFecha } from "../helpers";

const Gasto = ({gasto}) => {
  const {nombre_gasto,cantidad_gasto,categoria_gasto,id, fecha} = gasto;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <div className="categoria">{categoria_gasto}</div>
          <div className="nombre-gasto">{nombre_gasto}</div>
          <div className="fecha-gasto">
            Agregado el: {''}
            <span>{formatearFecha(fecha)}</span>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Gasto