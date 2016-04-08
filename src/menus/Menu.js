import './Menu.scss';

import React, { PropTypes, cloneElement, Children } from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import query from 'dom-helpers/query';
import transition from 'dom-helpers/transition';

import MenuCssClasses from './constants/MenuCssClasses';

import MenuItem from './MenuItem';


const Constants = {
  TRANSITION_DURATION_SECONDS: 0.3,
  TRANSITION_DURATION_FRACTION: 0.8,
  CLOSE_TIMEOUT: 150
};

const MenuItemPropType = (props, propName, componentName) => {
  const prop = props[propName];
  if (prop.type !== MenuItem) {
    return new Error(`${componentName} only accepts \`Tab\` as children.`);
  }
  return null;
};

/**
 * @exampleFile ./__examples__/Menu.js
 */
class Menu extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    target: PropTypes.node.isRequired,
    align: PropTypes.oneOf(['left', 'right']),
    valign: PropTypes.oneOf(['bottom', 'top']),
    ripple: PropTypes.bool,
    children: PropTypes.oneOfType([
      MenuItemPropType,
      PropTypes.arrayOf(MenuItemPropType)
    ])
  };

  static defaultProps = {
    align: 'left',
    valign: 'bottom'
  };

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      animating: false
    };
  }

  componentDidMount() {
    this.positionMenu();
  }

  bindDocumentEvent(evt) {
    const callback = (e) => {
      if (
        e !== evt
        && !this.state.animating &&
        e.target.parentNode !== findDOMNode(this.refs.menu)
      ) {
        document.removeEventListener('click', callback);
        this.hideMenu();
      }
    };
    document.addEventListener('click', callback);
  }

  positionMenu() {
    const $menu = findDOMNode(this.refs.menu);
    const $container = findDOMNode(this.refs.container);
    const $outline = findDOMNode(this.refs.outline);

    const forSize = query.offset(findDOMNode(this.refs.for));
    const menuSize = query.offset($menu);

    Object.assign($container.style, {
      width: menuSize.width,
      height: menuSize.height,
      top: this.props.valign === 'top'
        ? forSize.top - menuSize.height
        : forSize.top + forSize.height,
      left: this.props.align === 'left'
        ? forSize.left
        : forSize.left - menuSize.width + forSize.width
    });

    Object.assign($outline.style, {
      width: menuSize.width,
      height: menuSize.height
    });
  }

  applyClip($element, height, width) {
    const { align, valign } = this.props;
    if (align || valign) {
      const rectValue = [
        align === 'top' ? height : 0,
        align === 'left' ? 0 : width,
        align === 'top' ? height : 0,
        align === 'left' ? 0 : width
      ]
        .map((val) => `${val}px`)
        .join(' ');
      Object.assign($element.style, {
        clip: `rect(${rectValue})`
      });
    } else {
      Object.assign($element.style, {
        clip: ''
      });
    }
  }

  startAnimation() {
    const $menu = findDOMNode(this.refs.menu);
    const menuSize = query.offset($menu);

    const transitionDuration =
      Constants.TRANSITION_DURATION_SECONDS *
      Constants.TRANSITION_DURATION_FRACTION;

    Object.keys(this.refs)
      .filter((key) => key.substring(0, 4) === 'item')
      .map((key) => this.refs[key])
      .forEach((element) => {
        const $element = findDOMNode(element);
        let itemDelay = null;
        if (this.props.valign === 'top') {
          itemDelay = (
            (menuSize.height - $element.offsetTop - $element.offsetHeight) /
            menuSize.height * transitionDuration
          );
        } else {
          itemDelay = ($element.offsetTop / menuSize.height * transitionDuration);
        }
        $element.style.transitionDelay = `${itemDelay}s`;
      });

    this.applyClip($menu, menuSize.height, menuSize.width);

    this.setState({
      animating: true
    }, () => {
      $menu.style.clip = `rect(0 ${menuSize.width}px ${menuSize.height}px 0)`;
    });

    transition.end($menu, () => {
      this.setState({
        animating: false
      });
    }, transitionDuration);
  }

  hideMenu() {
    setTimeout(() => {
      this.setState({
        show: false
      });
    }, Constants.CLOSE_TIMEOUT);
  }

  showMenu(evt) {
    this.setState({
      show: true
    }, () => {
      this.startAnimation();
      this.bindDocumentEvent(evt);
    });
  }

  render() {
    const {
      align,
      ripple,
      children,
      className,
      target,
      valign,
      ...otherProps
    } = this.props;

    const containerClasses = classNames(MenuCssClasses.CONTAINER, {
      [MenuCssClasses.IS_UPGRADED]: true,
      [MenuCssClasses.IS_VISIBLE]: this.state.show
    });

    const outlineClasses = classNames(MenuCssClasses.OUTLINE, {
      [`${MenuCssClasses.ROOT}--${valign}-${align}`]: true
    });

    const menuClasses = classNames(className, MenuCssClasses.ROOT, {
      [`${MenuCssClasses.ROOT}--${valign}-${align}`]: true,
      [MenuCssClasses.IS_ANIMATING]: this.state.animating
    });

    return (
      <div>
        <span
          ref='for'
          style={{ display: 'inline-block' }}
        >
          {cloneElement(Children.only(target), {
            onClick: e => this.showMenu(e)
          })}
        </span>
        <div
          ref='container'
          className={containerClasses}
        >
          <div
            ref='outline'
            className={outlineClasses}
          />
          <ul
            ref='menu'
            className={menuClasses}
            {...otherProps}
          >
            {Children.map(children, (child, idx) => cloneElement(child, {
              ref: `item-${idx}`,
              ripple
            }))}
          </ul>
        </div>
      </div>
    );
  }
}

Menu.MenuItem = MenuItem;

export default Menu;
