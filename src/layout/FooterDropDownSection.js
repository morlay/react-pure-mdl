import React, { PropTypes } from 'react';
import classNames from 'classnames';
import cloneChildren from '../utils/cloneChildren';

const FooterDropDownSection = (props) => {
  const { className, size, title, children, ...otherProps } = props;

  const classes = classNames({
    [`mdl-${size}-footer__drop-down-section`]: true
  }, className);

  return (
    <div className={classes} {...otherProps}>
      <input
        className={`mdl-${size}-footer__heading-checkbox`}
        type='checkbox'
        defaultChecked
      />
      <h1 className={`mdl-${size}-footer__heading`}>{title}</h1>
      {cloneChildren(children, { size })}
    </div>
  );
};

FooterDropDownSection.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['mini', 'mega']),
  title: PropTypes.node.isRequired
};
FooterDropDownSection.defaultProps = {
  size: 'mega'
};

export default FooterDropDownSection;
