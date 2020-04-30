import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegador from './components/Navegador';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaLibros from './components/Libros/ListaLibros';
import ActualizarLibro from './components/actualizar libro/ActualizarLibro';
import axiosInstance from './util/axiosInstance';





function App() {

  const [libros, setLibros] = useState([]);
  // const location = useLocation();

  const fetchLibros = async () =>{
    // const urlParams = new URLSearchParams(location.search);
    // const titulo = urlParams.get("titulo");
    // const url = titulo ? `/libros?titulo=${titulo}` : "/libros";
    const response = await axiosInstance.get('/libros');
    setLibros(response.data.libros)
    console.log(response)
  }

  useEffect(() => {
    
    fetchLibros();  
  }, [])


  return (

    <Router>
      <div>
        <Navegador 
          libros={libros}
          setLibros={setLibros}
          fetchLibros={fetchLibros}
        />
      </div>

      <div className="container">

        <Switch>
          <Route exact path="/" >  
          <ListaLibros 
            libros={libros}
          />
          </Route>

          <Route exact path="/actualizar">
            <ActualizarLibro 
              libros={libros}
              fetchLibros={fetchLibros}
            />
          </Route>
          <Route path="/">
          </Route>

        </Switch>


      </div>
    </Router>
  );
}

export default App;
