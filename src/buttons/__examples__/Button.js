import React from 'react';

import Button from '../Button';

const BadgeDemo = () => {
  return (
    <div>
      <div>
        {/* Raised button */}
        <Button raised>Button</Button>

        {/* Disabled Raised button */}
        <Button
          raised
          disabled
        >
          Button
        </Button>
      </div>

      <div>
        {/* Colored Raised button */}
        <Button
          raised
          colored
        >
          Button
        </Button>

        {/* Accent-colored button without ripple */}
        <Button
          raised
          accent
        >
          Button
        </Button>
      </div>

      <div>
        {/* Flat button */}
        <Button>
          Button
        </Button>

        {/* Disabled flat button */}
        <Button disabled>Button</Button>
      </div>

      <div>
        {/* Primary colored flat button */}
        <Button primary>Button</Button>

        {/* Accent-colored flat button */}
        <Button accent>Button</Button>
      </div>
    </div>
  );
};

export default BadgeDemo;
