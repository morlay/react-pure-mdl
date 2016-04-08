import React from 'react';

import Slider from '../Slider';

const SliderDemo = () => (
  <div>
    <Slider
      min={0}
      max={100}
      defaultValue={0}
    />
    <Slider
      min={0}
      max={100}
      defaultValue={25}
    />
  </div>
);

export default SliderDemo;
