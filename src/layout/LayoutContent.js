import React, { PropTypes } from 'react';
import classNames from 'classnames';

import * as LayoutCssClasses from './constants/LayoutCssClasses';
import refableWrap from '../utils/refableWrap';

const LayoutContent = ({ children, className, ...otherProps }) => {
  const classes = classNames(className, LayoutCssClasses.CONTENT);

  return (
    <main
      {...otherProps}
      className={classes}
    >
      {children}
    </main>
  );
};

LayoutContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

const RefableLayoutContent = refableWrap(LayoutContent);

export {
  RefableLayoutContent
};

export default LayoutContent;
