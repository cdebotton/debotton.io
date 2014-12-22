/** @flow */

var React = require('react/addons');
var {TransitionGroup, classSet} = React.addons;

var AnimatedTextGroup = React.createClass({
  propTypes: {
    children: React.PropTypes.string.isRequired,
    underlined: React.PropTypes.bool.isRequired,
    delay: React.PropTypes.string,
    duration: React.PropTypes.string.isRequired
  },

  getDefaultProps(): Object {
    return {underlined: false, duration: '1s'};
  },

  render(): any {
    var {duration, underlined, children, ...props} = this.props;
    var cx = classSet({
      'animated-text-group': true,
      'underlined': underlined
    });
    var incrementer = parseFloat(duration, 10) / children.length;

    return (
      <span
        {...props}
        children={children.split('').map(this._wrapChild(incrementer)).concat([this._getBorder()])}
        className={cx} />
    );
  },

  _getBorder(): any {
    var {duration, underlined, children} = this.props;
    var delays = {
      animationDuration: duration,
      WebkitAnimationDuration: duration,
      MozAnimationDuration: duration,
      MsAnimationDuration: duration
    };

    return underlined ? (
      <div
        style={delays}
        className="border" />
    ) : false;
  },

  _wrapChild(incrementer: number): Function {
    var {duration} = this.props;
    var timeRe = new RegExp('^.+(s|ms)$', 'i');
    var baseDelay = parseFloat(this.props.delay, 10) || 0;
    return function(child: any, i: number): any {
      var delay = ((i * incrementer) + baseDelay) + timeRe.exec(duration)[1];
      var delays = {
        animationDelay: delay,
        WebkitAnimationDelay: delay,
        MozAnimationDelay: delay,
        MsAnimationDelay: delay
      };

      return (
        <span
          className="animated-text-group-child"
          style={delays}>
          {child}
        </span>
      );
    }
  }
});

module.exports = AnimatedTextGroup;
