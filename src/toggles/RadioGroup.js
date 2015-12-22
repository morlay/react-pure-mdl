import { cloneElement, createElement, Component, PropTypes, Children } from 'react';

class RadioGroup extends Component {
  static propTypes = {
    component: PropTypes.string,
    name: PropTypes.string,
    // return the selected value
    onChange: PropTypes.func,
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

  constructor(props) {
    super(props);
    this.state = {
      value: ('defaultValue' in props) ? props.defaultValue : props.value
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
      value: e.target.value
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

    const newChildren = Children.map(children, child => {
      return cloneElement(child, {
        ...otherProps,
        name,
        checked: child.props.value === value,
        onChange: (e) => this.handleChange(e, child)
      });
    });

    return createElement(component, otherProps, newChildren);
  }
}

export default RadioGroup;
