import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
            
            <NavDropdown  title="Product" id="collasible-nav-dropdown ">
            <div className="dropdowncolor">
        <NavDropdown.Item href="/bulb">LED Industrial Bulb</NavDropdown.Item>
        <NavDropdown.Item href="/tubelight">LED 3D Tube Light</NavDropdown.Item>
        <NavDropdown.Item href="/deluxeledindustrialroundtube">LED T8 Industrial Round Tube</NavDropdown.Item>
        <NavDropdown.Item href="/wallmounted">LED T8 Industrial Wall Mounted</NavDropdown.Item>
        <NavDropdown.Item href="/doubleshade">LED T5 & T8 Industrial Double Shade</NavDropdown.Item>
        <NavDropdown.Item href="/parellight">Parel Light</NavDropdown.Item>
        <NavDropdown.Item href="/highlight">High Buy Light</NavDropdown.Item>
        <NavDropdown.Item href="/floodlight">Flood Light</NavDropdown.Item>
        <NavDropdown.Item href="/streetlight">Street Light</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/industriallightshade">Industrial Light Shade</NavDropdown.Item>
        <NavDropdown.Item href="/otherslight">LED Others Light</NavDropdown.Item>

        </div>
      </NavDropdown>
     
            <Nav.Link href="/contact">Contact</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
        </div>
      </Navbar>
      
      </div>
    );
};

export default nav;