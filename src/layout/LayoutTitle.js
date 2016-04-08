import { createElement, PropTypes } from 'react';
import * as LayoutCssClasses from './constants/LayoutCssClasses';

const LayoutTitle = ({ component, children, ...otherProps }) =>
  createElement(component || 'h1', {
    ...otherProps,
    className: LayoutCssClasses.TITLE
  }, children);

LayoutTitle.propTypes = {
  component: PropTypes.string,
  children: PropTypes.node
};

export default LayoutTitle;
