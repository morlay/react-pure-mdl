import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import Tab from './Tab';
import TabBar from './TabBar';
import Icon from '../icons/Icon';

import * as LayoutCssClasses from './constants/LayoutCssClasses';

const TAB_SCROLL_PIXELS = 100;

class HeaderTabs extends Component {
  static propTypes = {
    activeTab: PropTypes.number,
    children: PropTypes.oneOfType([
      Tab.PropType,
      PropTypes.arrayOf(Tab.PropType)
    ]),
    className: PropTypes.string,
    onChange: PropTypes.func,
    leftBtn: PropTypes.node,
    rightBtn: PropTypes.node,
    /**
     * need to config this on Layout
     */
    mode: PropTypes.oneOf(['standard', 'seamed', 'waterfall', 'scroll'])
  };

  static defaultProps = {
    leftBtn: <Icon name='chevron_left' />,
    rightBtn: <Icon name='chevron_right' />
  };

  state = {
    leftBtnActive: false,
    rightBtnActive: false
  };

  componentDidMount() {
    const $tabBar = findDOMNode(this.refs.tarBar);
    $tabBar.addEventListener('scroll', this.handleTabScroll.bind(this, $tabBar));
    this.handleTabScroll($tabBar);
  }

  handleTabScroll($tabBar) {
    this.setState({
      leftBtnActive: $tabBar.scrollLeft > 0,
      rightBtnActive: $tabBar.scrollLeft < ($tabBar.scrollWidth - $tabBar.offsetWidth)
    });
  }

  handleTabBtnClick(e, direction) {
    e.preventDefault();
    const $tabBar = findDOMNode(this.refs.tarBar);
    $tabBar.scrollLeft = $tabBar.scrollLeft + direction * TAB_SCROLL_PIXELS;
  }

  render() {
    const { leftBtnActive, rightBtnActive } = this.state;
    const { mode, className, children, leftBtn, rightBtn, ...otherProps } = this.props;
    const leftBtnClasses = classNames(
      LayoutCssClasses.TAB_BAR_BUTTON,
      LayoutCssClasses.TAB_BAR_LEFT_BUTTON, {
        [LayoutCssClasses.IS_ACTIVE]: leftBtnActive
      }
    );
    const rightBtnClasses = classNames(
      LayoutCssClasses.TAB_BAR_BUTTON,
      LayoutCssClasses.TAB_BAR_RIGHT_BUTTON, {
        [LayoutCssClasses.IS_ACTIVE]: rightBtnActive
      }
    );

    return (
      <div className={LayoutCssClasses.TAB_BAR_CONTAINER}>
        <div
          onClick={e => this.handleTabBtnClick(e, -1)}
          className={leftBtnClasses}
        >
          {leftBtn}
        </div>
        <TabBar
          ref='tarBar'
          cssPrefix={LayoutCssClasses.ROOT}
          className={classNames(className, {
            [LayoutCssClasses.CASTING_SHADOW]: mode === 'standard'
          })}
          {...otherProps}
        >
          {children}
        </TabBar>
        <div
          onClick={e => this.handleTabBtnClick(e, 1)}
          className={rightBtnClasses}
        >
          {rightBtn}
        </div>
      </div>
    );
  }
}

export default HeaderTabs;
