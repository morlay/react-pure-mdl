import React, { PropTypes } from 'react';
import classNames from 'classnames';
import * as LayoutCssClasses from './constants/LayoutCssClasses';

const LayoutObfuscator = (props) => {
  return (
    <div
      {...props}
      className={classNames(LayoutCssClasses.OBFUSCATOR, {
        [LayoutCssClasses.IS_DRAWER_OPEN]: props.open
      })}
    />
  );
};

LayoutObfuscator.propTypes = {
  open: PropTypes.bool
};

export default LayoutObfuscator;
