import React, { PropTypes } from 'react';
import classNames from 'classnames';
import cloneChildren from '../utils/cloneChildren';
import Spacer from './LayoutSpacer';
import LayoutCssClasses from './constants/LayoutCssClasses';

const Navigation = props => {
  const { className, children, ...otherProps } = props;

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
Navigation.propTypes = {
  className: PropTypes.string
};

export default Navigation;
