import React, { Component, PropTypes, Children, cloneElement } from 'react';
import classNames from 'classnames';
import LayoutTitle from './LayoutTitle';

import LayoutCssClasses from './constants/LayoutCssClasses';

class LayoutDrawer extends Component {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.node,
    /**
     * merge child
     */
    withChild: PropTypes.bool,
    open: PropTypes.bool
  };

  render() {
    const { withChild, className, open, title, children, ...otherProps } = this.props;

    const classes = classNames(className, LayoutCssClasses.DRAWER, {
      [LayoutCssClasses.IS_DRAWER_OPEN]: open
    });

    if (withChild) {
      return cloneElement(Children.only(children), {
        className: classNames(classes),
        ...otherProps
      });
    }

    return (
      <div
        className={classes}
        {...otherProps}
      >
        {title ? <LayoutTitle>title</LayoutTitle> : null}
        {children}
      </div>
    );
  }
}

export default LayoutDrawer;
