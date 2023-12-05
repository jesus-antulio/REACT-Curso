import React from 'react';
import '../../css/Contador/Boton.css';

function Boton({ texto, esBotonDeClic, manejarClic }){ // destructuracion de props
  return(
    <button 
      className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' } /* expresion ? verdadero : falso */
      onClick={manejarClic} /* Eventlistener */ >
      {texto}
    </button>
  )
}

export default Boton;