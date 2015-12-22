import './Button.scss';

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import ButtonCssClasses from './constants/ButtonCssClasses';

/**
 * Variations on Material Design buttons.
 * @exampleFile ./__examples__/Button.js
 */
class Button extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    component: PropTypes.any,
    accent: PropTypes.bool,
    colored: PropTypes.bool,
    primary: PropTypes.bool,
    raised: PropTypes.bool
  };

  static RIPPLE_CONTAINER = ButtonCssClasses.RIPPLE_CONTAINER;

  render() {
    const { accent, className, colored,
      primary, raised, component, href,
      children, ...otherProps } = this.props;

    const buttonClasses = classNames(ButtonCssClasses.ROOT, {
      [ButtonCssClasses.RAISED]: raised,
      [ButtonCssClasses.COLORED]: colored,
      [ButtonCssClasses.PRIMARY]: primary,
      [ButtonCssClasses.ACCENT]: accent
    }, className);

    return React.createElement(component || (href ? 'a' : 'button'), {
      className: buttonClasses,
      href,
      ...otherProps
    }, children);
  }
}

export default Button;
