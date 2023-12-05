import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; /* se importa la funcion uuidv4 de la biblioteca uuid */
import '../../css/ToDoList/TareaFormulario.css'

function TareaFormulario(props) {
  const [input, setInput] = useState('')

  const manejarCambio = (evento) => {
    // console.log('Escribiendo...');
    const valor = evento.target.value; /* esta funvion permite extraer el valor */
    setInput(valor);
    // console.log(valor);
  }

  const manejarEnvio = (evento) => {
    evento.preventDefault(); /* previene el comportamiento por defecto de un formulario, no recarga la app */
    console.log('Enviando...');
    
    const tareaNueva = {
      id: uuidv4(), /* se genera un id aleatorio con UUID package */
      texto: input,
      completada: false
    }
    console.log('TAREA-FORMULARIO ', tareaNueva);

    props.onSubmit(tareaNueva); /* se envia la tarea nueva al componente padre */
  }

  return(
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input 
        className="tarea-input"
        type="text"
        placeholder="Añadir tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">
        Añadir
      </button>
    </form>
  );
}

export default TareaFormulario