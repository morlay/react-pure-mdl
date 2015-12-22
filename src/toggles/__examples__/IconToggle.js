import React from 'react';

import IconToggle from '../IconToggle';

const IconToggleDemo = () => {
  return (
    <div>
      <IconToggle
        name='format_bold'
        defaultChecked
      />
      <IconToggle
        name='format_italic'
      />
      <IconToggle
        name='format_bold'
        disabled
      />
    </div>
  );
};

export default IconToggleDemo;
