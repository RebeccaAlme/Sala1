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
        <Navbar.Brand href="#home">Reserva ahora mismo y recibe un shot de cortesía</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Mi cuenta <a href="#login">LogIn</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <FloatingLabel
        controlId="usuario"
        label="Usuario"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Usuario" />
      </FloatingLabel>
      <FloatingLabel controlId="fecha" label="Fecha deseada">
        <Form.Control type="date" placeholder="Password" />
      </FloatingLabel>
      <br />

      <Button variant="secondary" size="lg">
         Confirmar reservacion
        </Button>
      

      <div>
        <img src="https://th.bing.com/th/id/OIP.Bu0YVYIeVUHfKOKv_-vIbgHaD6?pid=ImgDet&rs=1" alt="" />
        
      </div>
      <Footer/>
    </>
  )
}

export default reservaciones
