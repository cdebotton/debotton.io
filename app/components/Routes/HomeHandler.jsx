/** @flow */

var React = require('react');
var {Link} = require('react-router');
var config = require('../../config');
var AnimatedText = require('../Common/AnimatedText.jsx');

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
          <h2><AnimatedText duration={'0.6s'} delay={'0.25s'} underlined={true}>Oh, hello!</AnimatedText></h2>
          <p>My name is Christian de Botton, and I&apos;m a developer based out of New York.</p>
          <p>I am a fullstack developer who specializes in creating rich, dynamic web applications, and I&apos;m currently the Technical Director at <a href="http://brooklynunited.com" target="_blank">Brooklyn United</a>.</p>
        </div>
        <div className="col">

        </div>
      </div>
    );
  }
});

module.exports = HomeHandler;
