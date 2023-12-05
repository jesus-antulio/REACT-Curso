import '../css/Contador/ContadorApp.css';
import freeCodeCampLogo from '../images/freecodecamp.png';
import Contador from '../components/Contador/Contador';
import Boton from '../components/Contador/Boton';
import { useState } from 'react';


function ContadorApp() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => { /* Funcion flecha o funcion promesa */
    console.log(`Me han hecho clic ${numClics+1} veces`);
    setNumClics(numClics + 1);
  };
  
  const reiniciarContador = () => {
    console.log('Se ha reiniciado el contador');
    setNumClics(0);
  };

  return (
    <div className="contadorApp">
      <div className='freecodecamp-logo-contenedor>'>
        <img
          className='freecodecamp-logo' 
          src={freeCodeCampLogo}
          alt='logo de frecodecamp' />
      </div>
      <div className='contenedor-principal-contador'>
        <h1>Contador</h1>
        <Contador 
          numClics={numClics} />

        <Boton
          texto='Click me!'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton
          texto='Reset'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default ContadorApp;
