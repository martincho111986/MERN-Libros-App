import React from 'react'
import './ListaLibros.css';

// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from '../carousel/Carousel'

const ListaLibros = ({ libros }) => {

    // const {titulo, autor, anioPublicacion, url} = libros


    return (
        <>
            {/* CAROUSEL */}
            <div className="container-fluid mt-5">
                <div>
                    <h1>BestSellers</h1>
                </div>
                <Carousel />
            </div>

            {/* CARD */}
            <h1>TODOS LOS LIBROS</h1>
            <div className="container">

                {libros.map(({ titulo, autor, anioPublicacion, url, genero, _id }) => (

                    <Card key={_id} className="m-3" style={{ width: '18rem' }}>
                        <Card.Img className="card-img" variant="top" src={url} />

                        <Card.Body>
                            <Card.Title>{titulo}</Card.Title>
                            <Card.Text>
                                <span>Año de Publicación: {anioPublicacion}</span> <br />
                                <span>Autor: {autor}</span> <br />
                                <span>Genero: {genero}</span>


                            </Card.Text>
                        </Card.Body>
                    </Card>

                ))}
            </div>
        </>
    );
}

export default ListaLibros;