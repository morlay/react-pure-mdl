import './Ripple.scss';

import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import { findDOMNode } from 'react-dom';

import RippleCssClasses from './constants/RippleCssClasses';

const Constant = {
  INITIAL_SCALE: 'scale(0.0001, 0.0001)',
  INITIAL_SIZE: '1px',
  INITIAL_OPACITY: '0.4',
  FINAL_OPACITY: '0',
  FINAL_SCALE: ''
};

class Ripple extends Component {
  static propTypes = {
    className: PropTypes.string,
    center: PropTypes.bool
  };

  static defaultProps = {
    ignoreEvents: false,
    center: false
  };

  componentDidMount() {
    this.init();
  }

  componentWillUnmount() {
    this.mdlDowngrade();
  }

  getFrameCount() {
    return this.frameCount;
  }

  setFrameCount(fC) {
    this.frameCount = fC;
  }

  setRippleXY(newX, newY) {
    this.x = newX;
    this.y = newY;
  }

  setRippleStyles(start) {
    if (this.ripple_element !== null) {
      let transformString;
      let scale;
      let offset = 'translate(' + this.x + 'px, ' + this.y + 'px)';

      if (start) {
        scale = Constant.INITIAL_SCALE;
      } else {
        scale = Constant.FINAL_SCALE;
        if (this.props.center) {
          offset = 'translate(' + this.boundWidth / 2 + 'px, ' + this.boundHeight / 2 + 'px)';
        }
      }

      transformString = 'translate(-50%, -50%) ' + offset + scale;

      this.ripple_element.style.webkitTransform = transformString;
      this.ripple_element.style.msTransform = transformString;
      this.ripple_element.style.transform = transformString;

      if (start) {
        this.ripple_element.classList.remove(RippleCssClasses.IS_ANIMATING);
      } else {
        this.ripple_element.classList.add(RippleCssClasses.IS_ANIMATING);
      }
    }
  }

  handleDown(event) {
    if (!this.ripple_element.style.width && !this.ripple_element.style.height) {
      const rect = this.element.getBoundingClientRect();
      this.boundHeight = rect.height;
      this.boundWidth = rect.width;
      this.rippleSize = Math.sqrt(rect.width * rect.width + rect.height * rect.height) * 2 + 2;
      Object.assign(this.ripple_element.style, {
        width: this.rippleSize + 'px',
        height: this.rippleSize + 'px'
      });
    }

    this.ripple_element.classList.add(RippleCssClasses.IS_VISIBLE);

    if (event.type === 'mousedown' && this.ignoringMouseDown) {
      this.ignoringMouseDown = false;
    } else {
      if (event.type === 'touchstart') {
        this.ignoringMouseDown = true;
      }
      const frameCount = this.getFrameCount();
      if (frameCount > 0) {
        return;
      }
      this.setFrameCount(1);
      const bound = event.currentTarget.getBoundingClientRect();
      let x;
      let y;
      // Check if we are handling a keyboard click.
      if (event.clientX === 0 && event.clientY === 0) {
        x = Math.round(bound.width / 2);
        y = Math.round(bound.height / 2);
      } else {
        const clientX = event.clientX ? event.clientX : event.touches[0].clientX;
        const clientY = event.clientY ? event.clientY : event.touches[0].clientY;
        x = Math.round(clientX - bound.left);
        y = Math.round(clientY - bound.top);
      }
      this.setRippleXY(x, y);
      this.setRippleStyles(true);
      window.requestAnimationFrame(this.animFrameHandler.bind(this));
    }
  }

  handleUp(event) {
    if (event && event.detail !== 2) {
      this.ripple_element.classList.remove(RippleCssClasses.IS_VISIBLE);
    }
    window.setTimeout(() => {
      this.ripple_element.classList.remove(RippleCssClasses.IS_VISIBLE);
    }, 0);
  }

  animFrameHandler() {
    if (this.frameCount-- > 0) {
      window.requestAnimationFrame(this.animFrameHandler.bind(this));
    } else {
      this.setRippleStyles(false);
    }
  }

  init() {
    this.element = findDOMNode(this);
    this.ripple_element = findDOMNode(this.refs.ripple);
    this.rippleSize = 0;
    this.x = 0;
    this.y = 0;

    this.setFrameCount(0);

    // Touch start produces a compat mouse down event, which would cause a
    // second ripples. To avoid that, we use this property to ignore the first
    // mouse down after a touch start.
    this.ignoringMouseDown = false;

    this.boundDownHandler = this.handleDown.bind(this);
    this.element.addEventListener('mousedown', this.boundDownHandler);
    this.element.addEventListener('touchstart', this.boundDownHandler);

    this.boundUpHandler = this.handleUp.bind(this);
    this.element.addEventListener('mouseup', this.boundUpHandler);
    this.element.addEventListener('mouseleave', this.boundUpHandler);
    this.element.addEventListener('touchend', this.boundUpHandler);
    this.element.addEventListener('blur', this.boundUpHandler);
  }

  mdlDowngrade() {
    this.element.removeEventListener('mousedown', this.boundDownHandler);
    this.element.removeEventListener('touchstart', this.boundDownHandler);

    this.element.removeEventListener('mouseup', this.boundUpHandler);
    this.element.removeEventListener('mouseleave', this.boundUpHandler);
    this.element.removeEventListener('touchend', this.boundUpHandler);
    this.element.removeEventListener('blur', this.boundUpHandler);
  }

  render() {
    const classes = classNames(this.props.className, {
      [RippleCssClasses.RIPPLE_CENTER]: this.props.center
    });

    return (
      <span
        className={classes}
      >
        <span
          ref='ripple'
          className={RippleCssClasses.ROOT}
        />
      </span>
    );
  }
}

export default Ripple;
