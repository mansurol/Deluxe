import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Img from './img/Logo.png';
import './nav.css'
const nav = () => {
    return (
      <div>
        <Navbar collapseOnSelect   expand="sm" className="coloring">
          <div className="container">
        <Navbar.Brand  href="/home">
          <img  src={Img} width="120" height="52" alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ml-auto text-center fontsize ">
            <Nav.Link  href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
        </div>
      </Navbar>
      
      </div>
    );
};

export default nav;