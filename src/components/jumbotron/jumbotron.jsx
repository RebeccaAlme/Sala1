import React from 'react'
import {Carousel, CarouselItem} from 'react-bootstrap'

const jumbotron = () => {
  return (
    <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2019/07/16/20/07/steak-4342500_960_720.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Hamburguesas</h3>
      <p>Escoge entre nuestros deliciosos cortes de carne.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_960_720.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Desserts</h3>
      <p>Complementa tu experiencia con uno de nuestros deliciosos postres.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2017/02/08/14/37/st-paddys-day-2049043_960_720.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Let´s Rock</h3>
      <p>Disfruta de una bebida acompañada de música.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}
export default jumbotron
