import './Progress.scss';

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import ProgressCssClasses from './constants/ProgressCssClasses';

/**
 * @exampleFile ./__examples__/Progress.js
 */
const Progress = ({
  className,
  indeterminate,
  buffer,
  progress,
  ...otherProps
}) => {
  const classes = classNames(className, ProgressCssClasses.ROOT, {
    [ProgressCssClasses.INDETERMINATE_CLASS]: indeterminate,
    [ProgressCssClasses.IS_UPGRADED]: true
  });

  return (
    <div
      className={classes}
      {...otherProps}
    >
      <div
        className={ProgressCssClasses.PROGRESSBAR}
        style={{ width: `${progress}%` }}
      />
      <div
        className={ProgressCssClasses.BUFFERBAR}
        style={{ width: buffer ? `${buffer}%` : '100%' }}
      />
      <div
        className={ProgressCssClasses.AUXBAR}
        style={{ width: buffer ? `${(100 - buffer)}%` : 0 }}
      />
    </div>
  );
};

Progress.propTypes = {
  buffer: PropTypes.number,
  className: PropTypes.string,
  indeterminate: PropTypes.bool,
  progress: PropTypes.number
};

export default Progress;
