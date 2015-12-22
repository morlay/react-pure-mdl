import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

import MenuCssClasses from './constants/MenuCssClasses';

class MenuItem extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  render() {
    const { className, children, ...otherProps } = this.props;
    return (
      <li
        className={classNames(className, MenuCssClasses.ITEM)}
        {...otherProps}
      >
        {children}
      </li>
    );
  }
}

export default MenuItem;
