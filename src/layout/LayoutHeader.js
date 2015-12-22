import React from 'react';
import classNames from 'classnames';
import LayoutHeaderRow from './LayoutHeaderRow';
import LayoutHeaderTabs from './LayoutHeaderTabs';
import Icon from '../icons/Icon';

import LayoutCssClasses from './constants/LayoutCssClasses';

const LayoutHeader = props => {
  const { withDrawerBtn, onDrawerBtnClick, className, scroll, seamed, title, transparent, waterfall, children, ...otherProps } = props;

  const classes = classNames(LayoutCssClasses.HEADER, {
    [LayoutCssClasses.HEADER_SEAMED]: seamed,
    [LayoutCssClasses.HEADER_WATERFALL]: waterfall,
    [LayoutCssClasses.HEADER_SCROLL]: scroll,
    [LayoutCssClasses.HEADER_TRANSPARENT]: transparent
  }, className);

  let isRowOrTab = false;

  React.Children.forEach(children, child => {
    if (child && (child.type === LayoutHeaderRow || child.type === LayoutHeaderTabs)) {
      isRowOrTab = true;
    }
  });

  return (
    <header
      className={classes}
      {...otherProps}
    >
      {withDrawerBtn ? (
        <div
          className={LayoutCssClasses.DRAWER_BTN}
          onClick={onDrawerBtnClick}
        >
          <Icon name='menu'/>
        </div>) : null}
      {isRowOrTab ? children : (
        <LayoutHeaderRow title={title}>{children}</LayoutHeaderRow>
      )}
    </header>
  );
};

LayoutHeader.propTypes = {
  withDrawerBtn: React.PropTypes.bool,
  onDrawerBtnClick: React.PropTypes.func,
  className: React.PropTypes.string,
  scroll: React.PropTypes.bool,
  seamed: React.PropTypes.bool,
  title: React.PropTypes.node,
  transparent: React.PropTypes.bool,
  waterfall: React.PropTypes.bool,
  children: React.PropTypes.node
};

export default LayoutHeader;
