import React, { Component } from 'react';

import Layout, {
  LayoutHeader,
  LayoutHeaderRow,
  LayoutHeaderTabs,
  LayoutDrawer,
  LayoutContent
} from '../../layout/Layout';

import Tab from '../Tab';

class LayoutWithTabs extends Component {

  state = {
    activeTab: 1
  };

  handleTabChange(tabId) {
    this.setState({ activeTab: tabId });
  }

  render() {
    return (
      <Layout style={{ backgroundColor: '#ddd' }}>
        <div style={{ height: '300px', position: 'relative' }}>
          <Layout
            fixedHeader
          >
            <LayoutHeader>
              <LayoutHeaderRow title='Title' />
              <LayoutHeaderTabs
                activeTab={this.state.activeTab}
                onChange={(tabId) => this.handleTabChange(tabId)}
              >
                <Tab>Tab1</Tab>
                <Tab>Tab2</Tab>
                <Tab>Tab2</Tab>
                <Tab>Tab3</Tab>
                <Tab>Tab4</Tab>
                <Tab>Tab5</Tab>
                <Tab>Tab6</Tab>
                <Tab>Tab7</Tab>
                <Tab>Tab8</Tab>
                <Tab>Tab9</Tab>
                <Tab>Tab10</Tab>
                <Tab>Tab11</Tab>
                <Tab>Tab12</Tab>
                <Tab>Tab13</Tab>
                <Tab>Tab14</Tab>
                <Tab>Tab15</Tab>
                <Tab>Tab16</Tab>
              </LayoutHeaderTabs>
            </LayoutHeader>
            <LayoutDrawer title='Title' />
            <LayoutContent />
          </Layout>
        </div>
      </Layout>
    );
  }
}

export default LayoutWithTabs;
