import React, { PropTypes } from 'react';
import classNames from 'classnames';

import * as LayoutCssClasses from './constants/LayoutCssClasses';

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

export default LayoutContent;
