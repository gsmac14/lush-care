import React from 'react';
import { Button, Jumbotron, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Nurse_Heart from '../assest/images/Nurse_Heart.jpg';
import NavConsult from '../components/NavConsult';
import './style.css';

function Careers(){
  const [modalShow, setModalShow] = React.useState(false);
    return(
      <>
<Card>
  <Card.Img src={Nurse_Heart} alt="Card image" />
  <Card.ImgOverlay>
  <Card style={{ width: 700, height: 440, marginLeft: 200, marginTop: 100, borderWidth: 10 }} className="cards">
  <Card.Body>
    <Card.Title style={{textAlign: 'center', fontSize:40}} >The Benefits of Working for Lush Care</Card.Title>
    <br />
    <Card.Text style={{textAlign: 'center', fontSize: 30, paddingRight: 80, paddingLeft: 80}}>
    As a caregiver you get to become an integral part of a growing services while making a real and meaningful difference in the live of others.
    </Card.Text>
    <br/>
    <br/>
    <div style={{textAlign: 'center'}}>

    <Button style={{}} variant="info" size="lg" onClick={() => setModalShow(true)} centered>
        Apply Now
      </Button>
    </div>
    <NavConsult show={modalShow}
onHide={() => setModalShow(false)} />
  </Card.Body>
</Card>
<br/>
<br/>
<br/>
<br/>
<br/>
<Card style={{ width: 700, height: 400, marginLeft: 200, borderWidth: 10  }} className="cards">
  <Card.Body>
    <Card.Title style={{textAlign: 'center', fontSize:40}} >What Lush Care Offer</Card.Title>
    <br />
    <br/>
    <Card.Text style={{textAlign: 'center', fontSize: 30, paddingRight: 80, paddingLeft: 80}}>
    <ul style={{listStyle: 'none'}}>
      <li>Competitive Compensations</li>
      <li> Consistent Work</li>
      <li>Great Work Environment</li>
      <li>Understaning Employers</li>
    </ul>
    </Card.Text>
  </Card.Body>
</Card>
<br/>
<br/>
<br/>
<br/>
<Card style={{ width: 700, height: 400, marginLeft: 200, borderWidth: 10  }} className="cards">
  <Card.Body>
    <Card.Title style={{textAlign: 'center', fontSize:40, paddingTop: 70}} >Are You Ready to Start an Amazing Career?</Card.Title>
    <br />
    <br/>
    <Card.Text style={{textAlign: 'center', fontSize: 30, paddingRight: 80, paddingLeft: 80}}>
    <p> Just <Card.Link style={{}} variant="info" size="lg" onClick={() => setModalShow(true)} centered> 
        Apply Now
      </Card.Link> or call 214-912-7372 </p>
    </Card.Text>
  </Card.Body>
</Card>

  </Card.ImgOverlay>
</Card>
</>
    )
}

export default Careers;
