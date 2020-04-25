import React, { state, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import ListaLibros from '../components/Lista Libros/ListaLibros';
import {
  Link
} from "react-router-dom";


const Navegador = () => {

  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [libros, setLibros] = useState([]);
  const [libro, setLibro] = useState(
    {
      titulo: '',
      anioPublicacion: '',
      autor: '',
      url: ''
    }
  );



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const {titulo, anioPublicacion, autor, url} = libro;

  //handle submit del form
  const handleSubmit = e => {
    e.preventDefault();

    //Validar Formulario
    if (libro.titulo.trim() === '' || libro.anioPublicacion.trim() === '' || libro.autor.trim() === '' || libro.url.trim() === '') {
      setError(true)
      return;
    } 
    setError(false)

    //cargar objeto en el array
    setLibros([
      ...libros, libro
    ]) 

    //reiniciar el form
    setLibro({
      titulo: '',
      anioPublicacion: '',
      autor: '',
      url: ''
    })
    
     
  }

  //onchange
  const handleChange = (e) => {
    setLibro({
      ...libro,
      [e.target.name]: e.target.value
    })
  }

  //boton para cargar
  // const handleCargar = () => {
    
  // }

  return (

    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Libreria</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/actualizar">
            Actualizar</Link>
            </Nav>
            <Nav>
            <Button variant="primary" onClick={handleShow}>
              Agregar Libro
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Cargar un libro</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <label htmlFor="">Titulo del libro</label>
                    <Form.Control
                      size="sm"
                      name="titulo"
                      type="text"
                      
              
                      onChange={handleChange}
                    />
                    <label htmlFor="">Autor</label>
                    <Form.Control
                      size="sm"
                      type="text"
                      name="autor"
                      
                 
                      onChange={handleChange}
                    />
                    <label htmlFor="">Año de publicacion</label>
                    <Form.Control
                      size="sm"
                      type="text"
                      name="anioPublicacion"
                      
                      
                      onChange={handleChange}
                    />
                    <label htmlFor="">Imagen del libro</label>
                    <Form.Control
                      size="sm"
                      type="text"
                      name="url"
                     
                      
                      onChange={handleChange}
                    />

                  </Form.Group>
                  
                  <Button variant="primary" type="submit">
                  Cargar
                </Button>
                </Form>

              </Modal.Body>
              {error ? <p className="alert alert-danger">Todos los campos son obligatorios</p> : null }
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cerrar
                </Button>
                
              </Modal.Footer>
            </Modal>
            
            <Form className="ml-3" inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Buscar Libro</Button>
          </Form>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      <ListaLibros
        libros={libros}
      />
    </>
  )



}

export default Navegador
