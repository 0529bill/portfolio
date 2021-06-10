import React from 'react';
import { Card, Button } from 'react-bootstrap';
import List from '@Components/Widgets/List/List';
import i18n from '@Lang/i18n/i18n';
import './index.css';

function Cards({ img, cardTitle, cardText, cardLink, cardFeatures }) {
  let a = i18n();

  return (
    <div>
      <Card className="card_main">
        <Card.Img
          className="card_img"
          variant="top"
          src={img}
          style={{ maxHeight: '232px', objectFit: 'scale-down' }}
        />
        <Card.Body>
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text>{a(cardText)}</Card.Text>
          <Card.Title>{a('frontend.local.projects.cardFeatures')}</Card.Title>
          <Card.Text>
            {cardFeatures
              ? cardFeatures.map((data, id) => <List data={data} id={id} />)
              : null}
          </Card.Text>
          <Button className="card_button" onClick={() => window.open(cardLink)}>
            {a('frontend.local.projects.checkoutmyproject')}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
