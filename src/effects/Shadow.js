import './Shadow.scss';

import React, { Children, PropTypes, cloneElement } from 'react';
import classNames from 'classnames';

const shadows = [
  'mdl-shadow--2dp',
  'mdl-shadow--3dp',
  'mdl-shadow--4dp',
  'mdl-shadow--6dp',
  'mdl-shadow--8dp',
  'mdl-shadow--16dp'
];

class Shadow extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    level: PropTypes.oneOf([0, 1, 2, 3, 4, 5])
  };

  render() {
    const { level, children } = this.props;
    const hasShadow = typeof level !== 'undefined';
    if (hasShadow) {
      return cloneElement(Children.only(children), {
        className: classNames(children.props.className, {
          [shadows[level]]: hasShadow
        })
      });
    }
    return children;
  }
}

export default Shadow;
