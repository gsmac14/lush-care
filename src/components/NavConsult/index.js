import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import nl2br from "react-newline-to-break";
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';
init("user_YmMACS2dREJP4aWwQGMNQ");

function NavCon(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [usstate, setUsState] = useState("");
  const [zip, setZip] = useState("");
  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_pvoqs58', 'template_bfyjweo', e.target, "user_YmMACS2dREJP4aWwQGMNQ" )
      .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
          console.log('FAILED...', error);
      });
        //clears the input
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setCity("");
    setUsState("");
    setZip("");

  };


    {/* allows breaks for header*/}
  let newText =
    "Speak to a Care Advisor Now.\nGet Questions Answered!\n214-912-7372";

    {/*Array of objects containing states data*/}
    let states =[
        {label: "Alaska", value: "Alaska"},
        {label: "Alabama", value: "Alabama"},
        {label: "Arkansas", value: "Arkansas"},
        {label: "Arizona", value: "Arizona"},
        {label: "California", value: "California"},
        {label: "Colorado", value: "Colorado"},
        {label: "Connecticut", value: "Connecticut"},
        {label: "District of Columbia", value: "District of Columbia"},
        {label: "Delaware", value: "Delaware"},
        {label: "Florida", value: "Florida"},
        {label: "Georgia", value: "Georgia"},
        {label: "Hawaii", value: "Hawaii"},
        {label: "Iowa", value: "Iowa"},
        {label: "Idaho", value: "Idaho"},
        {label: "Illinois", value: "Illinois"},
        {label: "Indiana", value: "Indiana"},
        {label: "Kansas", value: "Kansas"},
        {label: "Kentucky", value: "Kentucky"},
        {label: "Louisiana", value: "Louisiana"},
        {label: "Massachusetts", value: "Massachusetts"},
        {label: "Maryland", value: "Maryland"},
        {label: "Maine", value: "Maine"},
        {label: "Michigan", value: "Michigan"},
        {label: "Minnesota", value: "Minnesota"},
        {label: "Missouri", value: "Missouri"},
        {label: "Mississippi", value: "Mississippi"},
        {label: "Montana", value: "Montana"},
        {label: "North Carolina", value: "North Carolina"},
        {label: "North Dakota", value: "North Dakota"},
        {label: "Nebraska", value: "Nebraska"},
        {label: "New Hampshire", value: "New Hampshire"},
        {label: "New Jersey", value: "New Jersey"},
        {label: "New Mexico", value: "New Mexico"},
        {label: "Neveda", value: "Neveda"},
        {label: "New York", value: "New York"},
        {label: "Ohio", value: "Ohio"},
        {label: "Oklahoma", value: "Oklahoma"},
        {label: "Oregon", value: "Oregon"},
        {label: "Pennsylvania", value: "Pennsylvania"},
        {label: "Puerto Rico", value: "Puerto Rico"},
        {label: "Rhode Island", value: "Rhode Island"},
        {label: "South Carolina", value: "South Carolina"},
        {label: "South Dakota", value: "South Dakota"},
        {label: "Tennessee", value: "Tennessee"},
        {label: "Texas", value: "Texas"},
        {label: "Utah", value: "Utah"},
        {label: "Virginia", value: "Virginia"},
        {label: "vermont", value: "Vermont"},
        {label: "Washington", value: "Washington"},
        {label: "Wisconsin", value: "Wisconsin"},
        {label: "West Virginia", value: "West Virginia"},
        {label: "Wyoming", value: "Wyoming"},
        {option: ''}
    ]

    // eslint-disable-next-line no-lone-blocks
    {/*Using state to keep track of what the selected state is*/}
    let [state, setStates] = useState("Select a state")

    // eslint-disable-next-line no-lone-blocks
    {/*Used Function to update the states whenever an option is selected*/}
    let handleStateChange = (e) => {
        setStates(e.target.value)
        setUsState(e.target.value)
       
    }

  return (
    <>
      {/*overides the opacity set by fade*/}
      <Modal
        style={{ opacity: 1 }}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header style={{ display: "none" }} closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 style={{ textAlign: "center" }}> {nl2br(newText)}</h4>
       
          <Form className="contact-form" onSubmit={sendEmail}  >
            <Form.Row>
              <Form.Group as={Col} controlId="formFirstlName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="firstName" placeholder="Enter First Name" value={firstName}  onChange = {(e) => setFirstName(e.target.value)} name='firstName' />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="lastName" placeholder="Last Name" value={lastName}  onChange = {(e) => setLastName(e.target.value)} name='lastName' />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="phone" placeholder="123-456-7890" value={phone}  onChange = {(e) => setPhone(e.target.value)} name='phone' />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder="Email" value={email}  onChange = {(e) => setEmail(e.target.value)} name='email'/>
              </Form.Group>
            </Form.Row>

            <Form.Group as={Col} controlId="formGridAddress">
              <Form.Label>Address </Form.Label>
              <Form.Control type='address' placeholder="123 Comapany Lane" value={address}  onChange = {(e) => setAddress(e.target.value)} name='address' />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control type='city' value={city}  onChange = {(e) => setCity(e.target.value)} name='city' />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>

                {/*passing dropdown through handleStateChange so that every time a state is selected it will update and render a value*/}
                <Form.Control as="select" value={state.option} type='state'  onChange={handleStateChange.value} name='state'>
                  <option value= {usstate} >Select a state</option>
                  {states.map((state) => <option key={state.label} value={state.value}>{state.label}</option>)}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control type='zip' value={zip}  onChange = {(e) => setZip(e.target.value) }  name='zip'/>
              </Form.Group>
            </Form.Row>


            <Button variant="primary" type="submit"   >
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavCon;
