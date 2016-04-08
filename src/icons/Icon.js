import './Icon.scss';

import React, { PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Icon for http://google.github.io/material-design-icons/
 * @exampleFile ./__examples__/Icon.js
 */
const Icon = (props) => (
  <i
    {...props}
    className={classNames(props.className, 'material-icons')}
  >
    {props.name}
  </i>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Icon;
