import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './index.css';

function Footer({ locationState }) {
  let currentStyle;
  if (
    locationState.location === '/About' ||
    locationState.location === '/Resume'
  ) {
    currentStyle = { backgroundColor: 'black' };
  }

  return (
    <Container
      fluid
      className="footer_container"
      style={
        locationState.location === '/About' ||
        locationState.location === '/Resume'
          ? { backgroundColor: 'white', color: 'black' }
          : { backgroundColor: 'black', color: 'white' }
      }
    >
      <Row>
        <Col md={{ span: 'ˇ', offset: '5' }}>©2021 handcrafted by bill</Col>
        {/* <Col md={{ span: '3' }}>
          Contact me
          <a
            onClick={() => window.location.assign('mailto:0529bill@gmail.com')}
            className="ml-2"
          >
            @0529bill@gmail.com
          </a>
        </Col> */}
      </Row>
    </Container>
  );
}

export default Footer;
