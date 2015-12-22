import './Tabs.scss';

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Tab from './Tab';
import TabBar from './TabBar';

import { MaterialTabs } from 'material-design-lite-cjs/src/tabs';

import connectMDL from '../utils/connectMDL';

import TabsCssClasses from './constants/TabsCssClasses';

const TabPropType = (props, propName, componentName) => {
  const prop = props[propName];
  if (prop.type !== Tab) {
    return new Error('`' + componentName + '` only accepts `Tab` as children.');
  }
};

class Tabs extends React.Component {
  static propTypes = {
    activeTab: PropTypes.number,
    children: PropTypes.oneOfType([
      TabPropType,
      PropTypes.arrayOf(TabBar)
    ]),
    className: PropTypes.string,
    tabBarProps: PropTypes.object,
    onChange: PropTypes.func
  };

  render() {
    const { tabBarProps, activeTab, className, onChange, children, ...otherProps } = this.props;

    const classes = classNames(TabsCssClasses.ROOT, className);

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

export default connectMDL(MaterialTabs)(Tabs);

export {
  Tabs,
  TabBar,
  Tab
};
