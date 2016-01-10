import React from 'react';

import Layout, {
  LayoutHeader,
  LayoutNavigation,
  LayoutDrawer,
  LayoutContent
} from '../../layout/Layout';

const LayoutTransparentHeader = () => {
  return (
    <Layout style={{ backgroundColor: '#ddd' }}>
      <LayoutHeader
        transparent
        title='Title'
      >
        <LayoutNavigation>
          <a href=''>Link</a>
          <a href=''>Link</a>
          <a href=''>Link</a>
          <a href=''>Link</a>
        </LayoutNavigation>
      </LayoutHeader>
      <LayoutDrawer title='Title'>
        <LayoutNavigation>
          <a href=''>Link</a>
          <a href=''>Link</a>
          <a href=''>Link</a>
          <a href=''>Link</a>
        </LayoutNavigation>
      </LayoutDrawer>
      <LayoutContent />
    </Layout>
  );
};

export default LayoutTransparentHeader;
