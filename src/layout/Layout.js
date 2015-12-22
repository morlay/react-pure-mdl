import './Layout.scss';

import React, { PropTypes, isValidElement, Children, cloneElement } from 'react';
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

import LayoutCssClasses from './constants/LayoutCssClasses';

const Constants = {
  MAX_WIDTH: '(max-width: 1024px)'
};
/**
 * @exampleFile ./__examples__/LayoutWaterfallHeader.js
 * @exampleFile ./__examples__/LayoutTransparentHeader.js
 * @exampleFile ./__examples__/LayoutFixed.js
 */
class Layout extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    fixedDrawer: PropTypes.bool,
    fixedHeader: PropTypes.bool,
    fixedTabs: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      hasDrawer: false,
      isSmallScreen: false,
      isDrawerOpen: false,
      isUpgraded: false
    };
    this.Constants = Constants;
  }

  componentDidMount() {
    this.setState({
      hasDrawer: this._hasDrawer(this.props.children),
      isUpgraded: true
    }, () => {
      this._screenSizeMediaQuery = global.matchMedia((this.Constants.MAX_WIDTH));
      this._screenSizeMediaQuery.addListener(this._screenSizeHandler.bind(this));
      this._screenSizeHandler();
    });
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
      });
      if (this.state.hasDrawer) {
        this.setState({
          isDrawerOpen: false
        });
      }
    }
  }

  _toggleDrawer() {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen
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
              withDrawerBtn: this.state.hasDrawer,
              onDrawerBtnClick: this._toggleDrawer.bind(this)
            });
          default:
            return child;
        }
      }
      return child;
    });
  }

  render() {
    const { className, fixedDrawer, fixedHeader, fixedTabs, ...otherProps } = this.props;
    const state = this.state;

    const classes = classNames(className, LayoutCssClasses.ROOT, {
      [LayoutCssClasses.FIXED_HEADER]: fixedHeader,
      [LayoutCssClasses.FIXED_DRAWER]: fixedDrawer,
      [LayoutCssClasses.FIXED_TABS]: fixedTabs,
      [LayoutCssClasses.HAS_DRAWER]: state.hasDrawer,
      [LayoutCssClasses.IS_SMALL_SCREEN]: state.isSmallScreen,
      [LayoutCssClasses.IS_UPGRADED]: state.isUpgraded
    });

    return (
      <div className={LayoutCssClasses.CONTAINER}>
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
