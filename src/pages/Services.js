import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Hands_icon from '../assest/images/Hands_icon.png';
import Friends from '../assest/images/Friends.png';
import Home_icon from '../assest/images/Home_icon.png';
import Hospital_icon from '../assest/images/Hospital_icon.png';
import Hand_Pink from '../assest/images/Hand_Pink.png';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import GearHead from '../assest/images/GearHead.png';
import { Button} from 'react-bootstrap';


function Services () {
return(
  <div>
    

<CardDeck >
  <Card style={{width: 300, height: 300, border: 'none', paddingTop: 50}} className='cards'>
    <Card.Img variant="top" src={Hands_icon} style={{width: 100, height: 100, marginLeft:160}}/>
    <Card.Body>
      <Card.Title style={{textAlign: 'center', marginLeft: 40}}>Personal Care</Card.Title>
      <Card.Text>
        <ul style={{textAlign: 'center', listStyle: 'none'}}>
          <li>Bathing, dressing and grooming</li>
          <li>Meal Preparation</li>
          <li>Medication Assistance</li>
          <li>Exercise Assistance</li>
        </ul>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{width: 300, height: 300, border: 'none', paddingTop: 50}} className='cards'>
    <Card.Img variant="top" src={Friends} style={{width: 100, height: 100, marginLeft:150}} />
    <Card.Body>
      <Card.Title style={{textAlign: 'center', marginLeft: 40}}>Companionship</Card.Title>
      <Card.Text>
      <ul style={{textAlign: 'center', listStyle: 'none'}}>
          <li>Shopping and Errands</li>
          <li>Social and Emotional Support</li>
          <li>Safety Advisor and Mobility Assistance</li>
        </ul>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{width: 300, height: 300, border: 'none', paddingTop: 50}} className='cards'>
    <Card.Img variant="top" src={Home_icon} style={{width: 100, height: 100, marginLeft:150}} />
    <Card.Body>
      <Card.Title style={{textAlign: 'center', marginLeft: 40}}>Home Support</Card.Title>
      <Card.Text>
      <ul style={{textAlign: 'center', listStyle: 'none'}}>
          <li>Houskeeping</li>
          <li>Laundry</li>
          <li>Organizing</li>
        </ul>
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
{/*second row*/}
<CardDeck>
  <Card style={{width: 300, height: 300, border: 'none', paddingTop: 50}} className="cards">
    <Card.Img variant="top" src={GearHead} style={{width: 100, height: 100, marginLeft:160}}/>
    <Card.Body>
      <Card.Title style={{textAlign: 'center', marginLeft: 40}}>Memory Care</Card.Title>
      <Card.Text>
        <ul style={{textAlign: 'center', listStyle: 'none'}}>
          <li>Alzheimer's Care</li>
          <li>Dementia Care</li>
          <li>Mental Stimulation</li>
        </ul>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{width: 300, height: 300, border: 'none', paddingTop: 50}} className='cards'>
    <Card.Img variant="top" src={Hospital_icon} style={{width: 100, height: 100, marginLeft:150}} />
    <Card.Body>
      <Card.Title style={{textAlign: 'center', marginLeft: 40}}>Other Services</Card.Title>
      <Card.Text>
      <ul style={{textAlign: 'center', listStyle: 'none'}}>
          <li>Palliative Support</li>
          <li>Hospice Support</li>
          <li>Post-surgery care</li>
        </ul>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{width: 300, height: 350, border: 'none', paddingTop: 50}} className='cards' >
    <Card.Img variant="top" src={Hand_Pink} style={{width: 100, height: 100, marginLeft:150}} />
    <Card.Body>
      <Card.Title style={{textAlign: 'center', marginLeft: 40}}>Wait There's More</Card.Title>
      <Card.Text>
      <p style={{textAlign: 'center'}}>Lush care is devoted to concierge-level care therefore we tailor our services to each client needs. Additional services can be explored by a simple calls.</p>
      <Button variant="warning" size="lg" active style={{height: 40, fontSize:15, marginLeft: 150 }}>
  
  </Button>{' '}
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
</div>
)
}

export default Services;