import './Textfield.scss';

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import IconButton from '../buttons/IconButton';

import * as TextfieldCssClasses from './constants/TextfieldCssClasses';


/**
 * @exampleFile ./__examples__/Textfield.js
 */
class Textfield extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    expandableIcon: PropTypes.string,
    fullWidth: PropTypes.bool,
    alignRight: PropTypes.bool,
    floatingLabel: PropTypes.bool,
    inputClassName: PropTypes.string,
    label: PropTypes.string.isRequired,
    maxRows: PropTypes.number,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    pattern: PropTypes.string,
    required: PropTypes.bool,
    rows: PropTypes.number,
    style: PropTypes.object,
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),

    /**
     * when this enable, will ignore input native validation
     */
    novalidate: PropTypes.bool
  };

  static defaultProps = {
    onChange: () => null,
    onFocus: () => null,
    onBlur: () => null
  };

  constructor(props) {
    super(props);
    this.state = {
      value: ('defaultValue' in props) ? props.defaultValue : props.value,
      focus: false,
      valid: true
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value
      });
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
      valid: this.props.novalidate || this.checkValidity(e.target)
    }, () => {
      this.props.onChange(e);
    });
  }

  handleFocus(e) {
    this.setState({
      focus: true
    }, () => {
      this.props.onFocus(e);
    });
  }

  handleBlur(e) {
    this.setState({
      focus: false
    }, () => {
      this.props.onBlur(e);
    });
  }

  hasValue(value) {
    return !!value && String(value).length > 0;
  }

  checkValidity($element) {
    if (this.props.required && !this.hasValue($element.value)) {
      return false;
    }
    if ($element.validity) {
      return $element.validity.valid;
    }
    return true;
  }

  render() {
    const { value, valid } = this.state;

    const {
      className,
      inputClassName,
      error,
      expandableIcon,
      fullWidth,
      alignRight,
      floatingLabel,
      label,
      maxRows,
      rows,
      disabled,
      novalidate,
      required,
      style, ...otherProps } = this.props;

    const hasRows = !!rows;
    const inputId = 'textfield-' + label.replace(/[^a-z0-9]/gi, '');
    const inputTag = hasRows || maxRows > 1 ? 'textarea' : 'input';

    const inputProps = {
      ...otherProps,
      className: classNames(TextfieldCssClasses.INPUT, inputClassName),
      id: inputId,
      key: inputId,
      rows,
      value: value || '',
      ref: 'input',
      onChange: (e) => this.handleChange(e),
      onFocus: (e) => this.handleFocus(e),
      onBlur: (e) => this.handleBlur(e)
    };

    const input = React.createElement(inputTag, inputProps);

    const inputAndLabelError = [
      input,
      <label
        key='label'
        className={TextfieldCssClasses.LABEL}
        htmlFor={inputId}
      >{label}</label>,
      error ? (
        <span
          key='error'
          className={TextfieldCssClasses.ERROR}
        >{error}</span>
      ) : null
    ];

    const isDirty = required || this.hasValue(value);
    const isInvalid = isDirty && (novalidate ? error && error.length > 0 : !valid);

    const containerClasses = classNames(TextfieldCssClasses.ROOT, {
      [TextfieldCssClasses.ROOT__FLOATING_LABEL]: floatingLabel,
      [TextfieldCssClasses.ROOT__FULL_WIDTH]: fullWidth,
      [TextfieldCssClasses.ROOT__ALIGN_RIGHT]: alignRight,
      [TextfieldCssClasses.ROOT__EXPANDABLE]: expandableIcon,
      [TextfieldCssClasses.IS_UPGRADED]: true,
      [TextfieldCssClasses.IS_DIRTY]: isDirty,
      [TextfieldCssClasses.IS_INVALID]: isInvalid,
      [TextfieldCssClasses.IS_DISABLED]: disabled,
      [TextfieldCssClasses.IS_FOCUSED]: this.state.focus
    }, className);

    const field = expandableIcon ?
      React.createElement('div', {
        className: TextfieldCssClasses.EXPANDABLE_HOLDER
      }, inputAndLabelError) :
      inputAndLabelError;

    return (
      <div
        className={containerClasses}
        style={style}
      >
        {expandableIcon ? (
          <IconButton
            name={expandableIcon}
            component='label'
            htmlFor={inputId}
          />
        ) : null}
        {field}
      </div>
    );
  }
}

export default Textfield;
