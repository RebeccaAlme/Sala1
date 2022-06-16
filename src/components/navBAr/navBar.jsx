import React from 'react'
import './styles.css'
import { Card,Nav, Button } from 'react-bootstrap'

const navBar = () => {
  return (
    <Card>
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#first">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">Menú</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#disabled">
          Reservaciones
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title className='lead'>ReAl</Card.Title>
    <Card.Text className='font-italic'>
    ¿Has tenido la sensación alguna vez de entrar en un sitio y sentirte transportado a un lugar especial? Un lugar que te envuelve con su aroma, su decoración, su espíritu. Un lugar que te atrapa y mejora tu estado de ánimo en un momento. ¡Eso es precisamente lo que sientes al entrar en ReAl!    </Card.Text>
    <Button variant="secondary">Conócenos</Button>
  </Card.Body>
</Card>
      )
}

export default navBar

