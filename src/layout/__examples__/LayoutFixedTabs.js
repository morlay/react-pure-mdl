import React, { Component } from 'react';

import Layout, { LayoutHeader, LayoutHeaderRow, LayoutHeaderTabs, LayoutDrawer, LayoutContent } from '../../layout/Layout';
import Tab from '../Tab';

class LayoutFixedTabsDemo extends Component {

  state = {
    activeTab: 1
  }

  handleTabChange(tabId) {
    this.setState({ activeTab: tabId });
  }

  render() {
    return (
      <Layout style={{ backgroundColor: '#ddd' }}>
        <div style={{ height: '300px', position: 'relative' }}>
          <Layout
            fixedHeader
            fixedTabs
          >
            <LayoutHeader>
              <LayoutHeaderRow title='Title'/>
              <LayoutHeaderTabs
                activeTab={this.state.activeTab}
                onChange={(tabId) => this.handleTabChange(tabId)}
              >
                <Tab>Tab1</Tab>
                <Tab>Tab2</Tab>
                <Tab>Tab3</Tab>
              </LayoutHeaderTabs>
            </LayoutHeader>
            <LayoutDrawer title='Title'/>
            <LayoutContent/>
          </Layout>
        </div>
      </Layout>
    );
  }
}

export default LayoutFixedTabsDemo;
