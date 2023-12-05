import React, { useState } from "react";
import '../../css/ToDoList/ListaTareas.css'
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";

function ListaTareas() {
  const [tareas, setTareas] = useState([]); /* se crea un estado para las tareas, se inicializa como un arreglo vacío */

  const agregarTarea = (tarea) => {
    console.log('add tarea', tarea);

    if(tarea.texto.trim() !== ''){
      tarea.texto = tarea.texto.trim(); /* se elimina los espacios en blanco al inicio y al final */

      const tareasActualizadas = [tarea, ...tareas]; /* se crea un arreglo con la tarea nueva y las tareas actuales */
      setTareas(tareasActualizadas); /* se actualiza el estado de las tareas */
    }
  }

  const eliminarTarea = (id) => {
    const tareasFiltradas = tareas.filter((tarea) => tarea.id !== id); /* se filtran las tareas que no coincidan con el id */
    setTareas(tareasFiltradas); /* se actualiza el estado de las tareas */
  }

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if(tarea.id === id){
        tarea.completada = !tarea.completada; /* se cambia el estado de completada */
      }
      return tarea;
    });
    setTareas(tareasActualizadas); /* se actualiza el estado de las tareas */
  }

  return(
    <> {/* se denominan fragmentos en React */}
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="lista-tareas-contenedor">
        {
          tareas.map((tarea) => 
            <Tarea 
              key={tarea.id} /* forma de identificar el elemento en la isla par areact
                                ademas, 'key' no se pasa como un 'props' */
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              eliminarTarea={eliminarTarea}
              completarTarea={completarTarea}
            />
          )
        }
      </div>
    </> /* se denominan fragmentos en react */
  );
}

export default ListaTareas;