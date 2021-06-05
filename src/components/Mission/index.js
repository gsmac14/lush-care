import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Mission(){

    return(
        <Jumbotron fluid style={{ marginTop: 0}}>
  <Container>
    <h1 style={{textAlign:'center', fontSize:30,}}>Our Mission</h1>
    <p style={{textAlign: 'center', fontSize: 30 }}>
        Our mission is to bring back dignity to care for our loved ones. We strive to bring peace of mind to families and bring pride and purpose to our care team.
    </p>
  </Container>
</Jumbotron>
    )
}

export default Mission;