import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import * as TabsCssClasses from './constants/TabsCssClasses';

import Ripple from '../effects/Ripple';

class Tab extends Component {
  static propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
    cssPrefix: PropTypes.string,
    onTabClick: PropTypes.func,
    style: PropTypes.object,
    tabId: PropTypes.number,
    ripple: PropTypes.bool,
    renderRippleContainer: PropTypes.func
  };


  static defaultProps = {
    style: {},
    renderRippleContainer: () => (
      <Ripple
        className={TabsCssClasses.RIPPLE_CONTAINER}
      />
    )
  };

  _handleClick() {
    this.props.onTabClick(this.props.tabId);
  }

  render() {
    const {
      active, className, cssPrefix, ripple,
      renderRippleContainer, style, ...otherProps
    } = this.props;

    const classes = classNames({
      [`${cssPrefix}__tab`]: true,
      [TabsCssClasses.IS_ACTIVE]: active
    }, className);

    style.cursor = 'pointer';

    return (
      <a
        className={classes}
        onClick={(e) => this._handleClick(e)}
        style={style} {...otherProps}
      >
        {ripple && renderRippleContainer()}
        {this.props.children}
      </a>
    );
  }
}

Tab.PropType = (props, propName, componentName) => {
  const prop = props[propName];
  if (prop.type !== Tab) {
    return new Error(`${componentName} only accepts \`Tab\` as children.`);
  }
  return null;
};

export default Tab;
