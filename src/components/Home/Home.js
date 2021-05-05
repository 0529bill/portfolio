import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Particle from '@Components/Widgets/Particle/Particle';
import i18n from '@Lang/i18n/i18n';
import Typewriter from 'typewriter-effect';
import './index.css';

function Home() {
  let a = i18n();
  return (
    <>
      <Container className="home_container" fluid>
        <Particle />
        <Container fluid className="home_main">
          <Row lg="12">
            <span>{a('frontend.local.home.hello')}</span>
          </Row>
          <Row>
            <span>{a('frontend.local.home.mynameis')}</span>&emsp;
            <span>{a('frontend.local.home.bill')}</span>
          </Row>
          <Row>
            <span>I am a </span>&emsp;
            <Typewriter
              options={{
                strings: [
                  a('frontend.local.home.typewriter.webdeveloper'),
                  a('frontend.local.home.typewriter.oceanlover'),
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Home;
