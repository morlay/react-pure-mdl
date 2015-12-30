import './Layout.scss';

import React, { PropTypes, isValidElement, Children, cloneElement } from 'react';
import { findDOMNode } from 'react-dom';
import global from 'global';
import classNames from 'classnames';

import LayoutContent from './LayoutContent';
import LayoutTitle from './LayoutTitle';
import LayoutDrawer from './LayoutDrawer';
import LayoutHeader from './LayoutHeader';
import LayoutHeaderRow from './LayoutHeaderRow';
import LayoutHeaderTabs from './LayoutHeaderTabs';
import LayoutNavigation from './LayoutNavigation';
import LayoutSpacer from './LayoutSpacer';
import LayoutObfuscator from './LayoutObfuscator';

import Icon from '../icons/Icon';

import * as LayoutCssClasses from './constants/LayoutCssClasses';

const Constants = {
  MAX_WIDTH: '(max-width: 1024px)'
};

/**
 * @exampleFile ./__examples__/LayoutWaterfallHeader.js
 * @exampleFile ./__examples__/LayoutScrollHeader.js
 * @exampleFile ./__examples__/LayoutTransparentHeader.js
 * @exampleFile ./__examples__/LayoutFixed.js
 * @exampleFile ./__examples__/LayoutWithTabs.js
 * @exampleFile ./__examples__/LayoutFixedTabs.js
 */
class Layout extends React.Component {
  static propTypes = {
    mode: PropTypes.oneOf(['standard', 'seamed', 'waterfall', 'scroll']),
    drawerBtn: PropTypes.node,
    drawerOpen: PropTypes.bool,
    className: PropTypes.string,
    fixedDrawer: PropTypes.bool,
    fixedHeader: PropTypes.bool,
    fixedTabs: PropTypes.bool
  };

  static defaultProps = {
    mode: 'standard',
    drawerBtn: (
      <span>
        <Icon name='menu'/>
      </span>
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      hasDrawer: false,
      isSmallScreen: false,
      isHeaderCompact: false,
      isDrawerOpen: !!props.drawerOpen,
      isUpgraded: false
    };
    this.Constants = Constants;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        hasDrawer: this._hasDrawer(this.props.children),
        isUpgraded: true
      }, () => {
        this._screenSizeMediaQuery = global.matchMedia((this.Constants.MAX_WIDTH));
        this._boundScreenSizeHandler = this._screenSizeHandler.bind(this);
        this._screenSizeMediaQuery.addListener(this._boundScreenSizeHandler);
        this._screenSizeHandler();
        if (this.props.mode === 'waterfall') {
          this._toggleHeaderCompact(findDOMNode(this.refs.content));
        }
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.drawerOpen !== this.state.isDrawerOpen) {
      this.setState({
        isDrawerOpen: nextProps.drawerOpen
      });
    }
  }

  componentWillUnmount() {
    this._screenSizeMediaQuery.removeListener(this._boundScreenSizeHandler);
    this._screenSizeMediaQuery = null;
  }

  _hasDrawer(children) {
    return [].concat(children).reduce((hasDrawer, child) => {
      return hasDrawer || (isValidElement(child) && child.type === LayoutDrawer);
    }, false);
  }

  _screenSizeHandler() {
    if (this._screenSizeMediaQuery.matches) {
      this.setState({
        isSmallScreen: true
      });
    } else {
      this.setState({
        isSmallScreen: false
      }, () => {
        if (this.state.hasDrawer) {
          this.setState({
            isDrawerOpen: false
          });
        }
      });
    }
  }

  _toggleDrawer() {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen
    });
  }

  _toggleHeaderCompact($content) {
    this.setState({
      isHeaderCompact: $content.scrollTop > 0
    });
  }

  _cloneChildren(children) {
    return Children.map(children, (child) => {
      if (isValidElement(child)) {
        switch (child.type) {
          case LayoutDrawer:
            return cloneElement(child, {
              open: this.state.isDrawerOpen
            });
          case LayoutHeader:
            return cloneElement(child, {
              mode: this.props.mode,
              isCompact: this.state.isHeaderCompact,
              drawerBtn: this.state.hasDrawer ? this.props.drawerBtn : undefined,
              onDrawerBtnClick: this._toggleDrawer.bind(this)
            });
          case LayoutContent:
            if (this.props.mode === 'waterfall') {
              return cloneElement(child, {
                ref: 'content',
                onScroll: (e) => this._toggleHeaderCompact(e.target)
              });
            }
            return child;
          default:
            return child;
        }
      }
      return child;
    });
  }

  render() {
    const { mode, className, fixedDrawer, fixedHeader, fixedTabs, ...otherProps } = this.props;
    const state = this.state;

    const classes = classNames(className, LayoutCssClasses.ROOT, {
      [LayoutCssClasses.ROOT__FIXED_HEADER]: fixedHeader,
      [LayoutCssClasses.ROOT__FIXED_DRAWER]: fixedDrawer,
      [LayoutCssClasses.ROOT__FIXED_TABS]: fixedTabs,
      [LayoutCssClasses.ROOT__HAS_DRAWER]: state.hasDrawer,
      [LayoutCssClasses.ROOT__IS_SMALL_SCREEN]: state.isSmallScreen,
      [LayoutCssClasses.IS_UPGRADED]: state.isUpgraded
    });

    const containerClasses = classNames(LayoutCssClasses.CONTAINER, {
      [LayoutCssClasses.ROOT__HAS_SCROLLING_HEADER]: mode === 'scroll'
    });

    return (
      <div className={containerClasses}>
        <div
          className={classes}
          {...otherProps}
        >
          {this._cloneChildren(this.props.children)}
          {state.hasDrawer ? (
            <LayoutObfuscator
              open={state.isDrawerOpen}
              onClick={this._toggleDrawer.bind(this)}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Layout;

export {
  LayoutContent,
  LayoutTitle,
  LayoutDrawer,
  LayoutHeader,
  LayoutHeaderRow,
  LayoutHeaderTabs,
  LayoutNavigation,
  LayoutSpacer
};

Object.assign(Layout, {
  LayoutContent,
  LayoutTitle,
  LayoutDrawer,
  LayoutHeader,
  LayoutHeaderRow,
  LayoutHeaderTabs,
  LayoutNavigation,
  LayoutSpacer
});
