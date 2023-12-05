import React from "react";
import '../../css/ToDoList/Tarea.css'

/* iconos */
import { FaClipboardCheck } from "react-icons/fa";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return(
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
        className="tarea-texto"
        onClick={() => completarTarea(id)}
      >
        {texto}
      </div>
      <div 
        className="tarea-contenedor-icono"
        onClick={() => eliminarTarea(id)}
      >
        <FaClipboardCheck className="tarea-icono" /> {/* Icono parte de la biblioteca "React Icons" */}
      </div>
    </div>
  );
}

export default Tarea;