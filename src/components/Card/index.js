import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ElderlyHat from "../../assest/images/ElderlyHat.jpg"

function Card() {
    return(
        <div className="card mb-3 container-fluid">
        <div className="row g-0">
          <div className="col-md-4">
        <img src={ElderlyHat} style={{width: 450, height: 450}}alt="Elderly with hat"/>
            {/* <img src="..." alt="..."/> */}
          </div>
          <div className="col-md-8">
            <div className="card-body" style={{paddingLeft: 50}}>
              <h5 className="card-title" style={{textAlign: "center"}} >Our Care Offerings</h5>
              <p className="card-text" style={{textAlign: 'center'}}>Get independence in your home for a lifetime from a premium homecare services tailored to your needs. Contact Us: 214-912-7372 </p>
              <p className="card-text"><small className="text-muted"></small></p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Card;