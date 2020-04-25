import React from 'react'
import './ListaLibros.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Carousel from '../carousel/Carousel'

const ListaLibros = () => {

    return (
        <>
        {/* NAVBAR */}
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Actualizar Libro</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>



        <div className="container m-5">
            <Carousel />
        </div>

            {/* CARD */}



            <h1>TODOS LOS LIBROS</h1>
        <div className="container">
            
            <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Titulo del Libro</Card.Title>
                    <Card.Text>
                        <span>Año de publicación</span> <br/>
                        <span>Autor</span>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Titulo del Libro</Card.Title>
                    <Card.Text>
                        <span>Año de publicación</span> <br/>
                        <span>Autor</span>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Titulo del Libro</Card.Title>
                    <Card.Text>
                        <span>Año de publicación</span> <br/>
                        <span>Autor</span>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Titulo del Libro</Card.Title>
                    <Card.Text>
                        <span>Año de publicación</span> <br/>
                        <span>Autor</span>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Titulo del Libro</Card.Title>
                    <Card.Text>
                        <span>Año de publicación</span> <br/>
                        <span>Autor</span>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Titulo del Libro</Card.Title>
                    <Card.Text>
                        <span>Año de publicación</span> <br/>
                        <span>Autor</span>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Titulo del Libro</Card.Title>
                    <Card.Text>
                        <span>Año de publicación</span> <br/>
                        <span>Autor</span>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Titulo del Libro</Card.Title>
                    <Card.Text>
                        <span>Año de publicación</span> <br/>
                        <span>Autor</span>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Titulo del Libro</Card.Title>
                    <Card.Text>
                        <span>Año de publicación</span> <br/>
                        <span>Autor</span>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Titulo del Libro</Card.Title>
                    <Card.Text>
                        <span>Año de publicación</span> <br/>
                        <span>Autor</span>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Titulo del Libro</Card.Title>
                    <Card.Text>
                        <span>Año de publicación</span> <br/>
                        <span>Autor</span>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Titulo del Libro</Card.Title>
                    <Card.Text>
                        <span>Año de publicación</span> <br/>
                        <span>Autor</span>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Titulo del Libro</Card.Title>
                    <Card.Text>
                        <span>Año de publicación</span> <br/>
                        <span>Autor</span>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Titulo del Libro</Card.Title>
                    <Card.Text>
                        <span>Año de publicación</span> <br/>
                        <span>Autor</span>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Titulo del Libro</Card.Title>
                    <Card.Text>
                        <span>Año de publicación</span> <br/>
                        <span>Autor</span>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Titulo del Libro</Card.Title>
                    <Card.Text>
                        <span>Año de publicación</span> <br/>
                        <span>Autor</span>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Titulo del Libro</Card.Title>
                    <Card.Text>
                        <span>Año de publicación</span> <br/>
                        <span>Autor</span>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Titulo del Libro</Card.Title>
                    <Card.Text>
                        <span>Año de publicación</span> <br/>
                        <span>Autor</span>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            
        </div>
    </>
    );
}

export default ListaLibros;