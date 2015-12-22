import './Badge.scss';

import React, { Component, PropTypes, Children, cloneElement } from 'react';
import classNames from 'classnames';
import BadgeCssClasses from './constants/BadgeCssClasses';

/**
 * Small status descriptors for UI elements.
 * @exampleFile ./__examples__/Badge.js
 */
class Badge extends Component {
  static propTypes = {
    className: PropTypes.string,
    noBackground: PropTypes.bool,
    text: PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string
    ])
  };

  render() {
    const { className, children, noBackground, text } = this.props;

    if (!Children.count(children)) {
      return null;
    }

    const element = typeof children === 'string'
      ? <span>{children}</span>
      : Children.only(children);

    if (!(typeof text === 'number' || typeof text === 'string')) {
      return element;
    }

    return cloneElement(element, {
      className: classNames(className, BadgeCssClasses.ROOT, {
        [BadgeCssClasses.NO_BACKGROUND]: noBackground
      }),
      'data-badge': text
    });
  }
}

export default Badge;
