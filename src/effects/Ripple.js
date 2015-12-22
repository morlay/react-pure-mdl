import './Ripple.scss';

import React, { Component, cloneElement, isValidElement } from 'react';
import { findDOMNode } from 'react-dom';
import { MaterialRipple } from './libs/MaterialRipple';

import RippleCssClasses from './constants/RippleCssClasses';

/**
 * Child should have static RIPPLE_CONTAINER
 * @exampleFile ./__examples__/Ripple.js
 */
class Ripple extends Component {
  componentDidMount() {
    const domNode = findDOMNode(this);
    this._materialInstance = new MaterialRipple(domNode);
  }

  componentWillUnmount() {
    this._materialInstance.mdlDowngrade();
  }

  concatRippleContainer(element) {
    return [
      <span
        key='ripple-container'
        className={element.type.RIPPLE_CONTAINER}
      >
        <span className={RippleCssClasses.ROOT}/>
      </span>
    ].concat(element.props.children);
  }

  render() {
    const children = this.props.children;
    if (isValidElement(children) && children.type.RIPPLE_CONTAINER) {
      return cloneElement(children, {
        children: this.concatRippleContainer(children)
      });
    }
    return children;
  }
}

export default Ripple;
