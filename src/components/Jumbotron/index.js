import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Jumbo(){

    return(
        <Jumbotron fluid style={{marginBottom: 0}}>
  <Container>
    <p style={{textAlign: 'center', fontSize: 30}}>
    Over the past ten years, we've become the leading provider of home care for older adults across the country.
    </p>
  </Container>
</Jumbotron>
    )
}

export default Jumbo;