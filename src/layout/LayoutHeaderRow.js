import React, { PropTypes } from 'react';
import classNames from 'classnames';
import LayoutTitle from './LayoutTitle';
import LayoutSpacer from './LayoutSpacer';

import * as LayoutCssClasses from './constants/LayoutCssClasses';

const LayoutHeaderRow = props => {
  const { className, title, children, ...otherProps } = props;

  const classes = classNames(LayoutCssClasses.HEADER_ROW, className);

  return (
    <div className={classes} {...otherProps}>
      {title && <LayoutTitle>{title}</LayoutTitle>}
      <LayoutSpacer />
      {children}
    </div>
  );
};

LayoutHeaderRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.node
};

export default LayoutHeaderRow;
