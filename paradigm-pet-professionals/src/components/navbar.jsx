import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScroll() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed='top'>
      <Container fluid>
        <Navbar.Brand href="/"><img className='nav-logo' src="./assets/image2.png" alt="new pet care consultation"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Pet Care" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                dogs
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                cats
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                birds
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">schedule a consultation</Nav.Link>
            <Nav.Link href="#action7">FAQs</Nav.Link>
            <Nav.Link href="#action8">about</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;