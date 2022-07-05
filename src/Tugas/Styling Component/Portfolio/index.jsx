import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Card, Button, Row, Col, Form } from "react-bootstrap";
import foto from "./img/profil.jpg";
import fotoP from "./img/rbi2.jpg";
import "./Style/style.css"



export default class Portfolio extends React.Component {

    render() {
        return (
            <body>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Mochamad Dwi Pamungkas</Navbar.Brand>
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <section className="profil text-center">
                    <img
                        src={foto}
                        alt="Mochamad Dwi Pamungkas"
                        width="200"
                        className="rounded-circle img-thumbnail shadow"
                    />
                    <h1 className="display-5">Mochamad Dwi Pamungkas</h1>
                    <p className="lead">GIS Analyst | Programmer</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                        <path
                            fill="#ffffff"
                            fill-opacity="1"
                            d="M0,32L720,128L1440,32L1440,320L720,320L0,320Z"
                        ></path>
                    </svg>
                </section>
                <Container>
                    <Row className="text-center">
                        <h2 className="display-6 mb-5">My Projects</h2>
                    </Row>
                    <Row className="mt-3 justify-content-center">
                        <Col className="col-md-4 col-sm-6 mb-5">
                            <Card >
                                <Card.Img variant="top" src={fotoP} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="col-md-4 col-sm-6 mb-5">
                            <Card >
                                <Card.Img variant="top" src={fotoP} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="col-md-4 col-sm-6 mb-5">
                            <Card >
                                <Card.Img variant="top" src={fotoP} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="col-md-4 col-sm-6 mb-5">
                            <Card >
                                <Card.Img variant="top" src={fotoP} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="col-md-4 col-sm-6 mb-5">
                            <Card >
                                <Card.Img variant="top" src={fotoP} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
                <Container>
                    <Row className="text-center">
                        <h2 className="display-6">Contact Me</h2>
                    </Row>
                    <Row className="mt-5 justify-content-center">

                        <Form className="col-md-4">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nama Lengkap</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                    </Row>

                </Container>
                <Row className="footer text-white text-center pb-3">
                    <p>
                        Created With <i className="bi bi-heart-fill text-danger"></i> By
                        <a href="https://google.com" className="text-white fw-bold">
                            Mochamad Dwi Pamungkas</a>
                    </p>
                </Row>


            </body>
        )

    }
}