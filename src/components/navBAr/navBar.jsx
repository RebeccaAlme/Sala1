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
        <Nav.Link href="/Menu">Lista de productos</Nav.Link> 
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Blog">About us</Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title className='lead'>Sala 1</Card.Title>
    <Card.Text className='font-italic'>
    Collares y joyeria; demuestra tu amor y compromiso con nosotros ¡Tenemos el detalle justo para ese ser amado!    </Card.Text>
    <Button href="/reservaciones" variant="secondary">Comprar ahora</Button>
  </Card.Body>
</Card>
      )
}

export default navBar

