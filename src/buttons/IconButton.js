import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Button from './Button';
import Icon from '../icons/Icon';
import CssClasses from './constants/ButtonCssClasses';

/**
 * @exampleFile ./__examples__/IconButton.js
 */
const IconButton = (props) => {
  const { className, mini, name, ...otherProps } = props;

  const classes = classNames(className, CssClasses.ICON, {
    [CssClasses.MINI_ICON]: mini
  });

  return (
    <Button className={classes} {...otherProps}>
      <Icon name={name}/>
    </Button>
  );
};

IconButton.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  mini: PropTypes.bool
};

export default IconButton;
