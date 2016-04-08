import React, { PropTypes } from 'react';
import classNames from 'classnames';

import CardCssClasses from './constants/CardCssClasses';

const CardTitle = ({ className, children, expand, ...otherProps }) => {
  const classes = classNames(CardCssClasses.TITLE, {
    [CardCssClasses.EXPAND]: expand
  }, className);

  const title = typeof children === 'string'
    ? React.createElement('h2', { className: CardCssClasses.TITLE_TEXT }, children)
    : children;

  return (
    <div className={classes} {...otherProps}>
      {title}
    </div>
  );
};

CardTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  expand: PropTypes.bool
};

export default CardTitle;
