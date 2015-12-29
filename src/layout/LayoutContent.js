import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import * as LayoutCssClasses from './constants/LayoutCssClasses';

class LayoutContent extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  render() {
    const { children, className, ...otherProps } = this.props;

    const classes = classNames(className, LayoutCssClasses.CONTENT);

    return (
      <main
        {...otherProps}
        className={classes}
      >
        {children}
      </main>
    );
  }
}

export default LayoutContent;
