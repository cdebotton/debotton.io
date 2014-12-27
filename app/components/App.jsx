/** @flow */

var React                 = require('react/addons');
var request               = require('superagent');
var co                    = require('co');
var AuthAPI               = require('../utils/AuthAPI');
var AuthStore             = require('../stores/AuthStore');
var StoreMixin            = require('../mixins/StoreMixin');
var AsyncDataMixin        = require('../mixins/AsyncDataMixin');
var {CSSTransitionGroup}  = React.addons;

var Head                  = require('./Layout/Head.jsx');
var Navigation            = require('./Layout/Navigation.jsx');
var Background            = require('./Layout/Background.jsx');

var {RouteHandler} = require('react-router');

var App = React.createClass({
  mixins: [StoreMixin(getState, AuthStore)],

  propTypes: {
    query: React.PropTypes.object.isRequired,
    params: React.PropTypes.object.isRequired,
    env: React.PropTypes.string.isRequired,
    meta: React.PropTypes.object.isRequired
  },

  getBundle(env: string): any {
    var min = env === 'production' ? '.min' : '';

    return (
      <script src={'/bundle' + min + '.js'} />
    );
  },

  render(): any {
    var {env, meta} = this.props;
    var name = this.getRoutes().reverse()[0].name;

    return (
      <html lang="us">
      <Head env={env} meta={meta} />
      <body className={`app ${meta.theme || 'red'}`}>
        <Navigation />
        <CSSTransitionGroup
          className="router"
          transitionName="route"
          component="div">
          <RouteHandler key={name} {...this.props} />
        </CSSTransitionGroup>
        <Background />
        {this.getBundle(env)}
      </body>
      </html>
    );
  }
});

function getState(params: Object, query: Object): Object {
  return {user: AuthStore.getCurrentUser()};
}

module.exports = App;
