import React from 'react';

import IconButton from '../IconButton';

const IconButtonDemo = () => {
  return (
    <div>
      <IconButton
        colored
        name='face'
      />
      <IconButton
        disabled
        name='face'
      />
    </div>
  );
};

export default IconButtonDemo;
