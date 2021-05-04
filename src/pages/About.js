import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ElderlyHands from '../assest/images/ElderlyHands.jpg';
import NavConsult from '../components/NavConsult';
import { Button, Navbar, Nav, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MedElderly from '../assest/images/MedElderly.jpg'



function About() {
  const [modalShow, setModalShow] = React.useState(false);
    return(
      <>
<div className="card mb-3 container-fluid" style={{border: 'none'}}>
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body" >
              <h5 className="card-title" style={{textAlign: "center", fontSize: 50, paddingTop: 50}} >Our Care Approach</h5>
              <p className="card-text" style={{textAlign: 'center', paddingTop: 50, fontSize: 25, paddingRight: 50, paddingLeft: 50}}>Lush Care takes a unique approach with caring for our seniors. We use flexibility and concierge-level services to manage and care for each every individual. This level of care is provided by our innovative, commpassionate, caring and commited team. </p>
              <p className="card-text"><small className="text-muted"></small></p>
            </div>
            </div>
          <div className="col-md-4">
        <img src={ElderlyHands} style={{width: 450, height: 450, margin: 0}}alt="Elderly with hat"/>
          </div>
        
        </div>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{marginBottom: 0, paddingBottom: 0}}>
  <Navbar.Brand style={{margin: 0, padding: 0}}className="brand" brand as={Link} to="/Home">Start Today and Begin the Journey!</Navbar.Brand>
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
 <div className="card mb-3 container-fluid" style={{border: 'none'}}>
        <div className="row g-0">
          <div className="col-md-4">
        <img src={MedElderly} style={{width: 450, height: 450, margin: 0}}alt="Elderly with hat"/>
          </div>
          <div className="col-md-8">
            <div className="card-body" >
              <h5 className="card-title" style={{textAlign: "center", fontSize: 50, paddingTop: 50}} >Our Care Approach</h5>
              <p className="card-text" style={{textAlign: 'center', paddingTop: 50, fontSize: 25, paddingRight: 50, paddingLeft: 50}}>Lush Care takes a unique approach with caring for our seniors. We use flexibility and concierge-level services to manage and care for each every individual. This level of care is provided by our innovative, commpassionate, caring and commited team. </p>
              <p className="card-text"><small className="text-muted"></small></p>
            </div>
            </div>
        
        </div>
      </div>

      </>
    );
}

export default About;