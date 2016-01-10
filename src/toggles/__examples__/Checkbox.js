import React from 'react';

import Grid, { Cell } from '../../layout/Grid';
import Checkbox from '../Checkbox';

const CheckboxDemo = () => {
  return (
    <div>
      <Grid>
        <Cell col={4}>
          <Checkbox
            label='some check'
            defaultChecked
          />
        </Cell>
        <Cell col={4}>
          <Checkbox
            label='some check with ripple'
            ripple
            defaultChecked
          />
        </Cell>
        <Cell col={4}>
          <Checkbox label='some check'/>
        </Cell>
      </Grid>
      <Grid>
        <Cell col={6}>
          <Checkbox
            label='some check'
            disabled
          />
        </Cell>
      </Grid>
    </div>
  );
};

export default CheckboxDemo;
