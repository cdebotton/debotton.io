/** @flow */

var React = require('react');
var config = require('../../config');

var HomeHandler = React.createClass({
  statics: {
    getPageTitle(): string {
      return config.title;
    }
  },

  render(): any {
    return (
      <div className="home-handler">
        <div className="col">
          <h2>Oh, hello!</h2>
          <p>My name is Christian de Botton, and I&apos;m a developer based out of New York.</p>
          <p>I am a fullstack developer who specializes in creating rich, dynamic web applications, and I&apos;m currently the Technical Director at Brooklyn United.</p>
        </div>
      </div>
    );
  }
});

module.exports = HomeHandler;
