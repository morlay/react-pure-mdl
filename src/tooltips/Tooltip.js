import './Tooltip.scss';

import React, { Children, Component, PropTypes, cloneElement } from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';

import * as TooltipCssClasses from './constants/TooltipCssClasses';

/**
 * @exampleFile ./__examples__/Tooltip.js
 */
class Tooltip extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string
    ]).isRequired,
    label: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string
    ]).isRequired,
    large: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.boundHandleMouseEnter = this.handleMouseEnter.bind(this);
    this.boundHandleMouseLeave = this.handleMouseLeave.bind(this);
  }

  componentDidMount() {
    const $container = findDOMNode(this);
    $container.addEventListener('mouseenter', this.boundHandleMouseEnter, false);
    $container.addEventListener('click', this.boundHandleMouseEnter, false);
    $container.addEventListener('touchstart', this.boundHandleMouseEnter, false);
    $container.addEventListener('blur', this.boundHandleMouseLeave, false);
    $container.addEventListener('mouseleave', this.boundHandleMouseLeave, false);
  }

  handleMouseEnter(evt) {
    evt.stopPropagation();
    const $popup = findDOMNode(this.refs.popup);
    const styles = evt.target.getBoundingClientRect();
    const left = styles.left + (styles.width / 2);
    const marginLeft = -1 * ($popup.offsetWidth / 2);

    if (left + marginLeft < 0) {
      $popup.style.left = 0;
      $popup.style.marginLeft = 0;
    } else {
      $popup.style.left = left;
      $popup.style.marginLeft = marginLeft;
    }

    $popup.style.top = styles.top + styles.height + 10;

    this.setState({
      active: true
    }, () => {
      global.addEventListener('scroll', this.boundHandleMouseLeave, false);
      global.addEventListener('touchmove', this.boundHandleMouseLeave, false);
    });
  }

  handleMouseLeave(evt) {
    evt.stopPropagation();
    this.setState({
      active: false
    }, () => {
      global.removeEventListener('scroll', this.boundHandleMouseLeave, false);
      global.removeEventListener('touchmove', this.boundHandleMouseLeave, false);
    });
  }

  render() {
    const { active } = this.state;
    const { label, large, children, ...otherProps } = this.props;

    let element;

    if (typeof children === 'string') {
      element = <span>{children}</span>;
    } else {
      element = Children.only(children);
    }

    const newLabel = (typeof label === 'string')
      ? <span>{label}</span>
      : label;

    const classes = classNames(TooltipCssClasses.ROOT, {
      [TooltipCssClasses.ROOT__LARGE]: large,
      [TooltipCssClasses.IS_ACTIVE]: active
    });

    return (
      <div
        style={{ display: 'inline-block' }}
        {...otherProps}
      >
        {element}
        {cloneElement(newLabel, {
          ref: 'popup',
          className: classes
        })}
      </div>
    );
  }
}
export default Tooltip;
