/** @flow */

"use strict";

var Immutable = require('immutable');
var React = require('react');
var ThreeMixin = require('../../mixins/ThreeMixin');

var Background = React.createClass({
  mixins: [ThreeMixin(renderLoop)],

  setupScene(scene: Object, camera: Object, renderer: Object): void {
    var THREE = this.getTHREE();

    var ambientLight = new THREE.AmbientLight(0x000022);
    ambientLight.position.set(50, 50, 50);

    var directionalLight = new THREE.DirectionalLight({color: 0xFFFFFF});
    directionalLight.position.set(1, 1, 5).normalize();

    var cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshLambertMaterial({color: 0xFF0000})
    );

    scene.add(cube, directionalLight, ambientLight);

    return {ambientLight, directionalLight, cube};
  },

  render(): void {
    return (
      <div className="three-container" />
    );
  }
});

function renderLoop(scene: Object, camera: Object, renderer: Object, objects: Object) {
  objects.cube.rotation.z += 0.01;
  objects.cube.rotation.y += 0.01;
}

module.exports = Background;
