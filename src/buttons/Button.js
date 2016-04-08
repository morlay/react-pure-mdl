import './Button.scss';

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import Ripple from '../effects/Ripple';

import ButtonCssClasses from './constants/ButtonCssClasses';

/**
 * Variations on Material Design buttons.
 * @exampleFile ./__examples__/Button.js
 */
class Button extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node,
    accent: PropTypes.bool,
    colored: PropTypes.bool,
    primary: PropTypes.bool,
    raised: PropTypes.bool,
    ripple: PropTypes.bool,
    renderRippleContainer: PropTypes.func
  };

  static defaultProps = {
    renderRippleContainer: () => <Ripple className={ButtonCssClasses.RIPPLE_CONTAINER} />
  };

  render() {
    const {
      accent, className, colored,
      primary, raised, href,
      children, ripple, renderRippleContainer, ...otherProps
    } = this.props;

    const buttonClasses = classNames(ButtonCssClasses.ROOT, {
      [ButtonCssClasses.RAISED]: raised,
      [ButtonCssClasses.COLORED]: colored,
      [ButtonCssClasses.PRIMARY]: primary,
      [ButtonCssClasses.ACCENT]: accent
    }, className);

    const Comp = href ? 'a' : 'button';

    return (
      <Comp
        className={buttonClasses}
        href={href}
        {...otherProps}
      >
        {ripple ? renderRippleContainer() : null}
        {children}
      </Comp>
    );
  }
}

export default Button;
