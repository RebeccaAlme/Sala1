import React from 'react'
import {Carousel, CarouselItem} from 'react-bootstrap'

const jumbotron = () => {
  return (
    <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2017/03/16/16/46/necklace-2149668_960_720.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Dijes</h3>
      <p>Contamos con una amplia gama de tamaños, piezas  y diseños</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2015/01/18/11/10/lady-602881_960_720.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Collares</h3>
      <p>Desde el mas sencillo al mas elegante, solo con nosotros</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2016/11/18/22/21/bride-1837148_960_720.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Anillos</h3>
      <p>Disfruta de revivir ese momento mágico con un simbolo de amor.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}
export default jumbotron
