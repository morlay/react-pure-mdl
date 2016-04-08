import React, { Component, PropTypes, Children, cloneElement } from 'react';
import classNames from 'classnames';

import * as LayoutCssClasses from './constants/LayoutCssClasses';

class LayoutDrawer extends Component {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.node,
    /**
     * merge child
     */
    cloneChild: PropTypes.bool,
    children: PropTypes.node,
    open: PropTypes.bool
  };

  render() {
    const {
      open,
      cloneChild,
      className,
      children,
      ...otherProps
      } = this.props;

    const classes = classNames(className, LayoutCssClasses.DRAWER, {
      [LayoutCssClasses.IS_DRAWER_OPEN]: open
    });

    if (cloneChild) {
      return cloneElement(Children.only(children), {
        ...otherProps,
        className: classNames(classes)
      });
    }

    return (
      <div
        {...otherProps}
        className={classes}
      >
        {children}
      </div>
    );
  }
}

export default LayoutDrawer;
