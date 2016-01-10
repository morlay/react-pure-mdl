import React from 'react';

import Switch from '../Switch';

import Grid, { Cell } from '../../layout/Grid';

const SwitchDemo = () => {
  return (
    <Grid>
      <Cell>
        <Switch
          label='Switch'
          defaultChecked
        />
        <Switch
          label='Switch'
        />
        <Switch
          ripple
          label='Switch'
        />
        <Switch
          label='Switch'
          disabled
        />
      </Cell>
    </Grid>
  );
};

export default SwitchDemo;
