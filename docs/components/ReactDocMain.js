import React, { PropTypes } from 'react';
import _ from 'lodash';

import grouper from '../utils/grouper';

import ReactDocSection from './ReactDocSection';

class ReactDocMain extends React.Component {

  static propTypes = {
    reactDocJson: PropTypes.object,
    previewConfig: PropTypes.object,
    params: PropTypes.object.isRequired,
    grouper: PropTypes.func
  };

  static defaultProps = {
    grouper,
    onMenuItemClick: () => null
  };

  render() {
    const props = this.props;

    return (
      <main>
        {_(props.reactDocJson)
          .values()
          .filter((componentItem) => {
            if (props.params.groupName) {
              if (props.params.componentName) {
                return props.grouper(componentItem.module) === props.params.groupName
                  && componentItem.name === props.params.componentName;
              }
              return props.grouper(componentItem.module) === props.params.groupName;
            }
            return true;
          })
          .map((componentItem, idx) => {
            return (
              <ReactDocSection
                key={idx}
                componentItem={componentItem}
                previewConfig={props.previewConfig}
              />
            );
          })
          .value()
        }
      </main>
    );
  }

}

export default ReactDocMain;
