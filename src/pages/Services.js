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
  <Card style={{width: 300, height: 300, border: 'none', paddingTop: 50, alignItems: 'center'}} className='cards'>
    <Card.Img variant="top" src={Hands_icon} style={{width: 100, height: 100}}/>
    <Card.Body style={{textAlign: 'center'}}>
      <Card.Title className='title'>Personal Care</Card.Title>
      <Card.Text className='text'>
        <ul style={{listStyleType: 'none', paddingLeft: 0}}>
          <li>Bathing, dressing</li>
          <li>Meal Preparation</li>
          <li>Medication Assistance</li>
          <li>Exercise Assistance</li>
        </ul>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{width: 300, height: 300, border: 'none', paddingTop: 50, alignItems: 'center'}} className='cards'>
    <Card.Img variant="top" src={Friends} style={{width: 100, height: 100}} />
    <Card.Body style={{textAlign: 'center'}} >
      <Card.Title className='title'>Companionship</Card.Title>
      <Card.Text className='text'>
      <ul style={{listStyleType: 'none', paddingLeft: 0}}>
          <li>Shopping and Errands</li>
          <li>Social and Emotional Support</li>
          <li>Safety Advisor and Mobility Assistance</li>
        </ul>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{width: 300, height: 300, border: 'none', paddingTop: 50, alignItems: 'center'}} className='cards'>
    <Card.Img variant="top" src={Home_icon} style={{width: 100, height: 100}} />
    <Card.Body style={{textAlign: 'center'}}>
      <Card.Title className='title'>Home Support</Card.Title>
      <Card.Text className='text'>
      <ul style={{listStyleType: 'none', paddingLeft: 0}}>
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
  <Card style={{width: 300, height: 350, border: 'none', paddingTop: 50, alignItems: 'center'}} className="cards">
    <Card.Img variant="top" src={GearHead} style={{width: 100, height: 100}}/>
    <Card.Body style={{textAlign: 'center'}}>
      <Card.Title className='title'>Memory Care</Card.Title>
      <Card.Text className='text'>
        <ul style={{listStyleType: 'none', paddingLeft: 0}}>
          <li>Alzheimer's Care</li>
          <li>Dementia Care</li>
          <li>Mental Stimulation</li>
        </ul>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{width: 300, height: 350, border: 'none', paddingTop: 50, alignItems: 'center'}} className='cards'>
    <Card.Img variant="top" src={Hospital_icon} style={{width: 100, height: 100}} />
    <Card.Body style={{textAlign: 'center'}}>
      <Card.Title className='title'>Other Services</Card.Title>
      <Card.Text className='text'>
      <ul style={{listStyleType: 'none', paddingLeft: 0}}>
          <li>Palliative Support</li>
          <li>Hospice Support</li>
          <li>Post-surgery care</li>
        </ul>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{width: 300, height: 350, border: 'none', paddingTop: 50, alignItems: 'center'}} className='cards' >
    <Card.Img variant="top" src={Hand_Pink} style={{width: 100, height: 100}} />
    <Card.Body>
      <Card.Title className='title' style={{textAlign: 'center'}}>Wait There's More</Card.Title>
      <Card.Text className='text'>
      <p style={{textAlign: 'center'}}>Additional services can be explored by a simple call.!</p>
      <p style={{textAlign: 'center', fontWeight: 'bold'}}>Call 214-912-7372</p>

      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
</div>
)
}

export default Services;