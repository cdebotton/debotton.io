/** @flow */

var React = require('react/addons');
var {TransitionGroup, classSet} = React.addons;

var {toString} = Object.prototype;

var AnimatedTextGroup = React.createClass({
  propTypes: {
    children: React.PropTypes.string.isRequired,
    underlined: React.PropTypes.bool.isRequired,
    delay: React.PropTypes.string,
    duration: React.PropTypes.string.isRequired,
    Element: React.PropTypes.string.isRequired
  },

  getDefaultProps(): Object {
    return {underlined: false, duration: '1s', element: 'h2', delay: '0s'};
  },

  render(): any {
    var {duration, underlined, children, Element, delay, ...props} = this.props;
    var cx = classSet({
      'animated-text-group': true,
      'underlined': underlined
    });

    var delayer = parseFloat(delay, 10);
    var chars = children.split('');
    var incrementor = (parseFloat(duration, 10) / chars.length);
    var units = /\d+\.?\d+?(s|ms)/.exec(duration)[1];
    var children = chars.map(wrapChars(incrementor, units, delayer));

    return (
      <Element
        {...props}
        className={cx}>
        {children}
        {this._getBorder()}
      </Element>
    );
  },

  _getBorder(): any {
    var {underlined, children, delay, duration} = this.props;
    var styles = setCSS3({}, 'animationDuration', duration)
    styles = setCSS3(styles, 'animationDelay', parseFloat(delay, 10) + 's');
    return underlined ? (
      <span
        style={styles}
        className="border" />
    ) : false;
  }
});

function setCSS3(obj, prop, value) {
  var vendors = ['Webkit', 'Moz', 'Ms', 'O'];
  obj[prop] = value;
  vendors.forEach(prefix => obj[prefix+prop.split('')[0].toUpperCase().concat(prop.slice(1))] = value);
  return obj;
};

function wrapChars(incrementor: number, units: string, delayer: number): Function {
  var __ID = 0;
  var __SPACES = 0;

  return function wrapChild(elem: Array<any>|any|string): any {
    if (! /\s/.test(elem)) {
      var key = 'char:' + (++__ID);
    }
    else {
      var key = 'space:' + (++__SPACES);
      elem = '&nbsp;';
    }
    var styles = setCSS3({}, 'animationDuration', (incrementor * __ID) + units);
    styles = setCSS3(styles, 'animationDelay', delayer + units);

    return (
      <span
        key={key}
        style={styles}
        className="animated-text-group-child"
        dangerouslySetInnerHTML={{__html:elem}}>
      </span>
    );
  }
}

module.exports = AnimatedTextGroup;
