import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import ImgOne from '../img/pic1.jpg';
import ImgTwo from '../img/pic2.jpg';
import ImgThree from '../img/pic3.jpg';
import './Sliderone.css'
const Sliderone = () => {
    return (
      <section>
        <div className="carousel-inner ">
        <Carousel >
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={ImgOne}
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={ImgTwo}
            alt="Third slide"
          />
          
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={ImgThree}
            alt="Third slide"
          />
          
        </Carousel.Item>
      </Carousel>
      </div>  
      </section>
    );
};

export default Sliderone;