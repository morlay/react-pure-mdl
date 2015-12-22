import './Spinner.scss';

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import SpinnerCssClasses from './constants/SpinnerCssClasses';

/**
 * @exampleFile ./__examples__/Spinner.js
 */
class Spinner extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    active: PropTypes.bool,
    singleColor: PropTypes.bool
  };

  static defaultProps = {
    active: true
  }

  createLayer(idx) {
    return (
      <div
        key={idx}
        className={classNames(SpinnerCssClasses.MDL_SPINNER_LAYER, SpinnerCssClasses.MDL_SPINNER_LAYER + '-' + idx)}
      >
        <div className={classNames(SpinnerCssClasses.MDL_SPINNER_CIRCLE_CLIPPER, SpinnerCssClasses.MDL_SPINNER_LEFT)}>
          <div className={SpinnerCssClasses.MDL_SPINNER_CIRCLE}/>
        </div>
        <div className={SpinnerCssClasses.MDL_SPINNER_GAP_PATCH}>
          <div className={SpinnerCssClasses.MDL_SPINNER_CIRCLE}/>
        </div>
        <div className={classNames(SpinnerCssClasses.MDL_SPINNER_CIRCLE_CLIPPER, SpinnerCssClasses.MDL_SPINNER_RIGHT)}>
          <div className={SpinnerCssClasses.MDL_SPINNER_CIRCLE}/>
        </div>
      </div>
    );
  }

  renderLayers(size) {
    const layers = [];
    for (let i = 1; i <= size; i++) {
      layers.push(this.createLayer(i));
    }
    return layers;
  }

  render() {
    const { active, className, singleColor, ...otherProps } = this.props;

    const classes = classNames(SpinnerCssClasses.ROOT, {
      [SpinnerCssClasses.SINGLE_COLOR]: singleColor,
      [SpinnerCssClasses.IS_ACTIVE]: active,
      [SpinnerCssClasses.IS_UPGRADED]: true
    }, className);

    return (
      <div
        className={classes}
        {...otherProps}
      >
        {this.renderLayers(4)}
      </div>
    );
  }
}

export default Spinner;
