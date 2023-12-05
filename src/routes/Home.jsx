import React from "react";
import { Link, Outlet } from "react-router-dom"; /* se importa el componente Link */

function Home() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={'/Testimonios'}> Testimonios </Link> {/* se utiliza el componente Link para redireccionar a la ruta */}
          </li>
          <li>
            <Link to={'/Contador'}> Contador </Link> {/* se utiliza el componente Link para redireccionar a la ruta */}
          </li>
          <li>
            <Link to={'/Calculadora'}> Calculadora </Link> {/* se utiliza el componente Link para redireccionar a la ruta */}
          </li>
          <li>
            <Link to={'/ToDoList'}> To do list </Link> {/* se utiliza el componente Link para redireccionar a la ruta */}
          </li>
        </ul>
      </nav>

      <div>
        <Outlet /> {/* se utiliza el componente Outlet para renderizar las rutas hijas */}
      </div>
    </>
  );
}

export default Home;