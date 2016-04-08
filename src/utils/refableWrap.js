import { Component } from 'react';

function refableWrap(statelessComponent) {
  return class extends Component {
    static displayName = statelessComponent.name;

    render() {
      return statelessComponent(this.props);
    }
  };
}

export default refableWrap;
