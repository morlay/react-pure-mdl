import './Radio.scss';

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import connectToggle from './libs/connectToggle';
import Ripple from '../effects/Ripple';

import * as RadioCssClasses from './constants/RadioCssClasses';

/**
 * @exampleFile ./__examples__/Radio.js
 */
class Radio extends Component {
  static propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    focus: PropTypes.bool,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    ripple: PropTypes.bool,
    renderRippleContainer: PropTypes.func
  };

  static defaultProps = {
    renderRippleContainer: () => (
      <Ripple
        className={RadioCssClasses.RIPPLE_CONTAINER}
        center
      />
    )
  };

  render() {
    const {
      label, checked, disabled, focus, className,
      ripple, renderRippleContainer, ...inputProps
    } = this.props;

    const classes = classNames(className, RadioCssClasses.ROOT, {
      [RadioCssClasses.IS_UPGRADED]: true,
      [RadioCssClasses.IS_FOCUSED]: focus,
      [RadioCssClasses.IS_CHECKED]: checked,
      [RadioCssClasses.IS_DISABLED]: disabled
    });

    return (
      <label className={classes}>
        <input
          {...inputProps}
          disabled={disabled}
          checked={checked}
          type='radio'
          className={RadioCssClasses.RADIO_BTN}
        />
        {label && <span className={RadioCssClasses.LABEL}>{label}</span>}
        <span className={RadioCssClasses.RADIO_OUTER_CIRCLE} />
        <span className={RadioCssClasses.RADIO_INNER_CIRCLE} />
        {ripple && renderRippleContainer()}
      </label>
    );
  }
}

export {
  Radio
};

export default connectToggle(Radio);
