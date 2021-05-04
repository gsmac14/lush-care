import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Jumbo(){

    return(
        <Jumbotron fluid>
  <Container>
    {/* <h1>Fluid jumbotron</h1> */}
    <p style={{textAlign: 'center', fontSize: 30, paddingLeft:300 , paddingRight: 300 }}>
    Over the past ten years, we've become the leading provider of home care for older adults across the country.
    </p>
  </Container>
</Jumbotron>
    )
}

export default Jumbo;