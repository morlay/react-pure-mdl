import React from 'react';

import Progress from '../Progress';

const ProgressDemo = () => (
  <div>
    <Progress progress={44} />
    <br />
    <Progress indeterminate />
    <br />
    <Progress
      progress={33}
      buffer={87}
    />
  </div>
);

export default ProgressDemo;
