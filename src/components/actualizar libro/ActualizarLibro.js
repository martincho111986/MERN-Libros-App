import React from 'react'
import './ActualizarLibro.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ActualizarLibro = () => {
    return (
        <>
            <div className="titulos">
                <h1>ACTUALIZAR LIBROS DISPONIBLES</h1>
            </div>
            <div className="container">
                <div className="contenedorForm">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Titulo del Libro</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Año de Publicacion</Form.Label>
                            <Form.Control type="number" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Autor</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Img URL</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Modificar
                    </Button>
                    </Form>
                </div>
            </div>
            <br />
            <hr />

            <div className="titulos">
                <h1>Lista de libros disponibles</h1>
            </div>
            <div className="container-fluid contenedor-cards">
                
                {/* <Card className="m-3" style={{ width: '13rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Titulo del Libro</Card.Title>
                        <Card.Text>
                            <span>Año de publicación</span> <br />
                            <span>Autor</span>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card className="m-3" style={{ width: '13rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Titulo del Libro</Card.Title>
                        <Card.Text>
                            <span>Año de publicación</span> <br />
                            <span>Autor</span>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card className="m-3" style={{ width: '13rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Titulo del Libro</Card.Title>
                        <Card.Text>
                            <span>Año de publicación</span> <br />
                            <span>Autor</span>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card className="m-3" style={{ width: '13rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Titulo del Libro</Card.Title>
                        <Card.Text>
                            <span>Año de publicación</span> <br />
                            <span>Autor</span>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card className="m-3" style={{ width: '13rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Titulo del Libro</Card.Title>
                        <Card.Text>
                            <span>Año de publicación</span> <br />
                            <span>Autor</span>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card className="m-3" style={{ width: '13rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Titulo del Libro</Card.Title>
                        <Card.Text>
                            <span>Año de publicación</span> <br />
                            <span>Autor</span>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card className="m-3" style={{ width: '13rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Titulo del Libro</Card.Title>
                        <Card.Text>
                            <span>Año de publicación</span> <br />
                            <span>Autor</span>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card className="m-3" style={{ width: '13rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Titulo del Libro</Card.Title>
                        <Card.Text>
                            <span>Año de publicación</span> <br />
                            <span>Autor</span>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card className="m-3" style={{ width: '13rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Titulo del Libro</Card.Title>
                        <Card.Text>
                            <span>Año de publicación</span> <br />
                            <span>Autor</span>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card className="m-3" style={{ width: '13rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Titulo del Libro</Card.Title>
                        <Card.Text>
                            <span>Año de publicación</span> <br />
                            <span>Autor</span>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card className="m-3" style={{ width: '13rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Titulo del Libro</Card.Title>
                        <Card.Text>
                            <span>Año de publicación</span> <br />
                            <span>Autor</span>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card className="m-3" style={{ width: '13rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Titulo del Libro</Card.Title>
                        <Card.Text>
                            <span>Año de publicación</span> <br />
                            <span>Autor</span>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card className="m-3" style={{ width: '13rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Titulo del Libro</Card.Title>
                        <Card.Text>
                            <span>Año de publicación</span> <br />
                            <span>Autor</span>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card className="m-3" style={{ width: '13rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Titulo del Libro</Card.Title>
                        <Card.Text>
                            <span>Año de publicación</span> <br />
                            <span>Autor</span>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card className="m-3" style={{ width: '13rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Titulo del Libro</Card.Title>
                        <Card.Text>
                            <span>Año de publicación</span> <br />
                            <span>Autor</span>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card> */}
            </div>
            </>
        
    );
}

export default ActualizarLibro;