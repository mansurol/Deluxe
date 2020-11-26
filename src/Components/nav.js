import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Img from './img/Logo.png';
import './nav.css'
const nav = () => {
    return (
        <Navbar collapseOnSelect   expand="lg" bg="dark" variant="dark">
          <div className="container">
        <Nav.Link  to="#home">
          <img className="logo-bar" src={Img} alt="logo"/>
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Product</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
        </div>
      </Navbar>
    );
};

export default nav;