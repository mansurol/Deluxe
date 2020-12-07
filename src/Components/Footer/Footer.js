import React from 'react';
import Img from '../img/Logo.png';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
  
      } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
  

const Footer = () => {
    return (
        <div className="footer-bg pt-4">
        <div className="container main">
            <div className="col-md-4 mansur">
                <img className="Img-sizing"src={Img} alt=""/>
                <div className="company-address">
                <p>Deluxe lighting solution</p>
                <p>shayamoli,dhaka-1000</p>
                <p>deluxeled@gmail.com</p>
                <p>+880186247389</p>
                </div>
            </div>
            <div className="col-md-4 mansur company-address">

              <h4>About Us</h4>
               <p> Who we are? </p>  
              <p>Ours mission customer</p>

            </div>
            <div className="col-md-4 ">
                <h4 className="pl-2">Follow Us</h4>
            <a href="https://www.youtube.com/c/jamesqquick"
  className="youtube social">
  <FontAwesomeIcon icon={faYoutube} size="2x" />
</a>
<a href="https://www.facebook.com/learnbuildteach/"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://www.twitter.com/jamesqquick" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="https://www.instagram.com/learnbuildteach"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
            </div>
        </div>
        <div className="copyright-bg">
        <hr/>
        <div className="container copyright pb-3">
          <small className="text-white  ">© 2020 Copyright: DeluxeLED.com</small>
        </div>
        </div>
        </div>
    );
};

export default Footer;