import React, { PropTypes } from 'react';
import classNames from 'classnames';

import GridCssClasses from './constants/GridCssClasses';

const Cell = (props) => {
  const { align, className, children, col, phone, tablet, ...otherProps } = props;

  const hasPhoneCell = typeof phone !== 'undefined';
  const hasTabletCell = typeof tablet !== 'undefined';
  const hasAlignCell = typeof align !== 'undefined';

  const cellClass = GridCssClasses.CELL;

  const classes = classNames(cellClass, {
    [`${cellClass}--${col}-col`]: true,
    [`${cellClass}--${align}`]: hasAlignCell,
    [`${cellClass}--${phone}-col-phone`]: hasPhoneCell,
    [`${cellClass}--${tablet}-col-tablet`]: hasTabletCell,
    [`${cellClass}--hide-phone`]: hasPhoneCell && phone === 0,
    [`${cellClass}--hide-tablet`]: hasTabletCell && tablet === 0,
    [`${cellClass}--hide-desktop`]: hasAlignCell && col === 0
  }, className);

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
};

Cell.defaultProps = {
  col: 12
};

Cell.propTypes = {
  className: PropTypes.string,
  align: PropTypes.oneOf(['top', 'middle', 'bottom', 'stretch']),
  col: PropTypes.number.isRequired,
  offset: PropTypes.number,
  phone: PropTypes.number,
  tablet: PropTypes.number
};

export default Cell;
