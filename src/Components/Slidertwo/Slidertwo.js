import React, { Component } from 'react';
import Slider from "react-slick";

export default class MultipleItems extends Component {
  render() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
    }
    return (
      <div className="container">
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
				<style>{cssstyle}</style>
        <h2 className="text-center"> Our Products </h2>
        <Slider {...settings}>
          <div>
            <img src="https://i.ibb.co/jJtJmRZ/pic1.jpg" alt=""/>
          </div>
          <div>
            <img src="https://i.ibb.co/n0Vg6pz/pic2.jpg" alt=""/>
          </div>
          <div>
            <img src="https://i.ibb.co/jJtJmRZ/pic1.jpg" alt=""/>
          </div>
          <div>
            <img src="https://i.ibb.co/n0Vg6pz/pic2.jpg" alt=""/>
          </div>
          <div>
          <img src="https://i.ibb.co/jJtJmRZ/pic1.jpg" alt=""/>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

const cssstyle = `
.container {
  margin: 0 auto;
  padding: 0px 40px 40px 40px;

  width:66%;
  
}
h3 {
    background: #5f9ea0;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
`