import window from 'global/window';

export class MaterialRipple {
  constructor(element) {
    this.element_ = element;
    this.init();
  }

  Constant_ = {
    INITIAL_SCALE: 'scale(0.0001, 0.0001)',
    INITIAL_SIZE: '1px',
    INITIAL_OPACITY: '0.4',
    FINAL_OPACITY: '0',
    FINAL_SCALE: ''
  };

  CssClasses_ = {
    RIPPLE_CENTER: 'mdl-ripple--center',
    RIPPLE_EFFECT_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
    RIPPLE: 'mdl-ripple',
    IS_ANIMATING: 'is-animating',
    IS_VISIBLE: 'is-visible'
  };

  downHandler_(event) {
    if (!this.rippleElement_.style.width && !this.rippleElement_.style.height) {
      const rect = this.element_.getBoundingClientRect();
      this.boundHeight = rect.height;
      this.boundWidth = rect.width;
      this.rippleSize_ = Math.sqrt(rect.width * rect.width + rect.height * rect.height) * 2 + 2;
      this.rippleElement_.style.width = this.rippleSize_ + 'px';
      this.rippleElement_.style.height = this.rippleSize_ + 'px';
    }

    this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE);

    if (event.type === 'mousedown' && this.ignoringMouseDown_) {
      this.ignoringMouseDown_ = false;
    } else {
      if (event.type === 'touchstart') {
        this.ignoringMouseDown_ = true;
      }
      const frameCount = this.getFrameCount();
      if (frameCount > 0) {
        return;
      }
      this.setFrameCount(1);
      const bound = event.currentTarget.getBoundingClientRect();
      let x;
      let y;
      // Check if we are handling a keyboard click.
      if (event.clientX === 0 && event.clientY === 0) {
        x = Math.round(bound.width / 2);
        y = Math.round(bound.height / 2);
      } else {
        const clientX = event.clientX ? event.clientX : event.touches[0].clientX;
        const clientY = event.clientY ? event.clientY : event.touches[0].clientY;
        x = Math.round(clientX - bound.left);
        y = Math.round(clientY - bound.top);
      }
      this.setRippleXY(x, y);
      this.setRippleStyles(true);
      window.requestAnimationFrame(this.animFrameHandler.bind(this));
    }
  }

  upHandler_(event) {
    if (event && event.detail !== 2) {
      this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE);
    }
    window.setTimeout(() => {
      this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE);
    }, 0);
  }

  init() {
    if (this.element_) {
      const recentering = this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);
      if (!this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)) {
        this.rippleElement_ = this.element_.querySelector('.' + this.CssClasses_.RIPPLE);
        this.frameCount_ = 0;
        this.rippleSize_ = 0;
        this.x_ = 0;
        this.y_ = 0;

        // Touch start produces a compat mouse down event, which would cause a
        // second ripples. To avoid that, we use this property to ignore the first
        // mouse down after a touch start.
        this.ignoringMouseDown_ = false;

        this.boundDownHandler = this.downHandler_.bind(this);
        this.element_.addEventListener('mousedown', this.boundDownHandler);
        this.element_.addEventListener('touchstart', this.boundDownHandler);

        this.boundUpHandler = this.upHandler_.bind(this);
        this.element_.addEventListener('mouseup', this.boundUpHandler);
        this.element_.addEventListener('mouseleave', this.boundUpHandler);
        this.element_.addEventListener('touchend', this.boundUpHandler);
        this.element_.addEventListener('blur', this.boundUpHandler);

        /**
         * Getter for frameCount_.
         * @return {number} the frame count.
         */
        this.getFrameCount = () => {
          return this.frameCount_;
        };

        /**
         * Setter for frameCount_.
         * @param {number} fC the frame count.
         */
        this.setFrameCount = (fC) => {
          this.frameCount_ = fC;
        };

        /**
         * Getter for rippleElement_.
         * @return {Element} the ripple element.
         */
        this.getRippleElement = () => {
          return this.rippleElement_;
        };

        /**
         * Sets the ripple X and Y coordinates.
         * @param  {number} newX the new X coordinate
         * @param  {number} newY the new Y coordinate
         */
        this.setRippleXY = (newX, newY) => {
          this.x_ = newX;
          this.y_ = newY;
        };

        /**
         * Sets the ripple styles.
         * @param  {boolean} start whether or not this is the start frame.
         */
        this.setRippleStyles = (start) => {
          if (this.rippleElement_ !== null) {
            let transformString;
            let scale;
            let offset = 'translate(' + this.x_ + 'px, ' + this.y_ + 'px)';

            if (start) {
              scale = this.Constant_.INITIAL_SCALE;
            } else {
              scale = this.Constant_.FINAL_SCALE;
              if (recentering) {
                offset = 'translate(' + this.boundWidth / 2 + 'px, ' + this.boundHeight / 2 + 'px)';
              }
            }

            transformString = 'translate(-50%, -50%) ' + offset + scale;

            this.rippleElement_.style.webkitTransform = transformString;
            this.rippleElement_.style.msTransform = transformString;
            this.rippleElement_.style.transform = transformString;

            if (start) {
              this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING);
            } else {
              this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING);
            }
          }
        };

        /**
         * Handles an animation frame.
         */
        this.animFrameHandler = () => {
          if (this.frameCount_-- > 0) {
            window.requestAnimationFrame(this.animFrameHandler.bind(this));
          } else {
            this.setRippleStyles(false);
          }
        };
      }
    }
  }

  mdlDowngrade() {
    this.element_.removeEventListener('mousedown', this.boundDownHandler);
    this.element_.removeEventListener('touchstart', this.boundDownHandler);

    this.element_.removeEventListener('mouseup', this.boundUpHandler);
    this.element_.removeEventListener('mouseleave', this.boundUpHandler);
    this.element_.removeEventListener('touchend', this.boundUpHandler);
    this.element_.removeEventListener('blur', this.boundUpHandler);
  }
}
