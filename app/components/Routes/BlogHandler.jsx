/** @flow */

var React = require('react');

var BlogHandler = React.createClass({
  statics: {
    getPageTitle(): string {
      return 'blog';
    }
  },

  render(): any {
    return (
      <div className="blog-handler">
        <h2>BlogHandler</h2>
      </div>
    );
  }
});

module.exports = BlogHandler;
