import React, { Component } from 'react';
import './Navbar.css';
import MenuItem from './MenuItem';
import Img from '../img/Logo.png';
class Navbar extends Component {
    state ={clicked :'false'}

    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
    return (
        <nav className="navbarItems ">
            
             <div className="navbar-logo">
                 <img src={Img} alt="logo"/>
             </div>
             <div className="menu-icon" onClick={this.handleClick}>
                 <i className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}></i>
             </div>
             <ul className={this.state.clicked ? 'nav-menu active':'nav-menu'}>
                 {MenuItem.map((item , index) =>{
                     return (
                         <li key={index}>
                             <a className={item.cName} href={item.url}>
                             {item.title}
                         </a>
                         </li>
                     )
                 })}
                 

             </ul>
             
        </nav>

    );
  };
};

export default Navbar;