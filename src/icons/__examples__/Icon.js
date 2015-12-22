import React from 'react';
import Icon from '../Icon';
import IconTypes from '../constants/IconTypes';

const IconDemo = () => {
  return (
    <div>
      {
        IconTypes.map((name, idx) => {
          return (
            <Icon
              name={name}
              key={idx}
            />
          );
        })
      }
    </div>
  );
};

export default IconDemo;
