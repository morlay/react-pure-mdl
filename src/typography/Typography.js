import './Typography.scss';

import React, { PropTypes, Children, cloneElement, isValidElement } from 'react';
import classNames from 'classnames';

const LevelTypeCheck = (props, propName, componentName) => {
  switch (props.type) {
    case 'display':
      return PropTypes.oneOf([1, 2, 3, 4])(props, propName, componentName);
    case 'body':
      return PropTypes.oneOf([1, 2])(props, propName, componentName);
    default:
      return PropTypes.any(props, propName, componentName);
  }
};

/**
 * @exampleFile ./__examples__/Typography.js
 */
class Typography extends React.Component {
  static propTypes = {
    /**
     * Type of Typography.
     */
    type: PropTypes.oneOf([
      'display',
      'headline',
      'title',
      'subhead',
      'menu',
      'button',
      'body',
      'caption'
    ]),
    /**
     * Only work when type is `display` (1-4) or `body` (1-2)
     * `.mdl-typography--${type}-${level}`
     */
    level: LevelTypeCheck,

    forcePreferredFont: PropTypes.bool,

    /**
     * `.mdl-typography--${type}-color-contrast`
     */
    colorContrast: PropTypes.bool,
    children: PropTypes.node,

    fontWeight: PropTypes.oneOf(['thin', 'light', 'regular', 'medium', 'bold', 'black']),
    textAlign: PropTypes.oneOf(['right', 'left', 'center', 'justify']),
    textTransform: PropTypes.oneOf(['lowercase', 'uppercase', 'capitalize']),
    nowrap: PropTypes.bool
  };

  render() {
    const {
      type,
      level,
      colorContrast,
      forcePreferredFont,
      fontWeight,
      textAlign,
      textTransform,
      nowrap,
      children
    } = this.props;

    const newLevel = ['display', 'body'].indexOf(type) > -1 ? (level || 1) : null;

    let typeComposedClass = `mdl-typography--${type}${newLevel ? (`-${newLevel}`) : ''}`;

    if (forcePreferredFont) {
      typeComposedClass += '-force-preferred-font';
    }

    if (colorContrast) {
      typeComposedClass += '-color-contrast';
    }


    const classes = classNames({
      [typeComposedClass]: type,
      [`mdl-typography--font-${fontWeight}`]: fontWeight,
      [`mdl-typography--text-${textAlign}`]: textAlign,
      [`mdl-typography--text-${textTransform}`]: textTransform,
      ['mdl-typography--text-nowrap']: nowrap
    });

    if (isValidElement(children)) {
      return cloneElement(Children.only(children), {
        className: classes
      });
    }

    return (
      <span
        className={classes}
      >
        {children}
      </span>
    );
  }
}


export default Typography;
