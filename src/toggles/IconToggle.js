import './IconToggle.scss';

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Icon from '../icons/Icon';

import connectToggle from './libs/connectToggle';

import * as IconToggleCssClasses from './constants/IconToggleCssClasses';

/**
 * @exampleFile ./__examples__/IconToggle.js
 */
class IconToggle extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    focus: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired
  };

  render() {
    const { className, name, disabled, checked, focus, ...inputProps } = this.props;

    const classes = classNames(className, IconToggleCssClasses.ROOT, {
      [IconToggleCssClasses.IS_UPGRADED]: true,
      [IconToggleCssClasses.IS_FOCUSED]: focus,
      [IconToggleCssClasses.IS_CHECKED]: checked,
      [IconToggleCssClasses.IS_DISABLED]: disabled
    });

    return (
      <label className={classes}>
        <input
          {...inputProps}
          className={IconToggleCssClasses.INPUT}
          disabled={disabled}
          checked={checked}
          type='checkbox'
        />
        <Icon
          className={IconToggleCssClasses.LABEL}
          name={name}
        />
      </label>
    );
  }
}

export {
  IconToggle
};
export default connectToggle(IconToggle);
