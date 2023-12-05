import '../css/Testimonios/Testimonios.css';
import Testimonio from '../components/Testimonios/Testimonio';

function Testimonios() {
  const testimonios = [
    {img: '1', nombre: 'Emma Bostion', pais: 'Suecia', puesto: 'Ingeniera de Software', empresa: 'Spotify', testimonio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus, velit eget fermentum tincidunt, ex sapien volutpat massa, id cursus metus libero in eros. Vivamus.'},
    {img: '2', nombre: 'Pedro Pascal', pais: 'México', puesto: 'Ingeniero de Software', empresa: 'Amazon MX', testimonio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus, velit eget fermentum tincidunt, ex sapien volutpat massa, id cursus metus libero in eros. Vivamus.'},
    {img: '3', nombre: 'Maria Felix', pais: 'EUA', puesto: 'Ingeniera de Software', empresa: 'Google', testimonio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus, velit eget fermentum tincidunt, ex sapien volutpat massa, id cursus metus libero in eros. Vivamus.'}
  ];

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1> Esto es lo que dicen nuestro alumnos sobre *inserte nombre del curso*:</h1>
        {
        testimonios.map((testimonio => 
          <Testimonio
          imagen={testimonio.img}
          nombre={testimonio.nombre}
          pais={testimonio.pais}
          puesto={testimonio.puesto}
          empresa={testimonio.empresa}
          testimonio={testimonio.testimonio} />
        ))}
      </div>
    </div>
  );
}

export default Testimonios;