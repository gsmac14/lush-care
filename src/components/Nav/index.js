import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Navbar, Nav,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "./Custom Size.png"
import './style.css';




function Navi() {
  return (
    <>
  

    <Navbar collapseOnSelect expand="lg" style={{marginBottom: 0, paddingBottom: 0, backgroundColor: 'black'}}>
    {/* <img src={Logo} style={{width: 200, height: 200, margin: 0, padding: 0}}alt="website logo" />  */}
  <Navbar.Brand style={{fontSize: 30, color: "#ffe4e1" }}className="brand" brand as={Link} to="/">Lush Care</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor:' #ffe4e1'}} />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link style={{fontSize: 15, color: "#ffe4e1"}} as={Link} to="/About">About Us</Nav.Link>
      <Nav.Link style={{fontSize: 15, color: "#ffe4e1"  }} as={Link} to="/Services" >Services</Nav.Link>
      <Nav.Link style={{fontSize: 15, color: "#ffe4e1" }} as={Link} to="/Careers" >Careers</Nav.Link>
      {/* <Nav.Link style={{fontSize: 15, color: "#ffe4e1" }} as={Link} to="/Contact" >Contact</Nav.Link> */}
  
    </Nav>
  </Navbar.Collapse>
</Navbar>
  
    </>
  );
}
export default Navi;