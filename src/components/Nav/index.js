import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button,Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';




function Navi() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand className="brand" brand as={Link} to="/Home">Lush Care</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link as={Link} to="/About">About</Nav.Link>
      <Nav.Link as={Link} to="/How" >How It Works</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </>
  );
}
    // <Nav.Link eventKey="1" as={Link} to="/Home">Home</Nav.Link>
    //   <Nav.Link eventKet="2" as={Link} to="/About">About</Nav.Link>
export default Navi;