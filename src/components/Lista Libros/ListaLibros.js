import React from 'react'
import './ListaLibros.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Carousel from '../carousel/Carousel'

const ListaLibros = ({libros}) => {

    const {titulo, autor, anioPublicacion, url} = libros

    return (
        <>
        
       {/* CAROUSEL */}
        <div className="container m-5">
            <Carousel />
        </div>

            {/* CARD */}



            <h1>TODOS LOS LIBROS</h1>
        <div className="container">
            {libros.map(({titulo, autor, anioPublicacion, url}) =>(
                
                    <Card className="m-3" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={url} />
                    <Card.Body>
                        <Card.Title>{titulo}</Card.Title>
                        <Card.Text>
                            <span>Año de Publicación: {anioPublicacion}</span> <br/>
                            <span>Autor: {autor}</span>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

            ))}
        </div>
            
            


           
            

    </>
    );
}

export default ListaLibros;