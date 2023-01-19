import React from "react";

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import { formatearFecha } from "../helpers";

import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

const diccionario_iconos = {
  ahorro : IconoAhorro,
  casa : IconoCasa,
  comida : IconoComida,
  gastos : IconoGastos,
  ocio : IconoOcio,
  salud : IconoSalud,
  suscripciones : IconoSuscripciones,
}


const Gasto = ({gasto, setGastoEditar, eliminarGasto}) => {
  const {nombre_gasto, cantidad_gasto, categoria_gasto, id, fecha} = gasto;
  
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>
        Action name
      </SwipeAction>
    </LeadingActions>
  );
  
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => eliminarGasto(id)}
      >
        Delete
      </SwipeAction>
    </TrailingActions>
  );
  
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img 
              src={diccionario_iconos[categoria_gasto]}
              alt="Icono gasto"
            />
            <div className="descripcion-gasto">
              <div className="categoria">{categoria_gasto}</div>
              <div className="nombre-gasto">{nombre_gasto}</div>
              <div className="fecha-gasto">
                Agregado el: {''}
                <span>{formatearFecha(fecha)}</span>
              </div>
            </div>
          </div>
          <p className="cantidad-gasto">${cantidad_gasto}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto