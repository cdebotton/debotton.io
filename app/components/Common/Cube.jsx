/** @flow */

var React = require('react');

var Cube = React.createClass({
  propTypes: {
    side: React.PropTypes.string.isRequired
  },

  getDefaultProps(): Object {
    return {to: 'right'};
  },

  render(): any {
    var {children, side, ...props} = this.props;

    return (
      <span className="cube" {...props}>
        <span className="side front">{children}</span>
        <span className={'side ' + side}>{children}</span>
      </span>
    );
  }
});

module.exports = Cube;
