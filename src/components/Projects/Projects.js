import React, { useEffect } from 'react';
import Particle from '@Components/Widgets/Particle/Particle';
import Card from '@Components/Widgets/Cards/Cards';
import { Container, Col, Row } from 'react-bootstrap';
import i18n from '@Lang/i18n/i18n';
import countable from '@Assets/Projects/countable.png';
import flourish from '@Assets/Projects/flourish.png';
import BP from '@Assets/Projects/B&P.png';
import instaChat from '@Assets/Projects/instaChat.png';
import visacard from '@Assets/Projects/visacard.png';
import myPortfolio from '@Assets/Projects/myPortfolio.png';
import './index.css';

import { GApageView } from '@GoogleAnalytics/googleAnalytics';

function Project() {
  useEffect(() => GApageView('portfolio/Projects'), []);
  let a = i18n();
  let cardData = [
    {
      id: 6,
      img: myPortfolio,
      cardTitle: 'My portfolio',
      cardText: 'frontend.local.projects.cardDate.cardText.myPortfolio',
      cardLink: 'https://0529bill.github.io/portfolio/#/portfolio',
      cardFeatures: ['i18n without package', 'downloadable resume'],
    },
    {
      id: 2,
      img: instaChat,
      cardTitle: 'instaChat',
      cardText: 'frontend.local.projects.cardData.cardText.instaChat',
      cardLink: 'https://github.com/0529bill/chat-room',
      cardFeatures: ['socket.io', 'express', 'realtime chatroom'],
    },
    {
      id: 5,
      img: visacard,
      cardTitle: '3D visacard',
      cardText: 'frontend.local.projects.cardData.cardText.visacard',
      cardLink: 'https://github.com/0529bill/react-visacard',
      cardFeatures: [
        'Typescript',
        'form validation',
        'downlaodable jpg',
        '3D effect',
        'useReducer',
      ],
    },
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
      id: 3,
      img: BP,
      cardTitle: 'B&P',
      cardText: 'frontend.local.projects.cardData.cardText.B&P',
      cardLink:
        'https://0529bill.github.io/clothing_brand/#/clothing_brand/home',
      cardFeatures: ['shopping cart', 'useContext', 'react-router'],
    },
    {
      id: 4,
      img: flourish,
      cardTitle: 'flourish',
      cardText: 'frontend.local.projects.cardData.cardText.flourish',
      cardLink: 'https://0529bill.github.io/signin-practice/',
      cardFeatures: ['firebase_authenticaton', 'useContext', 'bootstrap'],
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
