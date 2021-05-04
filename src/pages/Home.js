import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../components/Card";
import NavConsult from "../components/NavConsult";
import { Button, Navbar, Nav, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Jumbotron from '../components/Jumbotron';
import Card2 from '../components/Card2';
import Mission from '../components/Mission';

function Home (){
  const [modalShow, setModalShow] = React.useState(false);

    return(
<>
<Card />
{/*button to open modal*/}
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{marginBottom: 0, paddingBottom: 0}}>
  <Navbar.Brand style={{margin: 0, padding: 0}}className="brand" brand as={Link} to="/Home">Let Us Help Your Today!</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
<Button style={{float: 'right'}} variant="info" size="lg" onClick={() => setModalShow(true)} centered>
        Schedule Free Consultation
      </Button>

    </Nav>
  </Navbar.Collapse>
</Navbar>
<NavConsult
show={modalShow}
onHide={() => setModalShow(false)}

 />
<Jumbotron />
<Card2 />
<Mission />
</>

        


    );  
}

export default Home;