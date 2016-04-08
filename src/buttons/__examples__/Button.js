import React from 'react';

import Button from '../Button';
import Grid, { Cell } from '../../layout/Grid';

const BadgeDemo = () => (
  <Grid>
    <Cell col={12}>
      <Button raised>Button</Button>
      <Button
        raised
        ripple
      >
        Button with Ripple
      </Button>
      <Button
        raised
        disabled
      >
        Button
      </Button>
    </Cell>

    <Cell col={12}>
      <Button
        raised
        colored
      >
        Button
      </Button>
      <Button
        raised
        colored
        ripple
      >
        Button with Ripple
      </Button>
      <Button
        raised
        accent
      >
        Button
      </Button>
    </Cell>

    <Cell col={12}>
      <Button>
        Button
      </Button>

      <Button
        ripple
      >
        Button with Ripple
      </Button>
      <Button disabled>Button</Button>
    </Cell>

    <Cell col={12}>
      <Button primary>Button</Button>

      <Button accent>Button</Button>
    </Cell>
  </Grid>
);

export default BadgeDemo;
