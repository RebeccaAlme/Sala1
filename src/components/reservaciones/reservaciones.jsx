import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Footer from '../footer/footer';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const reservaciones = () => {
  return (
    <>
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Reserva ahora mismo</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Mis reservaciones<a href="#login">LogIn</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>

      <Button variant="secondary" size="lg">
         Confirmar reservacion
        </Button>
      

      
      <Footer/>
    </>
  )
}

export default reservaciones
