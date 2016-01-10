import React, { PropTypes } from 'react';
import classNames from 'classnames';

class TabBar extends React.Component {
  static propTypes = {
    activeTab: PropTypes.number,
    className: PropTypes.string,
    cssPrefix: PropTypes.string.isRequired,
    ripple: PropTypes.bool,
    onChange: PropTypes.func
  };

  static defaultProps = {
    activeTab: 0
  };

  _handleClickTab(tabId) {
    if (this.props.onChange) {
      this.props.onChange(tabId);
    }
  }

  render() {
    const { activeTab, className, ripple, cssPrefix,
      children, ...otherProps } = this.props;

    const classes = classNames({
      [`${cssPrefix}__tab-bar`]: true
    }, className);

    return (
      <div className={classes} {...otherProps}>
        {React.Children.map(children, (child, tabId) => {
          return React.cloneElement(child, {
            cssPrefix,
            tabId,
            ripple,
            active: tabId === activeTab,
            onTabClick: e => this._handleClickTab(e)
          });
        })}
      </div>
    );
  }
}

export default TabBar;
