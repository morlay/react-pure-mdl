import React from 'react';
import Card, { CardTitle, CardActions } from '../Card';

import Shadow from '../../effects/Shadow';

const cardStyles = {
  width: '256px',
  height: '256px',
  background: 'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover',
  margin: 'auto'
};

const extraStyles = {
  color: '#fff',
  fontSize: '14px',
  fontWeight: '500'
};

const cardActionStyles = {
  height: '52px',
  padding: '16px',
  background: 'rgba(0,0,0,0.2)'
};

const CardImage = () => {
  return (
    <Shadow level={0}>
      <Card
        shadow={0}
        style={cardStyles}
      >
        <CardTitle expand/>
        <CardActions style={cardActionStyles}>
          <span style={extraStyles}>
            Image.jpg
          </span>
        </CardActions>
      </Card>
    </Shadow>
  );
};

export default CardImage;
