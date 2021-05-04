import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';





function Footer() {
  return (
    <>
    <Navbar collapseOnSelect fixed= "bottom" expand="lg" bg="dark" variant="dark" style={{marginBottom: 0, paddingBottom: 0}}>
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
    // <Nav.Link eventKey="1" as={Link} to="/Home">Home</Nav.Link>
    //   <Nav.Link eventKet="2" as={Link} to="/About">About</Nav.Link>
export default Footer;