import React from 'react';
import Ripple from '../Ripple';
import Button from '../../buttons/Button';

const RippleDemo = () => {
  return (
    <div>
      <Ripple>
        <Button colored>
          Ripple Button
        </Button>
      </Ripple>
      <Ripple>
        <Button disabled>
          Ripple Button
        </Button>
      </Ripple>
    </div>
  );
};

export default RippleDemo;
