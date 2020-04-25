import React, { state, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Navegador = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Libreria</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

          <Button variant="primary" onClick={handleShow}>
            Agregar Libro
      </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Cargar un libro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group>
                <label htmlFor="">Titulo del libro</label>
                <Form.Control size="sm" type="text" placeholder="Small text" />
                <label htmlFor="">Autor</label>
                <Form.Control size="sm" type="text" placeholder="Small text" />
                <label htmlFor="">Año de publicacion</label>
                <Form.Control size="sm" type="text" placeholder="Small text" />
                <label htmlFor="">Imagen del libro</label>
                <Form.Control size="sm" type="text" placeholder="Small text" />
                
              </Form.Group>
              
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
               Cerrar
          </Button>
              <Button variant="primary" onClick={handleClose}>
                Cargar
          </Button>
            </Modal.Footer>
          </Modal>

        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Buscar Libro</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )



}

export default Navegador
