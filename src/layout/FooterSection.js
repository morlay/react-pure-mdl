import React, { PropTypes } from 'react';
import classNames from 'classnames';
import cloneChildren from '../utils/cloneChildren';

const FooterSection = (props) => {
  const { className, logo, size, type, children, ...otherProps } = props;

  const classes = classNames({
    [`mdl-${size}-footer__${type}-section`]: true
  }, className);

  return (
    <div className={classes} {...otherProps}>
      {logo ? <div className='mdl-logo'>{logo}</div> : null}
      {cloneChildren(children, { size })}
    </div>
  );
};

FooterSection.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.node,
  size: PropTypes.oneOf(['mini', 'mega']),
  type: PropTypes.oneOf(['top', 'middle', 'bottom', 'left', 'right']),
  children: PropTypes.node
};

FooterSection.defaultProps = {
  size: 'mega',
  type: 'left'
};

export default FooterSection;
