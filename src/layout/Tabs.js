import './Tabs.scss';

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Tab from './Tab';
import TabBar from './TabBar';

import * as TabsCssClasses from './constants/TabsCssClasses';

/**
 * @exampleFile ./__examples__/Tabs.js
 */
const Tabs = ({
  tabBarProps, ripple, activeTab,
  className, onChange, children, ...otherProps
}) => {
  const classes = classNames(TabsCssClasses.ROOT, className, {
    [TabsCssClasses.IS_UPGRADED]: true
  });

  return (
    <div className={classes} {...otherProps}>
      <TabBar
        ripple={ripple}
        cssPrefix={TabsCssClasses.ROOT}
        activeTab={activeTab}
        onChange={onChange}
        {...tabBarProps}
      >
        {children}
      </TabBar>
    </div>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.number,
  children: PropTypes.oneOfType([
    Tab.PropType,
    PropTypes.arrayOf(Tab.PropType)
  ]),
  ripple: PropTypes.bool,
  className: PropTypes.string,
  tabBarProps: PropTypes.object,
  onChange: PropTypes.func
};

export {
  TabBar,
  Tab
};

Object.assign(Tabs, {
  TabBar,
  Tab
});

export default Tabs;
