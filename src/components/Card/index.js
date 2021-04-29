import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ElderlyHat from "../../assest/images/ElderlyHat.jpg"

function Card() {
    return(
        <div class="card mb-3" style={{width: 1165}}>
        <div class="row g-0">
          <div class="col-md-4">
        <img src={ElderlyHat} style={{width: 500, height: 500}}alt="Elderly with hat"/>
            {/* <img src="..." alt="..."/> */}
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title" style={{alignContent: 'right'}}>Our Care Offerings</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Card;