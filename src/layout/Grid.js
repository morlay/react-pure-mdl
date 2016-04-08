import './Grid.scss';

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import GridCssClasses from './constants/GridCssClasses';

import Cell from './Cell';

/**
 * @exampleFile ./__examples__/Grid.js
 */
const Grid = (props) => {
  const { noSpacing, className, children, ...otherProps } = props;

  const classes = classNames(GridCssClasses.ROOT, {
    [GridCssClasses.NO_SPACING]: noSpacing
  }, className);

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  noSpacing: PropTypes.bool
};

Grid.Cell = Cell;

export { Cell };
export default Grid;
