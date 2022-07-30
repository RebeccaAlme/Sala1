import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';


const blog = () => {
  return (

    <>
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Joyeria Sala1</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="About us"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Lo más reciente</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Comentarios
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">FAQ´s</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Artículos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>  

<Card>
<Card.Header>Lista de productos</Card.Header>
<Card.Body>
  <blockquote className="blockquote mb-0">
    <p>
      {' '}
      Hola ipsum dolor sit amet, consectetur adipiscing elit. Integer
      posuere erat a ante.{' '}
    </p>
    <footer className="blockquote-footer">
      Someone famous in <cite title="Source Title">Source Title</cite>
    </footer>
  </blockquote>
</Card.Body>
</Card>


</>
  )
}
export default blog

