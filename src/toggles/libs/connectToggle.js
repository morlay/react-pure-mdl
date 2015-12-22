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

    constructor(props) {
      super(props);
      this.state = {
        checked: ('defaultChecked' in props) ? props.defaultChecked : props.checked,
        focus: false
      };
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.checked !== this.state.checked) {
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

    handleFocus(e) {
      this.setState({
        focus: true
      }, () => {
        this.props.onFocus(e);
      });
    }

    handleChange(e) {
      this.setState({
        checked: !this.state.checked
      }, () => {
        this.props.onChange(e);
      });
    }

    handleBlur(e) {
      this.setState({
        focus: false
      }, () => {
        this.props.onBlur(e);
      });
    }

    render() {
      return (
        <TargetComponent
          {...this.props}
          checked={this.state.checked}
          focus={this.state.focus}
          onChange={(e) => this.handleChange(e)}
          onFocus={(e) => this.handleFocus(e)}
          onBlur={(e) => this.handleBlur(e)}
        />
      );
    }
  };
}
