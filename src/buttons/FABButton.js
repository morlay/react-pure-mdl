import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Button from './Button';
import CssClasses from './constants/ButtonCssClasses';

/**
 * @exampleFile ./__examples__/FABButton.js
 */
const FABButton = (props) => {
  const { mini, className, children, ...otherProps } = props;

  const classes = classNames(className, CssClasses.FAB, {
    [CssClasses.MINI_FAB]: mini
  });

  return (
    <Button className={classes} {...otherProps}>{children}</Button>
  );
};

FABButton.propTypes = {
  className: PropTypes.string,
  mini: PropTypes.bool
};

export default FABButton;
