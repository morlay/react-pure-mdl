import './Card.scss';

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import CardTitle from './CardTitle';
import CardActions from './CardActions';

import CardCssClasses from './constants/CardCssClasses';

import basicClassCreator from '../utils/basicClassCreator';

/**
 * @exampleFile ./__examples__/Card.js
 * @exampleFile ./__examples__/CardSquare.js
 * @exampleFile ./__examples__/CardImage.js
 * @exampleFile ./__examples__/CardEvent.js
 */
const Card = (props) => {
  const { className, children, ...otherProps } = props;
  const classes = classNames(className, CardCssClasses.ROOT);
  return (
    <div
      className={classes}
      {...otherProps}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export { CardTitle, CardActions };

export const CardSubtitle = basicClassCreator('CardSubtitle', CardCssClasses.SUBTITLE_TEXT);
export const CardText = basicClassCreator('CardText', CardCssClasses.SUPPORTING_TEXT);
export const CardMenu = basicClassCreator('CardMenu', CardCssClasses.MENU);
export const CardMedia = basicClassCreator('CardMedia', CardCssClasses.MEDIA);

Card.CardTitle = CardTitle;
Card.CardActions = CardActions;
Card.CardSubtitle = CardSubtitle;
Card.CardText = CardText;
Card.CardMenu = CardMenu;
Card.CardMedia = CardMedia;

export default Card;
