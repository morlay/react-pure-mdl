import React, { PropTypes } from 'react';
import ReactDocMenu from './ReactDocMenu';

import Layout, { LayoutHeader, LayoutDrawer, LayoutHeaderRow, LayoutContent } from 'src/layout/Layout';

import grouper from '../utils/grouper';

class ReactDoc extends React.Component {
  static propTypes = {
    reactDocJson: PropTypes.object.isRequired,
    onMenuItemClick: PropTypes.func,
    grouper: PropTypes.func
  }

  static defaultProps = {
    grouper,
    onMenuItemClick: () => null
  }

  render() {
    return (
      <Layout
        fixedHeader
        fixedDrawer
      >
        <LayoutHeader>
          <LayoutHeaderRow
            title='React Pure Material Design Lite'
          />
        </LayoutHeader>
        <LayoutDrawer withChild>
          <ReactDocMenu
            {...this.props}
          />
        </LayoutDrawer>
        <LayoutContent >
          {this.props.children}
        </LayoutContent>
      </Layout>
    );
  }
}

export default ReactDoc;
