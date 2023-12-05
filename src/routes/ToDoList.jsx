import '../css/ToDoList/ToDoList.css';
import freeCodeCampLogo from '../images/freecodecamp.png';


/* componentes */
import ListaTareas from '../components/ToDoList/ListaTareas';


function ToDoList() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecmp-logo-contenedor">
        <img 
          src={freeCodeCampLogo}
          alt="logo freecodecamp" 
          className="freecodecamp-logo" 
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1 className="titulo">Tareas</h1>
        <ListaTareas />
        
        {/* <TareaFormulario />
        <Tarea
          texto='Aprender React' 
        /> */}
      </div>
    </div>
  );
}

export default ToDoList;