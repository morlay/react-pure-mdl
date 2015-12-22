import React from 'react';

import Tooltip from '../Tooltip';
import Icon from '../../icons/Icon';

const TooltipDemo = () => {
  return (
    <div style={{ padding: '40px' }}>
      <Tooltip label='Follow'>
        <Icon name='add'/>
      </Tooltip>
      <Tooltip
        label='Print'
        large
      >
        <Icon name='print'/>
      </Tooltip>
      <Tooltip label={<span>Upload <strong>file.zip</strong></span>}>
        <Icon name='cloud_upload'/>
      </Tooltip>
      <Tooltip label={<span>Share your content<br />via social media</span>}>
        <Icon name='share'/>
      </Tooltip>
    </div>
  );
};

export default TooltipDemo;
