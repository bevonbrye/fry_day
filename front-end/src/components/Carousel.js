import React from 'react'
import { Carousel,Card} from 'react-bootstrap'



function Carousels() {
    return (
        <div>
        <Card style={{margin:'1rem', borderRadius:'5px', height:'10rem'}}>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-150"
      src="/img/fries-banner.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>What are your favorite fries </h3>
      <p>wow this is the best type of fries </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-150"
      src="/img/fries-banner.png"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Here are the deals</h3>
      <p>Omg the4 best fries right now are at Burger Bar</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-150"
      src="/img/fries-banner.png"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Get all the fries you want</h3>
      <p>Check out these coupons for your fav spots</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Card>
        </div>
    )
}

export default Carousels
