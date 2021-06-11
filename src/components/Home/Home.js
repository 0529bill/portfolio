import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Particle from '@Components/Widgets/Particle/Particle';
import i18n from '@Lang/i18n/i18n';
import Typewriter from 'typewriter-effect';
import { GApageView } from '../../GaPage/GaPage';
import './index.css';

function Home() {
  let a = i18n();
  useEffect(() => GApageView('portfolio/Home'), []);
  return (
    <>
      <Container className="home_container" fluid>
        <Particle />
        <Container fluid className="home_main">
          <Row>
            <Col md={{ span: 3, offset: 3 }}>
              <span>{a('frontend.local.home.hello')}</span>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 4, offset: 3 }}>
              <span>{a('frontend.local.home.mynameis')}</span>&emsp;
              <span>{a('frontend.local.home.bill')}</span>
            </Col>
          </Row>
          <Row className="home_main_typewriter">
            <Col md={{ span: 3, offset: 3 }}>
              <span>I am a </span>
            </Col>
            <Col className="home_main_typewriter_text">
              <Typewriter
                options={{
                  strings: [
                    a('frontend.local.home.typewriter.webdeveloper'),
                    a('frontend.local.home.typewriter.oceanlover'),
                    a('frontend.local.home.typewriter.photographer'),
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Home;
