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
function App() {
  return (
    
    <Router>
      <div>
        <Navegador />
        </div>
     
      <div className="container">
       
        <Switch>
        <Route path="/" exact>
            
            </Route>
  
          <Route path="/actualizar">
            <Actualizar />
          </Route>
        
        </Switch>


      </div>
    </Router>
  );
}

export default App;
