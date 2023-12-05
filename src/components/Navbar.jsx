/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Link } from "react-router-dom"; /* se importa el componente Link */
import '../css/Navbar.css';

const Navbar = () => {
  const links = [
    { to: '/Testimonios', text: 'Testimonios' },
    { to: '/Contador', text: 'Contador' },
    { to: '/Calculadora', text: 'Calculadora' },
    { to: '/ToDoList', text: 'To do list' }
  ];

  return (
    <div className='navbar'>
      <Link to={'/'}>
      <img 
        className='logo'
        src={require('../images/freecodecamp.png')} 
        alt='Logo' />
      </Link>

      <div className='links'>
        {links.map(({ to, text }) => (
          <Link key={to} to={to}>
            {text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
