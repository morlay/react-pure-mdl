import React from 'react';

import Tabs, { Tab } from '../Tabs';

import Typography from '../../typography/Typography';


class TabsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: 1
    };
  }

  handleChange(tabId) {
    this.setState({
      activeId: tabId
    });
  }

  render() {
    return (
      <div>
        <div>
          <Tabs
            activeTab={this.state.activeId}
            onChange={tableId => this.handleChange(tableId)}
          >
            <Tab>Starks</Tab>
            <Tab>Lannisters</Tab>
            <Tab>Targaryens</Tab>
          </Tabs>
          <section>
            <Typography type='body'>
              You can add logic to update the content of this container based on the 'activeTab'
              receive in the `onChange` callback.
            </Typography>
          </section>
        </div>
        <div>
          <Tabs
            activeTab={this.state.activeId}
            onChange={tableId => this.handleChange(tableId)}
            ripple
          >
            <Tab>Starks</Tab>
            <Tab>Lannisters</Tab>
            <Tab>Targaryens</Tab>
          </Tabs>
          <section>
            <Typography type='body'>
              You can add logic to update the content of this container based on the 'activeTab'
              receive in the `onChange` callback.
            </Typography>
          </section>
        </div>
      </div>
    );
  }
}

export default TabsDemo;
