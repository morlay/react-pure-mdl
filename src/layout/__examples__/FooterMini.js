import React from 'react';

import Footer, { FooterSection, FooterLinkList } from '../Footer';

const FooterMiniDemo = () => (
  <div>
    <Footer size='mini'>
      <FooterSection
        type='left'
        logo='Title'
      >
        <FooterLinkList>
          <a href='#'>Help</a>
          <a href='#'>Privacy & Terms</a>
        </FooterLinkList>
      </FooterSection>
    </Footer>
  </div>
);

export default FooterMiniDemo;
