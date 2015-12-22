import React, { PropTypes } from 'react';
import classNames from 'classnames';

const FooterLinkList = (props) => {
  const { className, size, children, ...otherProps } = props;

  const classes = classNames({
    [`mdl-${size}-footer__link-list`]: true
  }, className);

  return (
    <ul className={classes} {...otherProps}>
      {React.Children.map(children, child => {
        return <li>{child}</li>;
      })}
    </ul>
  );
};

FooterLinkList.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['mini', 'mega']),
  children: PropTypes.node
};

FooterLinkList.defaultProps = {
  size: 'mega'
};

export default FooterLinkList;
