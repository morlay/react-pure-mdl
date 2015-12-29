import React, { Component, PropTypes, cloneElement, Children } from 'react';
import classNames from 'classnames';
import { findDOMNode } from 'react-dom';
import LayoutHeaderRow from './LayoutHeaderRow';
import LayoutHeaderTabs from './LayoutHeaderTabs';

import * as LayoutCssClasses from './constants/LayoutCssClasses';

class LayoutHeader extends Component {
  static propTypes = {
    drawerBtn: PropTypes.node,
    onDrawerBtnClick: PropTypes.func,
    isCompact: PropTypes.bool,

    transparent: PropTypes.bool,

    className: PropTypes.string,
    /**
     * need to config this on Layout
     */
    mode: PropTypes.oneOf(['standard', 'seamed', 'waterfall', 'scroll']),

    title: React.PropTypes.node,
    children: React.PropTypes.node
  };

  static defaultProps = {
    isCompact: false,
    mode: 'standard'
  };

  constructor(props) {
    super(props);
    this.state = {
      isCompact: props.isCompact,
      isAnimating: false
    };
  }

  componentDidMount() {
    if (this.props.mode === 'waterfall') {
      findDOMNode(this).addEventListener('transitionend', this._handlerHeaderTransitionEnd.bind(this));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.mode === 'waterfall' || nextProps.mode === 'waterfall') {
      if (this.state.isAnimating) {
        return;
      }

      if (nextProps.isCompact !== this.state.isCompact) {
        this.setState({
          isCompact: nextProps.isCompact,
          isAnimating: true
        });
      }
    }
  }

  _handlerHeaderTransitionEnd() {
    this.setState({
      isAnimating: false
    });
  }

  cloneChildren(children) {
    return Children.map(children, (child) => {
      if (child.type === LayoutHeaderTabs) {
        return cloneElement(child, {
          mode: this.props.mode
        });
      }
      if (child.type === LayoutHeaderRow) {
        return child;
      }
      return (
        <LayoutHeaderRow title={this.props.title}>
          {child}
        </LayoutHeaderRow>
      );
    });
  }

  render() {
    const {
      isCompact,
      isAnimating
      } = this.state;
    const {
      drawerBtn,
      onDrawerBtnClick,
      className,
      transparent,
      mode,
      children,
      ...otherProps
      } = this.props;

    const classes = classNames(className, LayoutCssClasses.HEADER, {
      [`${LayoutCssClasses.HEADER}--${mode}`]: mode && mode !== 'standard',
      [LayoutCssClasses.HEADER__TRANSPARENT]: transparent,
      [LayoutCssClasses.CASTING_SHADOW]: mode === 'standard' || isCompact,
      [LayoutCssClasses.IS_COMPACT]: isCompact,
      [LayoutCssClasses.IS_ANIMATING]: isAnimating
    });

    return (
      <header
        className={classes}
        {...otherProps}
      >
        {drawerBtn ? cloneElement(drawerBtn, {
          className: LayoutCssClasses.DRAWER_BTN,
          onClick: onDrawerBtnClick
        }) : null}
        {this.cloneChildren(children)}
      </header>
    );
  }
}

export default LayoutHeader;
