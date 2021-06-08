import React from 'react';
import Particle from '@Components/Widgets/Particle/Particle';
import Card from '@Components/Widgets/Cards/Cards';
import { Container, Col, Row } from 'react-bootstrap';
import i18n from '@Lang/i18n/i18n';
import countable from '@Assets/Projects/countable.png';
import flourish from '@Assets/Projects/flourish.png';
import BP from '@Assets/Projects/B&P.png';
import './index.css';

function Project() {
  console.log('wewe');
  let a = i18n();
  let cardData = [
    {
      id: 1,
      img: countable,
      cardTitle: 'countable',
      cardText: 'frontend.local.projects.cardData.cardText.countable',
      cardLink: 'https://github.com/0529bill/countable',
      cardFeatures: [
        'react',
        'redux',
        'react hooks',
        'react-router',
        'redux-thunk',
        'bootstrap',
      ],
    },
    {
      id: 2,
      img: flourish,
      cardTitle: 'flourish',
      cardText: 'frontend.local.projects.cardData.cardText.flourish',
      cardLink: 'https://0529bill.github.io/signin-practice/',
      cardFeatures: ['firebase_authenticaton', 'useContext', 'bootstrap'],
    },
    {
      id: 3,
      img: BP,
      cardTitle: 'B&P',
      cardText: 'frontend.local.projects.cardData.cardText.B&P',
      cardLink: 'https://github.com/0529bill/clothing_brand',
      cardFeatures: ['shopping cart', 'useContext', 'react-router'],
    },
  ];
  return (
    <div style={{ backgroundColor: 'black' }}>
      <div
        className="project_particles"
        style={{
          position: 'fixed',
          backgroundColor: 'black',
          width: '100%',
          height: '100%',
        }}
      >
        <Particle style={{ position: 'fixed' }} />
      </div>
      <Container fluid className="projects_container">
        <div className="projects_container_title">
          {a('frontend.local.projects.header')}
        </div>
        <Container className="projects_container_main">
          <Row style={{ justifyContent: 'center', color: 'white' }}>
            {cardData.map((data) => (
              <Col md={4} style={{ padding: '30px' }} key={data.id}>
                <Card
                  img={data.img}
                  cardTitle={data.cardTitle}
                  cardText={data.cardText}
                  cardLink={data.cardLink}
                  cardFeatures={data.cardFeatures}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Project;
