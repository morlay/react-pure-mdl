import React from 'react';

import Layout, {
  LayoutHeader,
  LayoutNavigation,
  LayoutTitle,
  LayoutDrawer,
  LayoutContent
} from '../../layout/Layout';

const LayoutFixed = () => {
  return (
    <Layout
      fixedHeader
      fixedDrawer
    >
      <LayoutHeader title='Title'>
        <LayoutNavigation>
          <a href=''>Link</a>
          <a href=''>Link</a>
          <a href=''>Link</a>
          <a href=''>Link</a>
        </LayoutNavigation>
      </LayoutHeader>
      <LayoutDrawer>
        <LayoutTitle>
          Title
        </LayoutTitle>
        <LayoutNavigation>
          <a href=''>Link</a>
          <a href=''>Link</a>
          <a href=''>Link</a>
          <a href=''>Link</a>
        </LayoutNavigation>
      </LayoutDrawer>
      <LayoutContent>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
      </LayoutContent>
    </Layout>
  );
};

export default LayoutFixed;
