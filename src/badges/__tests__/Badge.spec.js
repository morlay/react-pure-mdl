import { expect } from 'chai';
import React from 'react';
import legitTest from 'legit-tests';
import Badge from '../Badge';

describe('Badge', () => {
  it('should render span with data-badge on text child', () => {
    legitTest(<Badge text='4'>Inbox</Badge>, { shallow: true })
      .test(({ instance }) => {
        expect(instance.props['data-badge']).to.eql('4');
        expect(instance.props.children).to.eql('Inbox');
      });
  });

  it('should render empty badge when text is empty', () => {
    legitTest(<Badge text=''>Inbox</Badge>, { shallow: true })
      .test(({ instance }) => {
        expect(instance.props['data-badge']).to.eql('');
        expect(instance.props.children).to.eql('Inbox');
      });
  });

  it('should allow number as badge text', () => {
    legitTest(<Badge text={4}>Inbox</Badge>, { shallow: true })
      .test(({ instance }) => {
        expect(instance.props['data-badge']).to.eql(4);
        expect(instance.props.children).to.eql('Inbox');
      });
  });

  describe('should not render badge', () => {
    it('when no children', () => {
      legitTest(<Badge text={4}/>, { shallow: true })
        .test(({ instance }) => {
          expect(instance).to.be.a('null');
        });
    });
  });
});
