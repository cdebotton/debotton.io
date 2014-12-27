/** @flow */

var invariant = require('react/lib/invariant');
var THREE = require('three');

module.exports = function(cb: Function): any {
  var renderID: ?number = null;
  var _scene: Object;

  return {
    getTHREE(): Object {
      return THREE;
    },

    componentWillMount(): void {
      this.THREE = THREE;
    },

    componentDidMount(): void {
      var {scene, camera, renderer} = generateScene();

      this.getDOMNode().appendChild(renderer.domElement);
      var objects = this.setupScene(scene, camera, renderer);

      window.addEventListener('resize', onResize.bind(null, renderer, camera), false)
      var start = loop(scene, camera, renderer, objects, cb);
      start();
    },

    componentWillUnmount(): void {
      cancelAnimationFrame(renderID);
      delete this.THREE;
      this.removeEventListener('resize', onResize, false);
    }
  };
};

function onResize(renderer: Object, camera: Object): void {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}

function generateScene(): Object {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer({alpha: true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.z = 5;
  return {scene, camera, renderer};
};

function loop(scene: Object, camera: Object, renderer: Object, objects: Object, cb: Function): Function {
  return function animate() {
    renderID = requestAnimationFrame(animate);
    cb(scene, camera, renderer, objects);
    renderer.render(scene, camera);
  }
};
