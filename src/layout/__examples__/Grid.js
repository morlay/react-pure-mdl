import React from 'react';

import Grid, { Cell } from '../../layout/Grid';

const GridDemo = () => (
  <div>
    <Grid className='demo-grid-ruler'>
      <Cell col={1}>1</Cell>
      <Cell col={1}>1</Cell>
      <Cell col={1}>1</Cell>
      <Cell col={1}>1</Cell>
      <Cell col={1}>1</Cell>
      <Cell col={1}>1</Cell>
      <Cell col={1}>1</Cell>
      <Cell col={1}>1</Cell>
      <Cell col={1}>1</Cell>
      <Cell col={1}>1</Cell>
      <Cell col={1}>1</Cell>
      <Cell col={1}>1</Cell>
    </Grid>
    <Grid
      className='demo-grid-ruler'
      noSpacing
    >
      <Cell col={1}>1</Cell>
      <Cell col={1}>1</Cell>
      <Cell col={1}>1</Cell>
      <Cell col={1}>1</Cell>
      <Cell col={1}>1</Cell>
      <Cell col={1}>1</Cell>
      <Cell col={1}>1</Cell>
      <Cell col={1}>1</Cell>
      <Cell col={1}>1</Cell>
      <Cell col={1}>1</Cell>
      <Cell col={1}>1</Cell>
      <Cell col={1}>1</Cell>
    </Grid>
    <Grid className='demo-grid-ruler'>
      <Cell col={4}>4</Cell>
      <Cell col={4}>4</Cell>
      <Cell col={4}>4</Cell>
    </Grid>
    <Grid className='demo-grid-ruler'>
      <Cell col={6}>6</Cell>
      <Cell col={4}>4</Cell>
      <Cell col={2}>2</Cell>
    </Grid>
    <Grid className='demo-grid-ruler'>
      <Cell
        col={6}
        tablet={8}
      >
        6 (8 tablet)
      </Cell>
      <Cell
        col={4}
        tablet={6}
      >
        4 (6 tablet)
      </Cell>
      <Cell
        col={2}
        phone={4}
      >
        2 (4 phone)
      </Cell>
    </Grid>
  </div>
);

export default GridDemo;
