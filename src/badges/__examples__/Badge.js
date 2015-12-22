import React from 'react';

import Badge from '../Badge';
import Icon from '../../icons/Icon';

const BadgeDemo = () => {
  return (
    <div style={{ padding: '20px 0' }}>
      {/* Number badge on icon */}
      <Badge text='1'>
        <Icon name='account_box'/>
      </Badge>

      {/* Icon badge on icon */}
      <Badge text='♥'>
        <Icon name='account_box'/>
      </Badge>

      {/* Number badge on text */}
      <Badge text='4'>
        Inbox
      </Badge>

      {/* Icon badge on text */}
      <Badge text='♥'>
        Mood
      </Badge>
    </div>
  );
};

export default BadgeDemo;
