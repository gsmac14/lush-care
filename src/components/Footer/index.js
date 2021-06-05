import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';





function Footer() {
  return (
    <>
    <Navbar collapseOnSelect fixed= "bottom" expand="lg"  style={{marginBottom: 0, paddingBottom: 0, backgroundColor: 'black' }}>
  <Navbar.Brand style={{margin: 0, padding: 0, fontSize: 30, color: "#ffe4e1" }}className="brand" brand as={Link} to="/">Lush Care</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link style={{fontSize: 15, color: "#ffe4e1"}} as={Link} to="/About">About Us</Nav.Link>
      <Nav.Link style={{fontSize: 15, color: "#ffe4e1"}} as={Link} to="/Services" >Services</Nav.Link>
      <Nav.Link style={{fontSize: 15, color: "#ffe4e1"}} as={Link} to="/Careers" >Careers</Nav.Link>
      {/* <Nav.Link style={{fontSize: 15, color: "#ffe4e1"}} as={Link} to="/Contact" >Contact</Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </>
  );
}
    // <Nav.Link eventKey="1" as={Link} to="/Home">Home</Nav.Link>
    //   <Nav.Link eventKet="2" as={Link} to="/About">About</Nav.Link>
export default Footer;