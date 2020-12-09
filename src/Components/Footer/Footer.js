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
                <p>DELUXE LIGHTING SOLUTION</p>
                <p>347, Kazipara, Kafrul, Dhaka-1216</p>
                <p>Help:+880186247389</p>
                <p>info@deluxe-bd.com</p>
                <p>www.deluxe-bd.com</p>
                </div>
            </div>
            <div className="col-md-4 mansur company-address">

              <h4>About Us</h4>
             <p> <Link className="linkstyle" to="/about"> Who we are?</Link></p>
              <p><Link className="linkstyle" to="/about">Ours mission </Link></p>
              <p><Link className="linkstyle" to="/about">Customer Service</Link></p>

            </div>
            <div className="col-md-4 ">
                <h4 className="pl-2 follow">Follow Us</h4>
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
          <small className="text-white  ">© 2020 Copyright: deluxe-bd.com</small>
        </div>
        </div>
        </div>
    );
};

export default Footer;