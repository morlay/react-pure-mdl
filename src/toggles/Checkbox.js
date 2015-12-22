import './Checkbox.scss';

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import connectToggle from './libs/connectToggle';

import * as CheckboxCssClasses from './constants/CheckboxCssClasses';

/**
 * @exampleFile ./__examples__/Checkbox.js
 */
class Checkbox extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    focus: PropTypes.bool,
    label: PropTypes.string
  };

  render() {
    const { className, label, disabled, checked, focus, ...inputProps } = this.props;

    const classes = classNames(className, CheckboxCssClasses.ROOT, {
      [CheckboxCssClasses.IS_UPGRADED]: true,
      [CheckboxCssClasses.IS_FOCUSED]: focus,
      [CheckboxCssClasses.IS_CHECKED]: checked,
      [CheckboxCssClasses.IS_DISABLED]: disabled
    });

    return (
      <label className={classes}>
        <input
          {...inputProps}
          disabled={disabled}
          checked={checked}
          className={CheckboxCssClasses.INPUT}
          type='checkbox'
        />
        {label && <span className={CheckboxCssClasses.LABEL}>{label}</span>}
        <span className={CheckboxCssClasses.FOCUS_HELPER}/>
        <span className={CheckboxCssClasses.BOX_OUTLINE}>
          <span className={CheckboxCssClasses.TICK_OUTLINE}/>
        </span>
      </label>
    );
  }
}

export {
  Checkbox
};
export default connectToggle(Checkbox);
