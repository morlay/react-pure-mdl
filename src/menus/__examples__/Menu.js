import React from 'react';

import Grid, { Cell } from '../../layout/Grid';
import Menu, { MenuItem } from '../Menu';
import IconButton from '../../buttons/IconButton';

const MenuDemo = () => {
  return (
    <div>
      <Grid>
        <Cell col={6}>

          <Menu
            ripple
            target={<IconButton name='more_vert'/>}
          >
            <MenuItem>Some Action</MenuItem>
            <MenuItem>Another Action</MenuItem>
            <MenuItem disabled>Disabled Action</MenuItem>
            <MenuItem>Yet Another Action</MenuItem>
          </Menu>
        </Cell>
        <Cell col={6}>
          <Menu
            target={<IconButton name='more_vert'/>}
            align='right'
          >
            <MenuItem>Some Action</MenuItem>
            <MenuItem>Another Action</MenuItem>
            <MenuItem disabled>Disabled Action</MenuItem>
            <MenuItem>Yet Another Action</MenuItem>
          </Menu>
        </Cell>
      </Grid>
      <Grid>
        <Cell col={6}>
          <Menu
            target={<IconButton name='more_vert'/>}
            valign='top'
          >
            <MenuItem>Some Action</MenuItem>
            <MenuItem>Another Action</MenuItem>
            <MenuItem disabled>Disabled Action</MenuItem>
            <MenuItem>Yet Another Action</MenuItem>
          </Menu>
        </Cell>
        <Cell col={6}>
          <Menu
            target={<IconButton name='more_vert'/>}
            valign='top'
            align='right'
          >
            <MenuItem>Some Action</MenuItem>
            <MenuItem>Another Action</MenuItem>
            <MenuItem disabled>Disabled Action</MenuItem>
            <MenuItem>Yet Another Action</MenuItem>
          </Menu>
        </Cell>
      </Grid>
    </div>
  );
};

export default MenuDemo;
