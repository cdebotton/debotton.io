/** @flow */

var React = require('react/addons');
var config = require('../../config');
var {Link, State: RouterStateMixin} = require('react-router');
var {classSet} = React.addons;

var Cube = require('../Common/Cube.jsx');

var Navigation = React.createClass({
  mixins: [RouterStateMixin],

  render(): any {
    var routes: Object = this.getRoutes();
    var routeName = routes[routes.length - 1].name;

    var cx: any = classSet({
      'header': true,
      'active': routeName !== 'index'
    });

    return (
      <header className={cx}>
        <h1>{config.title}</h1>
        <nav>
          <Link to="index">
            <Cube side="right">
              <i className="fa fa-home" />
            </Cube>
          </Link>
          <Link to="work">
            <Cube side="right">
              <i className="fa fa-code" />
            </Cube>
          </Link>
          <Link to="blog">
            <Cube side="right">
              <i className="fa fa-pencil" />
            </Cube>
          </Link>
        </nav>
      </header>
    );
  }
});

module.exports = Navigation;
