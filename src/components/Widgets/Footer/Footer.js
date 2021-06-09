import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './index.css';

function Footer({ locationState }) {
  return (
    <Container
      fluid
      className="footer_container"
      style={
        locationState.location === 'about' ||
        locationState.location === 'resume'
          ? { backgroundColor: 'white', color: 'black' }
          : { backgroundColor: 'black', color: 'white' }
      }
    >
      <Row>
        <Col md={{ span: '', offset: '5' }}>©2021 handcrafted by bill</Col>
      </Row>
    </Container>
  );
}

export default Footer;
