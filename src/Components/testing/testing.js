import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import './testing.css'

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        
      
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
        
        
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },

      ]
    };
    return (
        <div className="container sizeForContainer">
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <style>{cssstyle}</style>
<h2 className="text-center "> Our Products </h2>
<div className="text-right mr-3 ">
 <Link className="seeMore " to="/product">see more</Link>
</div>
<Slider {...settings}>
   
<div className = "team-area">
              <div className = "single-team">
                <img src="https://i.ibb.co/PGwrVNk/B1.jpg" alt=""/>
                <div className = "team-text">
                    <h4>B1</h4>
                </div>
            </div>
          </div>

          <div className = "team-area">
              <div className = "single-team">
                <img src="https://i.ibb.co/rf4d5Kq/F1.jpg" alt=""/>
                <div className = "team-text">
                    <h4>F1</h4>
                </div>
            </div>
          </div>

          <div className = "team-area">
            <div className = "single-team">
            <img src="https://i.ibb.co/PmPpMyc/F2.jpg" alt=""/>
                <div className = "team-text">
                    <h4>F2</h4>
                </div>
            </div>
          </div>

          <div className = "team-area">
              <div className = "single-team">
                <img src="https://i.ibb.co/9pzq1sH/PANEL-02-2.gif" alt=""/>
                <div className = "team-text">
                    <h4>PANEL</h4>
                </div>
            </div>
          </div>

          <div className = "team-area">
              <div className = "single-team">
                <img src="https://i.ibb.co/1MGRSgf/PANEL-ROUND.jpg" alt=""/>
                <div className = "team-text">
                    <h4>PANEL-ROUND</h4>
                </div>
            </div>
          </div>

          <div className = "team-area">
              <div className = "single-team">
                <img src="https://i.ibb.co/CwNqDLQ/PANEL-SQUARE.jpg" alt=""/>
                <div className = "team-text">
                    <h4>PANEL-SQUARE</h4>
                </div>
            </div>
          </div>

          <div className = "team-area">
              <div className = "single-team">
                <img src="https://i.ibb.co/6nDX3Bs/Serface-round.jpg"  alt=""/>
                <div className = "team-text">
                    <h4>SERFACE-ROUND</h4>
                </div>
            </div>
          </div>

          <div className = "team-area">
              <div className = "single-team">
                <img src="https://i.ibb.co/TBDb58Q/Cata-shade.jpg"  alt=""/>
                <div className = "team-text">
                    <h4>CATA SHADE</h4>
                </div>
            </div>
          </div>
            
</Slider>
</div>
);
}
}

const cssstyle = `
.sizeForContainer{
  width:74%;
  padding:5px;
}
h2{
  padding-top:20px;
  font-size:35px;
}

.slick-next:before, .slick-prev:before {
color: #000;
}


}


`