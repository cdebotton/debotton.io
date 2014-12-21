/** @flow */

var React = require('react');
var {Link} = require('react-router');
var config = require('../../config');

var Cube = require('../Common/Cube.jsx');

var Navigation = React.createClass({
  render(): any {
    return (
      <header className="header">
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
