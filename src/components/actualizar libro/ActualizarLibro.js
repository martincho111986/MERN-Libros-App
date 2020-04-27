import React, {useState} from 'react'
import './ActualizarLibro.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ActualizarLibro = () => {
    
    const [listUpdate, setListUpdate] = useState([]);
    const [modificarLibro, setModificarLibro] = useState({
        titulo: '',
        anioPublicacion: '',
        autor: '',
        url: '',
        genero: ''
    })


const handleOnChange = e =>{
    setModificarLibro({
        ...modificarLibro,
        [e.target.name] : e.target.value
    })
}

    //hanble submit del form

    const handleSubmit = e => {
        e.preventDefault();
        setListUpdate([
            ...listUpdate, modificarLibro
        ])
    }

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
            <br />
            <hr />

            <div className="titulos">
                <h1>Lista de libros disponibles</h1>
            </div>
            <div className="container-fluid contenedor-cards">

            <Card className="m-3" style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Titulo del Libro</Card.Title>
                        <Card.Text>
                            <span>Año de publicación: </span> <br />
                            <span>Autor: </span> <br />
                            <span>Genero: </span>
                        </Card.Text>
                        <Button className="mr-2" variant="primary">Modificar</Button>
                        <Button variant="danger">Eliminar</Button>
                    </Card.Body>
                </Card>

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