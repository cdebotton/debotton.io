/** @flow */

var React = require('react');

var AboutHandler = React.createClass({
  statics: {
    getPageTitle(): string {
      return 'about me';
    }
  },

  render(): any {
    return (
      <div className="about-handler">
        <h2>AboutHandler</h2>
        <p>This will be the about page.</p>
      </div>
    );
  }
});

module.exports = AboutHandler;
