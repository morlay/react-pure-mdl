import { expect } from 'chai';

import React from 'react';
import legitTest from 'legit-tests';
import Icon from '../Icon';

describe(__filename, () => {
  context('when render with prop name', () => {
    it('should have className with "material-icons"', () => {
      const iconName = 'test';
      legitTest(<Icon name={iconName}/>, { shallow: true })
        .test(({ instance }) => {
          expect(instance.props.className).to.eql('material-icons');
          expect(instance.props.children).to.eql(iconName);
        });
    });
  });
});
