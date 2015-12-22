import React, { PropTypes } from 'react';
import classNames from 'classnames';

import TabsCssClasses from './constants/TabsCssClasses';

class Tab extends React.Component {
  static propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    cssPrefix: PropTypes.string,
    onTabClick: PropTypes.func,
    style: PropTypes.object,
    tabId: PropTypes.number
  }

  static defaultProps = {
    style: {}
  }

  _handleClick() {
    this.props.onTabClick(this.props.tabId);
  }

  render() {
    const { active, className, cssPrefix, tabId,
      onTabClick, style, ...otherProps } = this.props;

    const classes = classNames({
      [`${cssPrefix}__tab`]: true,
      [TabsCssClasses.IS_ACTIVE]: active
    }, className);

    style.cursor = 'pointer';

    return (
      <a
        className={classes}
        onClick={(e) => this._handleClick(e)}
        style={style} {...otherProps}
      >
        {this.props.children}
      </a>
    );
  }
}

export default Tab;
