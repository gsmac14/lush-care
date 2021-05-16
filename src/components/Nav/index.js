import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "./Custom Size.png"
import './style.css';




function Navi() {
  return (
    <>
  

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{marginBottom: 0, paddingBottom: 0}}>
    {/* <img src={Logo} style={{width: 200, height: 200, margin: 0, padding: 0}}alt="website logo" />  */}
  <Navbar.Brand style={{margin: 0, padding: 0}}className="brand" brand as={Link} to="/">Lush Care</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link as={Link} to="/About">About Us</Nav.Link>
      <Nav.Link as={Link} to="/Services" >Services</Nav.Link>
      <Nav.Link as={Link} to="/Careers" >Caregiver Careers</Nav.Link>
      <Nav.Link as={Link} to="/Contact" >Contact</Nav.Link>
  
    </Nav>
  </Navbar.Collapse>
</Navbar>
  
    </>
  );
}
export default Navi;