import React, { PropTypes } from 'react';
import classNames from 'classnames';

import CardCssClasses from './constants/CardCssClasses';

class CardTitle extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    expand: PropTypes.bool
  };

  render() {
    const { className, children, expand, ...otherProps } = this.props;

    const classes = classNames(CardCssClasses.TITLE, {
      [CardCssClasses.EXPAND]: expand
    }, className);

    const title = typeof children === 'string'
      ? React.createElement('h2', { className: CardCssClasses.TITLE_TEXT }, children)
      : children;

    return (
      <div className={classes} {...otherProps}>
        {title}
      </div>
    );
  }
}

export default CardTitle;
