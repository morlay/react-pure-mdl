import React from 'react';

import FABButton from '../FABButton';

const FABButtonDemo = () => {
  return (
    <div>
      {/* Colored FAB button */}
      <FABButton colored>
        1
      </FABButton>

      {/* Disabled FAB button */}
      <FABButton disabled>
        1
      </FABButton>

      {/* Mini FAB button */}
      <FABButton mini>
        1
      </FABButton>

      {/* Colored Mini FAB button */}
      <FABButton mini colored>
        1
      </FABButton>
    </div>
  );
};

export default FABButtonDemo;
