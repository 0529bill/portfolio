import React, { useEffect } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import i18n from '@Lang/i18n/i18n';
import Particle from '@Components/Widgets/Particle/Particle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
function About() {
  let a = i18n();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Container className="about_container" fluid>
        {/* <Particle /> */}
        <Container className="about_container_main">
          <div
            data-aos="fade-up"
            data-aos-delay="350"
            data-aos-duration="2000"
            className="about_container_main_header"
          >
            {a('frontend.local.about.title')}
          </div>
          <Row className="about_container_main_text1">
            <Col
              data-aos="fade-up"
              data-aos-delay="900"
              data-aos-duration="2000"
            >
              {a('frontend.local.about.description1')}
            </Col>
          </Row>
          <Row className="about_container_main_text2">
            <Col
              data-aos="fade-up"
              data-aos-delay="1500"
              data-aos-duration="2000"
            >
              {a('frontend.local.about.description2')}
            </Col>
          </Row>
          <Row className="about_container_main_text3">
            <Col
              data-aos="fade-up"
              data-aos-delay="1500"
              data-aos-duration="2000"
            >
              {a('frontend.local.about.description3')}
            </Col>
          </Row>
        </Container>
        <Container
          className="skillCards"
          data-aos="fade-up"
          data-aos-delay="3000"
          data-aos-duration="2000"
          className="about_container_main_header"
        >
          <div className="skillCards_header">
            {a('frontend.local.about.skillCards.header')}
          </div>
          <Row>
            <Col className="skillCards_main" md={4}>
              <div className="skillCards_web">
                <p>{a('frontend.local.about.skillCards.webText')}</p>
              </div>
              <div className="skillCards_webText">
                {a('frontend.local.about.skillCards.webTextContent')}
              </div>
            </Col>
            <Col className="skillCards_main" md={4}>
              <div className="skillCards_web">
                <p>{a('frontend.local.about.skillCards.webDesign')}</p>
              </div>
              <div className="skillCards_webText">
                <div>
                  {a('frontend.local.about.skillCards.webDesignContent')}
                </div>
              </div>
            </Col>
            <Col className="skillCards_main" md={4}>
              <div className="skillCards_web">
                <p>{a('frontend.local.about.skillCards.language')}</p>
              </div>
              <div className="skillCards_webText">
                <div>
                  <span>
                    {a('frontend.local.about.skillCards.languageChinese')}
                  </span>
                </div>
                <div>
                  <span style={{ marginRight: '10px' }}>
                    {a('fronend.local.about.skillCards.languageEnglish')}
                  </span>
                  <span>(Toeic: 930)</span>
                </div>
                {/* <div>
                  <span>(Toeic: 930)</span>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <div style={{ paddingTop: '80px' }}>
            <span>{a('frontend.local.about.photography')}</span>
            <button
              className="ml-2"
              target="_blank"
              style={{ backgroundColor: 'rgb(238, 117, 69)', color: 'white' }}
              onClick={() =>
                alert('site is under construction, comeback later')
              }
            >
              here
            </button>
            <div style={{ paddingTop: '10px', paddingBottom: '100px' }}>
              <a
                style={{ marginRight: '10px' }}
                target="_blank"
                onClick={() =>
                  window.location.replace('https://github.com/0529bill')
                }
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a
                target="_blank"
                onClick={() =>
                  window.location.replace(
                    'https://www.instagram.com/bywater_photo/'
                  )
                }
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default About;
