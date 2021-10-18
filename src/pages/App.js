import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import About from "./About";
import Locations from "./Locations";
import Contacts from "./Contacts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Touch from "../components/Touch";
import WebDesign from "./WebDesign";
import GraphicDesign from "./GraphicDesign";
import AppDesign from "./AppDesign";



function App() {
  return (
    <Router>
      <div>
        <Header />

      
        <Switch>
          
        <Route exact path="/home">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/locations">
            <Locations />
          </Route>

          <Route path="/contacts">
            <Contacts />
          </Route>

          <Route path="/graphicdesign">
            <GraphicDesign />
          </Route> 


          <Route path="/appdesign">
            <AppDesign />
          </Route> 


          <Route path="/webdesign">
            <WebDesign />
          </Route> 

         

        </Switch>
        <Touch />
        <Footer />
      </div>
    </Router>
  );
  
}

export default App;






