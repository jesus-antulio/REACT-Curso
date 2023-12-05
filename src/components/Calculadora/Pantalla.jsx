import React from "react";
import "../../css/Calculadora/Pantalla.css";

/* una manera distinta de declarar componente funcionales. 
   Se usa para componentes sencillos */
const Pantalla = ({ input }) => (
  <div className="input">
    { input }
  </div>
);

export default Pantalla;