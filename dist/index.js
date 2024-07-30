'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lottieWebBuildPlayerLottie_light = require('lottie-web/build/player/lottie_light');

var _lottieWebBuildPlayerLottie_light2 = _interopRequireDefault(_lottieWebBuildPlayerLottie_light);

var Lottie = (function (_React$Component) {
  _inherits(Lottie, _React$Component);

  function Lottie() {
    _classCallCheck(this, Lottie);

    _get(Object.getPrototypeOf(Lottie.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Lottie, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props;
      var options = _props.options;
      var eventListeners = _props.eventListeners;
      var loop = options.loop;
      var autoplay = options.autoplay;
      var animationData = options.animationData;
      var rendererSettings = options.rendererSettings;
      var segments = options.segments;

      this.options = {
        container: this.el,
        renderer: 'svg',
        loop: loop !== false,
        autoplay: autoplay !== false,
        segments: segments !== false,
        animationData: animationData,
        rendererSettings: rendererSettings
      };

      this.options = _extends({}, this.options, options);

      this.anim = _lottieWebBuildPlayerLottie_light2['default'].loadAnimation(this.options);
      this.registerEvents(eventListeners);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps /* , nextState */) {
      /* Recreate the animation handle if the data is changed */
      if (this.options.animationData !== nextProps.options.animationData) {
        this.deRegisterEvents(this.props.eventListeners);
        this.destroy();
        this.options = _extends({}, this.options, nextProps.options);
        this.anim = _lottieWebBuildPlayerLottie_light2['default'].loadAnimation(this.options);
        this.registerEvents(nextProps.eventListeners);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.isStopped) {
        this.stop();
      } else if (this.props.segments) {
        this.playSegments();
      } else {
        this.play();
      }

      this.pause();
      this.setSpeed();
      this.setDirection();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.deRegisterEvents(this.props.eventListeners);
      this.destroy();
      this.options.animationData = null;
      this.anim = null;
    }
  }, {
    key: 'setSpeed',
    value: function setSpeed() {
      this.anim.setSpeed(this.props.speed);
    }
  }, {
    key: 'setDirection',
    value: function setDirection() {
      this.anim.setDirection(this.props.direction);
    }
  }, {
    key: 'play',
    value: function play() {
      this.anim.play();
    }
  }, {
    key: 'playSegments',
    value: function playSegments() {
      this.anim.playSegments(this.props.segments);
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.anim.stop();
    }
  }, {
    key: 'pause',
    value: function pause() {
      if (this.props.isPaused && !this.anim.isPaused) {
        this.anim.pause();
      } else if (!this.props.isPaused && this.anim.isPaused) {
        this.anim.pause();
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.anim.destroy();
    }
  }, {
    key: 'registerEvents',
    value: function registerEvents(eventListeners) {
      var _this = this;

      eventListeners.forEach(function (eventListener) {
        _this.anim.addEventListener(eventListener.eventName, eventListener.callback);
      });
    }
  }, {
    key: 'deRegisterEvents',
    value: function deRegisterEvents(eventListeners) {
      var _this2 = this;

      eventListeners.forEach(function (eventListener) {
        _this2.anim.removeEventListener(eventListener.eventName, eventListener.callback);
      });
    }
  }, {
    key: 'handleClickToPause',
    value: function handleClickToPause() {
      // The pause() method is for handling pausing by passing a prop isPaused
      // This method is for handling the ability to pause by clicking on the animation
      if (this.anim.isPaused) {
        this.anim.play();
      } else {
        this.anim.pause();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props;
      var width = _props2.width;
      var height = _props2.height;
      var ariaRole = _props2.ariaRole;
      var ariaLabel = _props2.ariaLabel;
      var isClickToPauseDisabled = _props2.isClickToPauseDisabled;
      var title = _props2.title;

      var getSize = function getSize(initial) {
        var size = undefined;

        if (typeof initial === 'number') {
          size = initial + 'px';
        } else {
          size = initial || '100%';
        }

        return size;
      };

      var lottieStyles = _extends({
        width: getSize(width),
        height: getSize(height),
        overflow: 'hidden',
        margin: '0 auto',
        outline: 'none'
      }, this.props.style);

      var onClickHandler = isClickToPauseDisabled ? function () {
        return null;
      } : this.handleClickToPause;

      return(
        // Bug with eslint rules https://github.com/airbnb/javascript/issues/1374
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        _react2['default'].createElement('div', {
          ref: function (c) {
            _this3.el = c;
          },
          style: lottieStyles,
          onClick: onClickHandler,
          title: title,
          role: ariaRole,
          'aria-label': ariaLabel,
          tabIndex: '0'
        })
      );
    }
  }]);

  return Lottie;
})(_react2['default'].Component);

exports['default'] = Lottie;

Lottie.propTypes = {
  eventListeners: _propTypes2['default'].arrayOf(_propTypes2['default'].object),
  options: _propTypes2['default'].object.isRequired,
  height: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number]),
  width: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number]),
  isStopped: _propTypes2['default'].bool,
  isPaused: _propTypes2['default'].bool,
  speed: _propTypes2['default'].number,
  segments: _propTypes2['default'].arrayOf(_propTypes2['default'].number),
  direction: _propTypes2['default'].number,
  ariaRole: _propTypes2['default'].string,
  ariaLabel: _propTypes2['default'].string,
  isClickToPauseDisabled: _propTypes2['default'].bool,
  title: _propTypes2['default'].string,
  style: _propTypes2['default'].string
};

Lottie.defaultProps = {
  eventListeners: [],
  isStopped: false,
  isPaused: false,
  speed: 1,
  ariaRole: 'button',
  ariaLabel: 'animation',
  isClickToPauseDisabled: false,
  title: ''
};
module.exports = exports['default'];