/** @flow */

var React = require('react');

var WorkHandler = React.createClass({
  statics: {
    getPageTitle(): string {
      return 'work';
    }
  },

  render(): any {
    return (
      <div className="work-handler">
        <h2>WorkHandler</h2>
        <p>This page will be the work aggregator.</p>
      </div>
    );
  }
});

module.exports = WorkHandler;
