import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container, Navbar } from "react-bootstrap";

const FunCompNavbar = () => {
    return (

        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">App News</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    {/* <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                </Nav>
            </Container>
        </Navbar>



    )
}

export default FunCompNavbar