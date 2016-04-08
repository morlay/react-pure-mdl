import React from 'react';

import Radio from '../Radio';
import RadioGroup from '../RadioGroup';

import Grid, { Cell } from '../../layout/Grid';

const RadioDemo = () => (
  <Grid>
    <Cell>
      <RadioGroup
        name='group'
        onChange={value => console.log(value)}
      >
        <Radio
          value='Radio 1'
          label='Radio 1'
        />
        <Radio
          ripple
          value='Radio 1 with ripple'
          label='Radio 1 with ripple'
        />
        <Radio
          value='Radio 2'
          label='Radio 2'
        />
      </RadioGroup>
      <RadioGroup
        disabled
        defaultValue='Radio 1'
        name='group2'
        onChange={value => console.log(value)}
      >
        <Radio
          value='Radio 1'
          label='Radio 1'
        />
        <Radio
          value='Radio 2'
          label='Radio 2'
        />
      </RadioGroup>
    </Cell>
  </Grid>
);

export default RadioDemo;
