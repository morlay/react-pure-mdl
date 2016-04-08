import React from 'react';
import Card, { CardTitle, CardText, CardActions, CardMenu } from '../Card';

import Button from '../../buttons/Button';
import IconButton from '../../buttons/IconButton';
import Shadow from '../../effects/Shadow';

const cardStyles = {
  width: '512px',
  margin: 'auto'
};

const cardTitleStyles = {
  color: '#fff',
  height: '176px',
  background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'
};

const cardMenuStyles = {
  color: '#fff'
};

const CardDemo = () => (
  <Shadow level={0}>
    <Card style={cardStyles}>
      <CardTitle style={cardTitleStyles}>
        Welcome
      </CardTitle>
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
      </CardText>
      <CardActions border>
        <Button colored>Get Started</Button>
      </CardActions>
      <CardMenu style={cardMenuStyles}>
        <IconButton name='share' />
      </CardMenu>
    </Card>
  </Shadow>
);

export default CardDemo;
