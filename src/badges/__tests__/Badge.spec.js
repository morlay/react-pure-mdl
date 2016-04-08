import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import Badge from '../Badge';

describe('Badge', () => {
  it('should render span with data-badge on text child', () => {
    const wrapper = shallow(<Badge text='4'>Inbox</Badge>);
    expect(wrapper.props()['data-badge']).to.eql('4');
    expect(wrapper.props().children).to.eql('Inbox');
  });

  it('should render empty badge when text is empty', () => {
    const wrapper = shallow(<Badge text=''>Inbox</Badge>);
    expect(wrapper.props()['data-badge']).to.eql('');
    expect(wrapper.props().children).to.eql('Inbox');
  });

  it('should allow number as badge text', () => {
    const wrapper = shallow(<Badge text={4}>Inbox</Badge>);
    expect(wrapper.props()['data-badge']).to.eql(4);
    expect(wrapper.props().children).to.eql('Inbox');
  });

  describe('should not render badge', () => {
    it('when no children', () => {
      const wrapper = shallow(<Badge text={4} />);
      expect(wrapper.node).to.be.a('null');
    });
  });
});
