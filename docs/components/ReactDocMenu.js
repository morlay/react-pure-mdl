import './ReactDocMenu.scss';

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import _ from 'lodash';

import { LayoutTitle, LayoutNavigation } from 'src/layout/Layout';

class ReactDocMenu extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    reactDocJson: PropTypes.object,
    onMenuItemClick: PropTypes.func,
    grouper: PropTypes.func
  };

  _getGroups(info) {
    return _(info)
      .values()
      .map((componentItem) => {
        return this.props.grouper(componentItem.module);
      })
      .uniq()
      .value();
  }

  _onItemClick(evt, groupName, componentName) {
    evt.preventDefault();
    this.props.onMenuItemClick(groupName, componentName);
  }

  renderMenuItem(componentList) {
    return _.map(componentList, (componentItem, idx) => {
      const handleClick = e => this._onItemClick(
        e,
        this.props.grouper(componentItem.module),
        componentItem.name
      );
      return (
        <a
          key={idx}
          href='#'
          onClick={handleClick}
        >
          {componentItem.name}
        </a>
      );
    });
  }

  render() {
    const groups = this._getGroups(this.props.reactDocJson);

    return (
      <div className={classNames('ReactDocMenu', this.props.className)}>
        {_.map(groups, (groupName, idx) => {
          return [
            <LayoutTitle
              component='a'
              href='#'
              key={idx}
              onClick={e => this._onItemClick(e, groupName)}
            >
              {groupName}
            </LayoutTitle>,
            <LayoutNavigation key={idx + 'list'}>
              {
                this.renderMenuItem(
                  _(this.props.reactDocJson)
                    .values()
                    .filter((componentItem) => {
                      return this.props.grouper(componentItem.module) === groupName;
                    })
                    .value()
                )
              }
            </LayoutNavigation>
          ];
        })}
      </div>
    );
  }
}

export default ReactDocMenu;
