import './Swtich.scss';

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import connectToggle from './libs/connectToggle';

import * as SwitchCssClasses from './constants/SwitchCssClasses';

/**
 * @exampleFile ./__examples__/Switch.js
 */
class Switch extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool,
    focus: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
  };

  render() {
    const { className, label, checked, focus, disabled, ...inputProps } = this.props;

    const classes = classNames(className, SwitchCssClasses.ROOT, {
      [SwitchCssClasses.IS_UPGRADED]: true,
      [SwitchCssClasses.IS_FOCUSED]: focus,
      [SwitchCssClasses.IS_CHECKED]: checked,
      [SwitchCssClasses.IS_DISABLED]: disabled
    });

    return (
      <label className={classes}>
        <input
          {...inputProps}
          disabled={disabled}
          checked={checked}
          className={SwitchCssClasses.INPUT}
          type='checkbox'
        />
        {label && <span className={SwitchCssClasses.LABEL}>{label}</span>}
        <span className={SwitchCssClasses.TRACK}/>
        <span className={SwitchCssClasses.THUMB}>
          <span className={SwitchCssClasses.FOCUS_HELPER}/>
        </span>
      </label>
    );
  }
}

export {
  Switch
};
export default connectToggle(Switch);
