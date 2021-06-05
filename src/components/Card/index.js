import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ElderlyHat from "../../assest/images/ElderlyHat.jpg";
import Carousel from 'react-bootstrap/Carousel';
import BP_photo from '../../assest/images/BP_photo.jpg';
import GroceryElderly from '../../assest/images/GroceryElderly.jpg'
import './style.css'
import MediaQuery from 'react-responsive'

function Card() {
  
    return(
        <div className="card mb-3 container-fluid" style={{border: 'none'}} >
        <div className="row g-0">
          <div className="col-md-4">
            <Carousel fade style={{width: 450}}>
  <Carousel.Item interval={10000}>
     

  <img src={ElderlyHat} style={{width: 400, height: 450}}alt="Elderly with hat"/>
          

    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={10000}>
  <img src={BP_photo} style={{width: 400, height: 450}}alt="Elderly with hat"/>

    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={10000}>
  <img src={GroceryElderly} style={{width: 400, height: 450}}alt="Elderly with hat"/>

    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          </div>
          <div className="col-md-8 cards">
            <div className="card-body" style={{textAlign: 'center', paddingTop: 150}}>
              <p className="card-text" style={{fontSize: 30}}>Get independence in your home for a lifetime from a premium homecare services tailored to your needs.  </p>
              <p style={{fontSize: 30}}>Contact Us: 214-912-7372</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Card;