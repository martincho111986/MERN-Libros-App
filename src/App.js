import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaLibros from './components/Lista Libros/ListaLibros';
import ActualizarLibro from './components/actualizar libro/ActualizarLibro';


function App() {
  return (
    <>
    <ListaLibros />
    {/* <ActualizarLibro /> */}
    
    </>
  );
}

export default App;
