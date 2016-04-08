import React from 'react';
import Icon from '../Icon';
import IconTypes from '../constants/IconTypes';

const IconDemo = () => (
  <div>
    {IconTypes.map((name, idx) => (
      <Icon
        name={name}
        key={idx}
      />
    ))}
  </div>
);

export default IconDemo;
