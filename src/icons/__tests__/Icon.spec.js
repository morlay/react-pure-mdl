import { expect } from 'chai';

import React from 'react';
import { shallow } from 'enzyme';

import Icon from '../Icon';

describe(__filename, () => {
  context('when render with prop name', () => {
    it('should have className with "material-icons"', () => {
      const iconName = 'test';
      const wrapper = shallow(<Icon name={iconName} />);
      expect(wrapper.props().className).to.eql('material-icons');
      expect(wrapper.props().children).to.eql(iconName);
    });
  });
});
