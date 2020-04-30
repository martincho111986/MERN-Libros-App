import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormActualizar = ({ handleSubmit, handleOnChange }) => {
    return (
        <>
            <div className="titulos">
                <h1>ACTUALIZAR LIBROS DISPONIBLES</h1>
            </div>
            <div className="container">
                <div className="contenedorForm">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Titulo del Libro</Form.Label>
                            <Form.Control
                                type="text"
                                name="titulo"
                                onChange={handleOnChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Año de Publicacion</Form.Label>
                            <Form.Control
                                type="number"
                                name="anioPublicacion"
                                onChange={handleOnChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Autor</Form.Label>
                            <Form.Control
                                type="text"
                                name="autor"
                                onChange={handleOnChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Img URL</Form.Label>
                            <Form.Control
                                type="text"
                                name="url"
                                onChange={handleOnChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Genero</Form.Label>
                            <Form.Control
                                type="text"
                                name="genero"
                                onChange={handleOnChange}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Modificar
                    </Button>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default FormActualizar;