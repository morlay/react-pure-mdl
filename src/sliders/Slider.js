import './Slider.scss';

import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';

import SliderCssClasses from './constants/SliderCssClasses';

const isIE = window.navigator.msPointerEnabled;

/**
 * @exampleFile ./__examples__/Slider.js
 */
class Slider extends Component {

  static propTypes = {
    className: PropTypes.string,
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.number,
    defaultValue: PropTypes.number
  };

  static defaultProps = {
    onChange: () => null
  };

  constructor(props) {
    super(props);
    this.state = {
      value: typeof props.defaultValue === 'number' ? props.defaultValue : props.value
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        value: nextProps.value
      });
    }
  }

  handlerContainerMouseDown(evt) {
    if (evt.target !== findDOMNode(this)) {
      return;
    }

    evt.preventDefault();

    const $input = findDOMNode(this.refs.input);

    $input.dispatchEvent(new MouseEvent('mousedown', {
      target: evt.target,
      buttons: evt.buttons,
      clientX: evt.clientX,
      clientY: $input.getBoundingClientRect().y
    }));
  }

  handleMouseUp(evt) {
    evt.target.blur();
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    }, () => {
      this.props.onChange(e);
    });
  }

  render() {
    const { value } = this.state;
    const { className, min, max, ...otherProps } = this.props;

    const fraction = (value - min) / (max - min);

    const classes = classNames(className, SliderCssClasses.ROOT, {
      [SliderCssClasses.IS_LOWEST_VALUE]: fraction === 0,
      [SliderCssClasses.IS_UPGRADED]: true
    });

    const lowerStyle = {
      flex: fraction,
      WebkitFlex: fraction
    };

    const upperStyle = {
      flex: 1 - fraction,
      WebkitFlex: 1 - fraction
    };

    return (
      <div
        className={isIE ? SliderCssClasses.IE_CONTAINER : SliderCssClasses.SLIDER_CONTAINER}
        onMouseDown={e => this.handlerContainerMouseDown(e)}
      >
        <input
          {...otherProps}
          defaultValue={undefined}
          value={value}
          onChange={e => this.handleChange(e)}
          onMouseUp={e => this.handleMouseUp(e)}
          className={classes}
          type='range'
          ref='input'
        />
        {isIE ? null : (
          <div className={SliderCssClasses.BACKGROUND_FLEX}>
            <div
              className={SliderCssClasses.BACKGROUND_LOWER}
              style={lowerStyle}
            />
            <div
              className={SliderCssClasses.BACKGROUND_UPPER}
              style={upperStyle}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Slider;
