/** @flow */

var React = require('react');

var BlogHandler = React.createClass({
  statics: {
    getPageMeta(): string {
      return 'blog';
    }
  },

  render(): any {
    return (
      <div className="blog-handler">
        <h2>BlogHandler</h2>
        <p>This page will be the blog post aggregator.</p>
      </div>
    );
  }
});

module.exports = BlogHandler;
