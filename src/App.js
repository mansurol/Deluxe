import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Nav from './Components/nav';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Product from './Components/Product/Product';
import Contact from './Components/Contact/Contact';
import Error from './Components/Error/Error';
import Catalogues from './Components/Catalogues/Catalogues';
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <div >
        <Nav/>
      <Router>
     
      <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/product">
            <Product/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/Catalogues">
            <Catalogues/>
          </Route>
          <Route exact path="/">
          <Home />
          </Route>
          <Route  path="*">
          <Error />
          </Route>
          
        </Switch>
        <Footer/>
    </Router>
    
    
    </div>
  );
}

export default App;


