import '../css/Calculadora/Calculadora.css';
import freeCodeCampLogo from '../images/freecodecamp.png';
import Pantalla from '../components/Calculadora/Pantalla';
import Boton from '../components/Calculadora/Boton';
import BotonClear from '../components/Calculadora/BotonClear';

/* hooks */
import { useState } from 'react';
import { evaluate } from 'mathjs'; //es necesario instalarla con npm

function Calculadora() {
  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const calculate = () => {
    if (input) setInput(evaluate(input)); // evaluate es parte de mathjs
  };
  return (
    <div className="calculadoraApp">
      <div className='freecodecamp-logo-contenedor'>
        <img src={freeCodeCampLogo} alt='freeCodeCamp logo' className='freecodecamp-logo' />
      </div>
      <div className='calculadora-contenedor'>
        <Pantalla input={ input }/>
        <div className='fila'>
          <Boton manejarClic={addInput}>1</Boton>
          <Boton manejarClic={addInput}>2</Boton>
          <Boton manejarClic={addInput}>3</Boton>
          <Boton manejarClic={addInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={addInput}>4</Boton>
          <Boton manejarClic={addInput}>5</Boton>
          <Boton manejarClic={addInput}>6</Boton>
          <Boton manejarClic={addInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={addInput}>7</Boton>
          <Boton manejarClic={addInput}>8</Boton>
          <Boton manejarClic={addInput}>9</Boton>
          <Boton manejarClic={addInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={addInput}>.</Boton>
          <Boton manejarClic={addInput}>0</Boton>
          <Boton manejarClic={calculate}>=</Boton>
          <Boton manejarClic={addInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
            </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default Calculadora;
