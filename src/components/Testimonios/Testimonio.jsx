import React from 'react';
import '../../css/Testimonios/Testimonio.css';

function Testimonio(props) {
  return(
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        // src={require('../images/img1.jpeg')} manera estática
        src={require(`../../images/Testimonios/img${props.imagen}.jpeg`)} 
        alt='Foto 1' />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-testiminio'>
          {props.puesto} en <strong>{props.empresa}</strong>
          </p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;
