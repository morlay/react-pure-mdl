/* eslint react/prop-types: 0 */

import React from 'react';
import Typography from '../Typography';

const H1 = ({ children, ...otherProps }) => (
  <Typography
    {...otherProps}
    type='display'
    level={4}
  >
    <h1>
      {children}
    </h1>
  </Typography>
);

const H2 = (props) => (
  <Typography
    {...props}
    type='display'
    level={3}
  >
    <h1>
      {props.children}
    </h1>
  </Typography>
);

const H3 = (props) => (
  <Typography
    {...props}
    type='display'
    level={2}
  >
    <h1>
      {props.children}
    </h1>
  </Typography>
);

const H4 = (props) => (
  <Typography
    {...props}
    type='display'
    level={1}
  >
    <h1>
      {props.children}
    </h1>
  </Typography>
);

const H5 = (props) => (
  <Typography
    {...props}
    type='headline'
  >
    <h1>
      {props.children}
    </h1>
  </Typography>
);

const H6 = (props) => (
  <Typography
    {...props}
    type='title'
  >
    <h1>
      {props.children}
    </h1>
  </Typography>
);

const Bold = (props) => (
  <Typography fontWeight='bold'>
    {props.children}
  </Typography>
);

const P = (props) => (
  <Typography
    {...props}
    type='body'
  >
    <p>
      {props.children}
    </p>
  </Typography>
);

const TypographyDemo = () => (
  <div>
    <H1>
      Light 112sp
    </H1>
    <H1 colorContrast>
      Light 112sp
    </H1>
    <P>
      <Bold>display-4</Bold> font weight 300
    </P>
    <P colorContrast>
      With color contrast
    </P>
    <P level={2}>
      P2
    </P>
    <H2>
      Regular 56sp
    </H2>
    <P>
      <Bold>display-3</Bold> font weight 400
    </P>
    <H3>
      Regular 45sp
    </H3>
    <P>
      <Bold>display-2</Bold> font weight 400
    </P>
    <H4>
      Regular 34sp
    </H4>
    <P>
      <Bold>display-1</Bold> font weight 400
    </P>
    <H5>
      Regular 24sp
    </H5>
    <P>
      <Bold>headline</Bold> font weight 400
    </P>
    <H6>
      Regular 20sp
    </H6>
  </div>
);

export default TypographyDemo;
