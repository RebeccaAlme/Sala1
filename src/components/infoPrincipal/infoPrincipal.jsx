import React from 'react'
import Card from 'react-bootstrap/Card';
import './styles.css';

const infoPrincipal = () => {
  return (
    <Card className="bg-dark text-center text-dark">
    <Card.Img className='imagen-info' 
    src="https://th.bing.com/th/id/OIP.WQMcK4KpCP44kHsNoKgY9gHaEy?pid=ImgDet&rs=1" alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title>ReAl <p>La experiencia lo es todo</p></Card.Title>
      <Card.Text>
        Odena en ReAl y disfruta las mejores hamburguesas a tu gusto, recien hechas y con los mejores ingredientes delicatessen premium del Estado de México
        <p>C.Atenas #2 56420</p>
      </Card.Text>
      <Card.Text>5500000006 | 5500000004</Card.Text>
    </Card.ImgOverlay>
  </Card>
  )
}

export default infoPrincipal
