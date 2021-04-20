import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path='/' component={Home} />
      </div>
    </Router>
  );
}

export default App;
