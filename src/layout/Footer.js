import './Footer.scss';

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import cloneChildren from '../utils/cloneChildren';

import FooterSection from './FooterSection';
import FooterDropDownSection from './FooterDropDownSection';
import FooterLinkList from './FooterLinkList';

/**
 * @exampleFile ./__examples__/Footer.js
 * @exampleFile ./__examples__/FooterMini.js
 */
const Footer = (props) => {
  const { className, size, children, ...otherProps } = props;

  const classes = classNames({
    [`mdl-${size}-footer`]: true
  }, className);

  return (
    <footer className={classes} {...otherProps}>
      {cloneChildren(children, { size })}
    </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['mini', 'mega'])
};

Footer.defaultProps = {
  size: 'mega'
};

export {
  FooterSection,
  FooterDropDownSection,
  FooterLinkList
};

Object.assign(Footer, {
  FooterSection,
  FooterDropDownSection,
  FooterLinkList
});

export default Footer;
