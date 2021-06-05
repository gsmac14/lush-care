import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ElderlyHands from '../assest/images/ElderlyHands.jpg';
import NavConsult from '../components/NavConsult';
import { Button, Navbar, Nav, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MedElderly from '../assest/images/MedElderly.jpg'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './style.css';




function About() {
  const [modalShow, setModalShow] = React.useState(false);
    return(
      <>


<div className="card container-fluid cards" style={{border: 'none'}}>
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body" style={{textAlign:'center', paddingTop: 50}} >
              <h5 className="card-title" style={{fontSize: 50}}>Our Care Approach</h5>
              <p className="card-text" style={{fontSize: 25}} >Lush Care takes a unique approach with caring for our seniors. We use flexibility and concierge-level services to manage and care for each every individual. This level of care is provided by our innovative, commpassionate, caring and commited team. </p>
            </div>
            </div>
          <div className="col-md-4" >
        <img src={ElderlyHands} style={{width: 415, height: 450 }}alt="Elderly with hat"/>
          </div>
        
        </div>
      </div>

      <Navbar collapseOnSelect expand="lg" style={{marginBottom: 0, paddingBottom: 0, backgroundColor: 'black'}}>
  <Navbar.Brand style={{margin: 0, fontSize: 20, color: "#ffe4e1"}}className="brand" brand as={Link} to="/Home">Start Today and Begin the Journey!</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor: ' #ffe4e1'}}/>
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
<div className="card container-fluid cards" style={{border: 'none'}}>
        <div className="row g-0">
          <div className="col-md-4">
        <img src={MedElderly} style={{width: 415, height: 450}}alt="Elderly with hat"/>
          </div>
          <div className="col-md-8">
            <div className="card-body"style={{textAlign: 'center', paddingTop: 50}} >
              <h5 className="card-title" style={{ fontSize: 50}} >Care 24/7</h5>
              <p className="card-text" style={{fontSize: 25}}>We are available 24/7 for clients needs including holidays, evenings and weekends</p>
            </div>
            </div>
        
        </div>
      </div>



      <Jumbotron fluid style={{marginTop: 0}} >
  <Container>
    <h1 style={{textAlign: 'center', fontSize: 30 }}>
      Are You Ready To Get Started? 
    </h1>
    <p style={{textAlign: 'center'}}>Lush Care can help you or a loved one in need today! Contact now for a complimentray needs assessment.</p>
    <div style={{textAlign: 'center'}}>

    <Button size="lg" active style={{height: 50, fontSize:15, backgroundColor: "#ffe4e1", color:'black', border:'none' }}>
    214-912-7372
  </Button>
    </div>
  </Container>
</Jumbotron>
      
    

      </>
    );
}

export default About;