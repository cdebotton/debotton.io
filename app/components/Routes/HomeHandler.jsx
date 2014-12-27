/** @flow */

var React = require('react');
var {Link} = require('react-router');
var config = require('../../config');
var AnimatedText = require('../Common/AnimatedText.jsx');

var HomeHandler = React.createClass({
  statics: {
    getPageMeta(): string {
      return {title: config.title, theme: 'red'};
    }
  },

  render(): any {
    return (
      <div className="home-handler" ref="container">
        <h2>Oh, hello!</h2>
        <p>My name is Christian de Botton and I&apos;m a fullstack developer based in New York City.</p>
      </div>
    );
  }
});

module.exports = HomeHandler;
