/** @flow */

var assign = require('react/lib/Object.assign');

module.exports = function getMeta(routes, params, query) {
  return routes.reduce(function(memo, route) {
    var handler = route.handler;
    if ('function' === typeof handler.getPageMeta) {
      return assign({}, memo, handler.getPageMeta(params, query));
    }
  }, {});
};
