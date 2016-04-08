import React, { PropTypes } from 'react';
import classNames from 'classnames';
import cloneChildren from '../utils/cloneChildren';
import Spacer from './LayoutSpacer';
import * as LayoutCssClasses from './constants/LayoutCssClasses';

const LayoutNavigation = ({ className, children, ...otherProps }) => {
  const classes = classNames(LayoutCssClasses.NAVIGATION, className);

  return (
    <nav className={classes} {...otherProps}>
      {cloneChildren(children, (child) => ({
        className: classNames({
          [LayoutCssClasses.NAVIGATION_LINK]: child.type !== Spacer
        }, child.props.className)
      }))}
    </nav>
  );
};

LayoutNavigation.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default LayoutNavigation;
