import { createElement, PropTypes } from 'react';
import classNames from 'classnames';

export default (displayName, defaultClassName, element = 'div') => {
  const fn = ({ className, children, ...otherProps }) =>
    createElement(element, {
      className: classNames(defaultClassName, className),
      ...otherProps
    }, children);

  fn.displayName = displayName;
  fn.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  return fn;
};
