import React from 'react';
import Card, { CardTitle, CardActions } from '../Card';

import Button from '../../buttons/Button';
import Shadow from '../../effects/Shadow';
import Icon from '../../icons/Icon';
import { LayoutSpacer } from '../../layout/Layout';

const cardStyles = {
  width: '256px',
  height: '256px',
  background: '#3E4EB8'
};

const cardActionStyles = {
  borderColor: 'rgba(255, 255, 255, 0.2)',
  display: 'flex',
  boxSizing: 'border-box',
  alignItems: 'center',
  color: '#fff'
};

const CardEvent = () => (
  <Shadow level={0}>
    <Card style={cardStyles}>
      <CardTitle
        expand
        style={{ alignItems: 'flex-start', color: '#fff' }}
      >
        <h4 style={{ marginTop: 0 }}>
          Featured event:
          <br />
          May 24, 2016
          <br />
          7-11pm
        </h4>
      </CardTitle>
      <CardActions
        border
        style={cardActionStyles}
      >
        <Button
          colored
          style={{ color: '#fff' }}
        >
          Add to Calendar
        </Button>
        <LayoutSpacer />
        <Icon name='event' />
      </CardActions>
    </Card>
  </Shadow>
);

export default CardEvent;
