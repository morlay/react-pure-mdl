import React, { PropTypes } from 'react';
import LayoutCssClasses from './constants/LayoutCssClasses';

class LayoutTitle extends React.Component {
  render() {
    const props = this.props;
    const component = props.component ? props.component : 'h1';

    return React.createElement(component, {
      ...props,
      className: LayoutCssClasses.TITLE
    }, props.children);
  }
}

LayoutTitle.propTypes = {
  component: PropTypes.string
};

export default LayoutTitle;
