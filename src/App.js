import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import "./components/FontAwesomeIcons";
import "./App.css";
import Footer from "./components/Footer";
import Careers from "./pages/Careers";

function App() {
  return (
    <Router>
   <div>

      <Nav />
      <Switch>

      <Route exact path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Services" component={Services} />
      <Route path="/Careers" component={Careers} />
      </Switch>
      <Footer />
   </div>


  
    </Router>
  );
}

export default App;
