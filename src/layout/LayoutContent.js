import React, { PropTypes } from 'react';
import classNames from 'classnames';

import LayoutCssClasses from './constants/LayoutCssClasses';

const LayoutContent = props => {
  const { children, className, ...otherProps } = props;

  const classes = classNames(LayoutCssClasses.CONTENT, className);

  return (
    <main className={classes} {...otherProps}>
      {children}
    </main>
  );
};

LayoutContent.propTypes = {
  className: PropTypes.string
};

export default LayoutContent;
