import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ElderlyHat from "../../assest/images/ElderlyHat.jpg";
import Carousel from 'react-bootstrap/Carousel';
import BP_photo from '../../assest/images/BP_photo.jpg';
import GroceryElderly from '../../assest/images/GroceryElderly.jpg'

function Card() {
    return(
        <div className="card mb-3 container-fluid" style={{border: 'none'}} >
        <div className="row g-0">
          <div className="col-md-4">
            <Carousel fade>
  <Carousel.Item interval={10000}>
  <img src={ElderlyHat} style={{width: 450, height: 470}}alt="Elderly with hat"/>

    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={10000}>
  <img src={BP_photo} style={{width: 450, height: 470}}alt="Elderly with hat"/>

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={10000}>
  <img src={GroceryElderly} style={{width: 450, height: 470}}alt="Elderly with hat"/>

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          </div>
          <div className="col-md-8">
            <div className="card-body" style={{paddingLeft: 50}}>
              {/* <h5 className="card-title" style={{textAlign: "center", paddingTop: 200, fontSize: 30}} >Our Care Offerings</h5> */}
              <p className="card-text" style={{textAlign: 'center', paddingTop: 150, fontSize: 30, paddingLeft:50, paddingRight: 50}}>Get independence in your home for a lifetime from a premium homecare services tailored to your needs. Contact Us: 214-912-7372 </p>
              <p className="card-text"><small className="text-muted"></small></p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Card;