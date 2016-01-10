import React, { PropTypes } from 'react';
import ReactDocMenu from './ReactDocMenu';

import Layout, {
  LayoutHeader,
  LayoutDrawer,
  LayoutHeaderRow,
  LayoutContent
} from 'src/layout/Layout';
import Icon from 'src/icons/Icon';
import Button from 'src/buttons/Button';

import grouper from '../utils/grouper';

class ReactDoc extends React.Component {
  static propTypes = {
    reactDocJson: PropTypes.object.isRequired,
    onMenuItemClick: PropTypes.func,
    grouper: PropTypes.func
  };

  static defaultProps = {
    grouper,
    onMenuItemClick: () => null
  };

  render() {
    return (
      <Layout
        drawerScreenOnly='small'
        fixedHeader
        fixedDrawer
      >
        <LayoutHeader>
          <LayoutHeaderRow title='React Pure Material Design Lite'>
            <Button
              href='https://github.com/morlay/react-pure-mdl'
              style={{ color: '#fff' }}
            >
              <Icon name='link'/>
              Github
            </Button>
          </LayoutHeaderRow>
        </LayoutHeader>
        <LayoutDrawer cloneChild>
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
