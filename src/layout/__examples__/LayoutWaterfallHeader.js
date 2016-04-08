import React from 'react';

import Layout, {
  LayoutHeader,
  LayoutNavigation,
  LayoutHeaderRow,
  LayoutContent
} from '../../layout/Layout';

const LayoutWaterfallHeader = () => (
  <Layout
    mode='waterfall'
    fixedHeader
  >
    <LayoutHeader
      title='Title'
    >
      <LayoutHeaderRow title='Title' />
      <LayoutHeaderRow>
        <LayoutNavigation>
          <a href=''>Link</a>
          <a href=''>Link</a>
          <a href=''>Link</a>
          <a href=''>Link</a>
        </LayoutNavigation>
      </LayoutHeaderRow>
      <LayoutHeaderRow>
        <LayoutNavigation>
          <a href=''>Link</a>
          <a href=''>Link</a>
          <a href=''>Link</a>
          <a href=''>Link</a>
        </LayoutNavigation>
      </LayoutHeaderRow>
    </LayoutHeader>
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


export default LayoutWaterfallHeader;
