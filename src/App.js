import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services"
import "./components/FontAwesomeIcons";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/About'  component={About}/>
        <Route exact path='/Services'  component={Services}/>

      </div>
    </Router>
  );
}

export default App;
