import React, { PropTypes, Component } from 'react';
import { findDOMNode } from 'react-dom';

const TINY_TIMEOUT = 0.001;

export default function connectToggle(TargetComponent) {
  return class Toggle extends Component {
    static propTypes = {
      checked: PropTypes.bool,
      defaultChecked: PropTypes.bool,

      onChange: PropTypes.func,
      onFocus: PropTypes.func,
      onBlur: PropTypes.func
    };

    static defaultProps = {
      onChange: () => null,
      onFocus: () => null,
      onBlur: () => null
    };

    state = {
      checked: !!(('defaultChecked' in this.props)
        ? this.props.defaultChecked : this.props.checked),
      focus: false
    };

    componentWillReceiveProps(nextProps) {
      if ('checked' in nextProps && nextProps.checked !== this.state.checked) {
        console.log('componentWillReceiveProps', nextProps.checked)
        this.setState({
          checked: nextProps.checked
        });
      }
    }

    componentDidMount() {
      this._$element = findDOMNode(this);
      this._$element.addEventListener('mouseup', this.handleLabelMouseUp.bind(this));
    }

    componentWillUnMount() {
      this._$element.removeEventListener('mouseup', this.handleLabelMouseUp.bind(this));
      delete this._$element;
    }

    handleLabelMouseUp() {
      global.setTimeout(() => {
        // todo find a better way to get the child input
        this._$element.querySelector('input').blur();
      }, TINY_TIMEOUT);
    }

    handleFocus = () => {
      this.setState({
        focus: true
      }, () => {
        this.props.onFocus();
      });
    };

    handleChange = () => {
      this.setState({
        checked: !this.state.checked
      }, () => {
        this.props.onChange(this.state.checked);
      });
    };

    handleBlur = () => {
      this.setState({
        focus: false
      }, () => {
        this.props.onBlur();
      });
    };

    render() {
      return (
        <TargetComponent
          {...this.props}
          defaultChecked={undefined}
          checked={this.state.checked}
          focus={this.state.focus}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      );
    }
  };
}
