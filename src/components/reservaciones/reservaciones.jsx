import React, {useState} from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Footer from '../footer/footer';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { createItem } from '../../manage';

const useReservaciones = () => {
  const [usuario, setUsuario] = useState ('')
  const [fecha, setFecha] = useState ('')

  const handleSubmit = (e) => {
    e.preventDefault()
    createItem({usuario,fecha})
  }

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
    <form action="">
      <FloatingLabel
        controlId="usuario"
        label="Usuario"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Usuario" onChange={e => setUsuario (e.target.value)} />
      </FloatingLabel>
      <FloatingLabel controlId="fecha" label="Fecha deseada">
        <Form.Control type="date" placeholder="Password" onChange={e => setFecha (e.target.value)} />
      </FloatingLabel>
      <br />

      <Button variant="secondary" onClick={handleSubmit} size="lg">
         Confirmar reservacion
        </Button>
    </form>

      <div>
        <img src="https://th.bing.com/th/id/OIP.Bu0YVYIeVUHfKOKv_-vIbgHaD6?pid=ImgDet&rs=1" alt="" />
        
      </div>
      <Footer/>
    </>
  )
}

export default useReservaciones
