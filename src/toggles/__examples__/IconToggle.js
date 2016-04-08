import React from 'react';

import IconToggle from '../IconToggle';

import Grid, { Cell } from '../../layout/Grid';

const IconToggleDemo = () => (
  <Grid>
    <Cell col={12}>
      <IconToggle
        name='format_bold'
        defaultChecked
      />
      <IconToggle
        ripple
        name='format_italic'
      />
      <IconToggle
        name='format_bold'
        disabled
      />
    </Cell>
  </Grid>
);

export default IconToggleDemo;
