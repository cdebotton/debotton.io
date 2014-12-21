/** @flow */

var React             = require('react');
var App               = require('./App.jsx');
var HomeHandler       = require('./Routes/HomeHandler.jsx');
var WorkHandler       = require('./Routes/WorkHandler.jsx');
var BlogHandler       = require('./Routes/BlogHandler.jsx');
var NotFoundHandler   = require('./Routes/NotFoundHandler.jsx');

var {Route, DefaultRoute, NotFoundRoute} = require('react-router');

module.exports = (
  <Route handler={App}>
    <DefaultRoute name="index" handler={HomeHandler} />
    <Route name="work" handler={WorkHandler} />
    <Route name="blog" handler={BlogHandler} />
    <NotFoundRoute handler={NotFoundHandler} />
  </Route>
);
