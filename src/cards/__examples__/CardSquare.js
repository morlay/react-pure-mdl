import React from 'react';
import Card, { CardTitle, CardText, CardActions } from '../Card';

import Button from '../../buttons/Button';
import Shadow from '../../effects/Shadow';

const cardStyles = { width: '320px', height: '320px', margin: 'auto' };

const cardTitleStyles = {
  color: '#fff',
  background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'
};

const CardSquare = () => {
  return (
    <Shadow level={0}>
      <Card style={cardStyles}>
        <CardTitle
          expand
          style={cardTitleStyles}
        >
          Update
        </CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenan convallis.
        </CardText>
        <CardActions border>
          <Button colored>View Updates</Button>
        </CardActions>
      </Card>
    </Shadow>
  );
};

export default CardSquare;
