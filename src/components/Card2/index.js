import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ElderlyComp from "../../assest/images/ElderlyComp.jpg"
import './style.css'
function Card2() {
    return(

        <div className="card mb-3 container-fluid cards" style={{border: 'none'}}>
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body" >
              {/* <h5 className="card-title" style={{textAlign: "center"}} >About Lush Care</h5> */}
              <p className="card-text" style={{textAlign: 'center', paddingTop: 150, fontSize: 30}}>We we are the number one choice for care, recommended by numerous healthcare professionals and clients. </p>
              <p className="card-text"><small className="text-muted"></small></p>
            </div>
            </div>
          <div className="col-md-4">
        <img src={ElderlyComp} style={{width: 360, height: 450, margin: 0}}alt="Elderly with hat"/>
          </div>
        
        </div>
      </div>
    );
}

export default Card2;