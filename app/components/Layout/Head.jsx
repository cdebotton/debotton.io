/** @flow */

var React = require('react');
var config = require('../../config');
var StoreMixin = require('../../mixins/StoreMixin');
var PageStore = require('../../stores/PageStore');

var Head = React.createClass({
  propTypes: {
    meta: React.PropTypes.object.isRequired
  },

  mixins: [StoreMixin(getState, PageStore)],

  getStylesheets(env: string): any {
    var min = env === 'production' ? '.min' : '';

    return (
      <link
        href={'/stylesheets/app' + min + '.css'}
        rel="stylesheet" />
      );
  },

  render(): any {
    var {env} = this.props;
    var {title} = this.props.meta;
    var stylesheets = this.getStylesheets(env);

    return (
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{getTitle(title)}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href='http://fonts.googleapis.com/css?family=Lato:100,200,300,400,500,600,700,800,300italic,400italic|Josefin+Slab:400,600' rel='stylesheet' />
        {stylesheets}
      </head>
    );
  }
});

function getTitle(title) {
  return title === config.title ?
    config.title :
    `${title} | ${config.titleShort}`;
}

function getState(params: Object, query: Object): Object {
  return {page: PageStore.getState()};
}

module.exports = Head;
