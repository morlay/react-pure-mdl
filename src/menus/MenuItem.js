import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

import MenuCssClasses from './constants/MenuCssClasses';

import Ripple from '../effects/Ripple';

class MenuItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    ripple: PropTypes.bool,
    renderRippleContainer: PropTypes.func
  };

  static defaultProps = {
    renderRippleContainer: () => (
      <Ripple
        className={MenuCssClasses.ITEM_RIPPLE_CONTAINER}
      />
    )
  };

  render() {
    const { className, children, ripple, renderRippleContainer, ...otherProps } = this.props;
    return (
      <li
        className={classNames(className, MenuCssClasses.ITEM)}
        {...otherProps}
      >
        {children}
        {ripple && renderRippleContainer()}
      </li>
    );
  }
}

export default MenuItem;
