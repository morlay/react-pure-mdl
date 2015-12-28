import './Tabs.scss';

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Tab from './Tab';
import TabBar from './TabBar';

import TabsCssClasses from './constants/TabsCssClasses';

const TabPropType = (props, propName, componentName) => {
  const prop = props[propName];
  if (prop.type !== Tab) {
    return new Error('`' + componentName + '` only accepts `Tab` as children.');
  }
};

/**
 * @exampleFile ./__examples__/Tabs.js
 */
class Tabs extends React.Component {
  static propTypes = {
    activeTab: PropTypes.number,
    children: PropTypes.oneOfType([
      TabPropType,
      PropTypes.arrayOf(TabPropType)
    ]),
    className: PropTypes.string,
    tabBarProps: PropTypes.object,
    onChange: PropTypes.func
  };

  render() {
    const { tabBarProps, activeTab, className, onChange, children, ...otherProps } = this.props;

    const classes = classNames(TabsCssClasses.ROOT, className, {
      [TabsCssClasses.IS_UPGRADED]: true
    });

    return (
      <div className={classes} {...otherProps}>
        <TabBar
          cssPrefix={TabsCssClasses.ROOT}
          activeTab={activeTab}
          onChange={onChange}
          {...tabBarProps}
        >
          {children}
        </TabBar>
      </div>
    );
  }
}

export {
  TabBar,
  Tab
};

Object.assign(Tabs, {
  TabBar,
  Tab
});

export default Tabs;
