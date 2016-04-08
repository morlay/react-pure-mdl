import { cloneElement, createElement, Component, PropTypes, Children } from 'react';

class RadioGroup extends Component {
  static propTypes = {
    component: PropTypes.string,
    name: PropTypes.string,
    // return the selected value
    onChange: PropTypes.func,
    children: PropTypes.node,
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  };

  static defaultProps = {
    component: 'div',
    onChange: () => null
  };

  state = {
    value: ('defaultValue' in this.props) ? this.props.defaultValue : this.props.value
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value
      });
    }
  }

  handleChange(child, checked) {
    this.setState({
      value: checked ? child.props.value : this.state.value
    }, () => {
      this.props.onChange(this.state.value);
    });
  }

  render() {
    const { value } = this.state;

    const {
      name,
      children,
      component,
      ...otherProps
    } = this.props;

    const newChildren = Children.map(children, child => cloneElement(child, {
      ...otherProps,
      defaultValue: undefined,
      name,
      checked: child.props.value === value,
      onChange: (checked) => this.handleChange(child, checked)
    }));

    return createElement(component, {
      ...otherProps,
      onChange: undefined
    }, newChildren);
  }
}

export default RadioGroup;
