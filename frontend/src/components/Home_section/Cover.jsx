import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
function Cover(){

    return (
        <div className='Cover'>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("./../../images/pic1.png")}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("./../../images/pic2.png")}
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("./../../images/pic3.png")}
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Cover;