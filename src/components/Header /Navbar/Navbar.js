import {Container, Navbar, Nav} from "react-bootstrap";


const NavBarComponent = () => {


    return (<Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">About</Nav.Link>
                <Nav.Link href="#features">PostsList</Nav.Link>
            </Nav>
        </Container>
    </Navbar>)
}

export default NavBarComponent