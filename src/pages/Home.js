import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../components/Card";
import NavConsult from "../components/NavConsult";
import { Button, Navbar, Nav, Container, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Jumbotron from '../components/Jumbotron';
import Card2 from '../components/Card2';
import Mission from '../components/Mission';


function Home (){
  const [modalShow, setModalShow] = React.useState(false);

    return(
<>




<Card/>


<Navbar collapseOnSelect expand="lg"  style={{marginBottom: 0, paddingBottom: 0, marginTop: 0, paddingTop:0, backgroundColor: 'black'}}>
  <Navbar.Brand style={{margin: 0, paddingTop: 10, fontSize: 20, color: "#ffe4e1" }}className="brand" brand as={Link} to="/Home">Let Us Help Your Today!</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto cards">
<Button style={{float: 'right',  }} variant="info" size="lg" onClick={() => setModalShow(true)} centered>
        Schedule Free Consultation
      </Button>

    </Nav>
  </Navbar.Collapse>
</Navbar>
<NavConsult
show={modalShow}
onHide={() => setModalShow(false)}

/>
<Jumbotron className="cards"/>
<Card2 />
<Mission />




</>

        


    );  
}

export default Home;