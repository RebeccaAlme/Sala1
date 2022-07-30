import React from 'react'
import { Card,Button, Container, Row} from 'react-bootstrap'
import {menuRestaurante} from '../../helpers/menu'
import Footer from '../footer/footer'


const Menu = () => {
  return (
      <>
    <Container>  
    <h1 className='menu-title tituloMenu'>Lista de productos</h1> 
        <Row>    
            {   
                menuRestaurante.map ( ({id,seccion,nombre, descripcion,imagen}) => (
                    <Card key={id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={imagen} />
                    <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Text>
                        {descripcion}
                        </Card.Text>
                        <Button variant="secondary">¡La quiero!</Button>
                    </Card.Body>
                    </Card>
                ))
            }
        </Row>
    </Container>
    <Footer/>
    </>
  )
}

export default Menu

