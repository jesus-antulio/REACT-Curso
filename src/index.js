import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; /* Funciona para rutas en la app */

import Navbar from './components/Navbar';
import Home from './routes/Home';
import Testimonios from './routes/Testimonios';
import ContadorApp from './routes/ContadorApp';
import Calculadora from './routes/Calculadora';
import ToDoList from './routes/ToDoList';

const createRoute = (path, element) => ({
  /* FUNCION QUE RECIBE LA RUTA Y EL COMPONENTE O ELEMENTO QUE SE DEBE MOSTRAR EN PANTALLA */
  path,
  element: (
    <>
      <Navbar />
      {element}
    </>
  )
});

const router = createBrowserRouter([
  createRoute('/', <Home />),
  createRoute('/Testimonios', <Testimonios />),
  createRoute('/Contador', <ContadorApp />),
  createRoute('/Calculadora', <Calculadora />),
  createRoute('/ToDoList', <ToDoList />),
  createRoute('*', <h1>Error</h1>),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);
