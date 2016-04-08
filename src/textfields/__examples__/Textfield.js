import React from 'react';

import Grid, { Cell } from '../../layout/Grid';
import Textfield from '../Textfield';

const TextfieldDemo = () => (
  <div>
    <Grid>
      <Cell col={6}>
        <Textfield
          onChange={(e) => console.log(e)}
          label='Text...'
        />
      </Cell>
      <Cell col={6}>
        <Textfield
          onChange={(e) => console.log(e)}
          pattern='-?[0-9]*(\.[0-9]+)?'
          error='Input is not a number!'
          label='Number...'
        />
      </Cell>
    </Grid>
    <Grid>
      <Cell col={6}>
        <Textfield
          floatingLabel
          onChange={(e) => console.log(e)}
          label='Text...'
        />
      </Cell>
      <Cell col={6}>
        <Textfield
          floatingLabel
          onChange={(e) => console.log(e)}
          pattern='-?[0-9]*(\.[0-9]+)?'
          error='Input is not a number!'
          label='Number...'
          required
        />
      </Cell>
    </Grid>
    <Grid>
      <Cell col={6}>
        <Textfield
          onChange={(e) => console.log(e)}
          label='Text lines...'
          rows={3}
        />
      </Cell>
      <Cell col={6}>
        <Textfield
          onChange={(e) => console.log(e)}
          label='Expandable Input'
          expandableIcon='search'
        />
      </Cell>
    </Grid>
  </div>
);

export default TextfieldDemo;
