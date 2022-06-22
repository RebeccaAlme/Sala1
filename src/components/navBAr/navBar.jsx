import React from 'react'
import './styles.css'
import { Card,Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Blog from '../blog/blog'
import Reservaciones from '../reservaciones/reservaciones'


const navBar = () => {
  return (
    <Card>
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Menu">Menú</Nav.Link> 
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Blog">Blog</Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title className='lead'>ReAl</Card.Title>
    <Card.Text className='font-italic'>
    ¿Has tenido la sensación alguna vez de entrar en un sitio y sentirte transportado a un lugar especial? Un lugar que te envuelve con su aroma, su decoración, su espíritu. Un lugar que te atrapa y mejora tu estado de ánimo en un momento. ¡Eso es precisamente lo que sientes al entrar en ReAl!    </Card.Text>
    <Button href="/reservaciones" variant="secondary">Reservaciones</Button>
  </Card.Body>
</Card>
      )
}

export default navBar

