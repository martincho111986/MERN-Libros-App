import React, { useState } from 'react'
import './ActualizarLibro.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axiosInstance from '../../util/axiosInstance';
import FormActualizar from './FormActualizar';



const ActualizarLibro = ({ libros, fetchLibros }) => {

    const [listUpdate, setListUpdate] = useState([]);
    const [modificarLibro, setModificarLibro] = useState({
        titulo: '',
        anioPublicacion: '',
        autor: '',
        url: '',
        genero: ''
    })


    const handleOnChange = e => {
        setModificarLibro({
            ...modificarLibro,
            [e.target.name]: e.target.value
        })
    }

    //hanble submit del form

    const handleSubmit = e => {
        e.preventDefault();
        setListUpdate([
            ...listUpdate, libros
        ])
    }

    //eliminar Libros
    const eliminarLibro = id => async () =>{
        const result =  await axiosInstance.delete(`/libros/${id}`);
        console.log(result);
        fetchLibros();
    }

    //update de libros


    return (
        <>
            <FormActualizar
                handleSubmit={handleSubmit}
                handleOnChange={handleOnChange}
            />
            <br />
            <hr />

            <div className="titulos1">
                <h1>Lista de libros disponibles</h1>
            </div>
            <div className="container-fluid contenedor-cards">
                {libros.map(({ titulo, autor, anioPublicacion, url, genero, _id }) => (
                    <Card key={_id} className="m-3" style={{ width: '18rem' }}>
                        <Card.Img className="card-img" variant="top" src={url} />
                        <Card.Body>
                            <Card.Title>{titulo}</Card.Title>
                            <Card.Text>
                                <span>Año de publicación: {anioPublicacion} </span> <br />
                                <span>Autor: {autor}</span> <br />
                                <span>Genero: {genero}</span>
                            </Card.Text>
                            <Button className="mr-2" variant="primary"><i className="fas fa-pen"></i></Button>
                            <Button variant="danger" onClick={eliminarLibro(_id)}><i className="fas fa-trash-alt"></i></Button>
                        </Card.Body>
                    </Card>

                ))}

            </div>
        </>

    );
}

export default ActualizarLibro;