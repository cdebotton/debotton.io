/** @flow */

var React = require('react');
var THREE = require('three');

var scene, camera, renderer, cube;
function render() {
  requestAnimationFrame(render);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};

var Background = React.createClass({
  componentDidMount(): void {
    window.addEventListener('resize', this.onResize, false)

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize(window.innerWidth, window.innerHeight);

    this.refs.container.getDOMNode().appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    var light = new THREE.AmbientLight(0x000022);
    light.position.set(50, 50, 50);
    scene.add(light);

    var directional = new THREE.DirectionalLight(0xFFFFFF);
    directional.position.set(1, 1, 1).normalize();
    scene.add(directional);

    camera.position.z = 5;

    render();
  },

  componentWillUnmount(): void {
    this.removeEventListener('resize', this.onResize, false);
  },

  onResize(): void {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  },

  render(): void {
    return (
      <div
        ref="container"
        className="three-container" />
    );
  }
});

module.exports = Background;
