import React from 'react'
import { Container } from "react-bootstrap";
import Particle from '../components/Particle';
import ContactForm from '../components/Contact/Contact';
import Social from '../components/Contact/Social';

const Contact = () => {
  return (
    <Container style={{paddingTop: '40px'}}>
      <Particle />
      <ContactForm />
      <Social />
    </Container>
  )
}

export default Contact