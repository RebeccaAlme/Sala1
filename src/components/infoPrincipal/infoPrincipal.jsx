import React from 'react'
import Card from 'react-bootstrap/Card';
import './styles.css';

const infoPrincipal = () => {
  return (
    <Card className="bg-dark text-center text-dark">
    <Card.Img className='imagen-info' 
    src="https://th.bing.com/th/id/OIP.WQMcK4KpCP44kHsNoKgY9gHaEy?pid=ImgDet&rs=1" alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title>Joyeria <p>Regalando momentos mágicos</p></Card.Title>
      <Card.Text>
        <p>El mejor amigo de una mujer es un diamante</p>
        <p>Realeza en tus joyas </p>
      </Card.Text>
    </Card.ImgOverlay>
  </Card>
  )
}

export default infoPrincipal
