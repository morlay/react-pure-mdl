import React from 'react';

import Switch from '../Switch';

const SwitchDemo = () => {
  return (
    <div>
      <Switch
        label='Switch'
        defaultChecked
      />
      <Switch
        label='Switch'
      />
      <Switch
        label='Switch'
        disabled
      />
    </div>
  );
};

export default SwitchDemo;
