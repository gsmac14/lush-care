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
import useMediaQuery from 'react-responsive'

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

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
    
   </div>


  
    </Router>
  );
}

export default App;
