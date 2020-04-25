import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Actualizar from './components/Actualizar'
import Navegador from './components/Navegador';

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
    
    <Router>
      <div>
        <Navegador />
        </div>
     
      <div className="container">
       
        <Switch>
        <Route exact path="/" >
            
            </Route>
  
          <Route exact path="/actualizar">
            <ActualizarLibro />
          </Route>
        
        </Switch>


      </div>
    </Router>
  );
}

export default App;
