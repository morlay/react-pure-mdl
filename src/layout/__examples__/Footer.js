import React from 'react';

import Footer, { FooterSection, FooterDropDownSection, FooterLinkList } from '../Footer';

const FooterDemo = () => {
  return (
    <div>
      <Footer size='mega'>
        <FooterSection type='middle'>
          <FooterDropDownSection title='Features'>
            <FooterLinkList>
              <a href='#'>About</a>
              <a href='#'>Terms</a>
              <a href='#'>Partners</a>
              <a href='#'>Updates</a>
            </FooterLinkList>
          </FooterDropDownSection>
          <FooterDropDownSection title='Details'>
            <FooterLinkList>
              <a href='#'>Specs</a>
              <a href='#'>Tools</a>
              <a href='#'>Resources</a>
            </FooterLinkList>
          </FooterDropDownSection>
          <FooterDropDownSection title='Technology'>
            <FooterLinkList>
              <a href='#'>How it works</a>
              <a href='#'>Patterns</a>
              <a href='#'>Usage</a>
              <a href='#'>Products</a>
              <a href='#'>Contracts</a>
            </FooterLinkList>
          </FooterDropDownSection>
          <FooterDropDownSection title='FAQ'>
            <FooterLinkList>
              <a href='#'>Questions</a>
              <a href='#'>Answers</a>
              <a href='#'>Contact Us</a>
            </FooterLinkList>
          </FooterDropDownSection>
        </FooterSection>
        <FooterSection type='bottom' logo='Title'>
          <FooterLinkList>
            <a href='#'>Help</a>
            <a href='#'>Privacy & Terms</a>
          </FooterLinkList>
        </FooterSection>
      </Footer>
    </div>
  );
};

export default FooterDemo;
