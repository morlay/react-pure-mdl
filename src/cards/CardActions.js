import React, { PropTypes } from 'react';
import classNames from 'classnames';

import CardCssClasses from './constants/CardCssClasses';

const CardActions = (props) => {
  const { className, border, children, ...otherProps } = props;

  const classes = classNames('mdl-card__actions', {
    [CardCssClasses.BORDER]: border
  }, className);

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
};

CardActions.propTypes = {
  border: PropTypes.bool,
  className: PropTypes.string
};

export default CardActions;
