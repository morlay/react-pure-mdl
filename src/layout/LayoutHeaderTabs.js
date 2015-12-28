import React, { PropTypes } from 'react';
import Tab from './Tab';
import TabBar from './TabBar';

import LayoutCssClasses from './constants/LayoutCssClasses';

const HeaderTabs = props => {
  const { className, children, ...otherProps } = props;

  return (
    <div className={LayoutCssClasses.TAB_BAR_CONTAINER}>
      <TabBar
        cssPrefix={LayoutCssClasses.ROOT}
        className={className}
        {...otherProps}
      >
        {children}
      </TabBar>
    </div>
  );
};

HeaderTabs.propTypes = {
  activeTab: PropTypes.number,
  children: PropTypes.arrayOf((props, propName, componentName) => {
    const prop = props[propName];
    if (prop.type !== Tab) {
      return new Error('`' + componentName + '` only accepts `Tab` as children.');
    }
  }),
  className: PropTypes.string,
  onChange: PropTypes.func,
  ripple: PropTypes.bool
};

export default HeaderTabs;
