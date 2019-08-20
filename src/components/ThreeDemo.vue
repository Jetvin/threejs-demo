<template>
  <div id="three-demo">

  </div>
</template>

<script>
  import * as THREE from 'three'
  // import OBJLoader from 'three/examples/js/loaders/OBJLoader'
  // import MTLLoader from 'three/examples/js/loaders/MTLLoader'

  export default {
    name: 'ThreeDemo',
    data () {
      return {
        scene: null,
        renderer: null,
        camera: null,
        mesh: null
      }
    },
    methods: {
      init: function () {
        this.initScene();
        this.initCamera();
        this.initMesh();
        this.initRender();
      },
      initScene: function () {
        this.scene = new THREE.Scene();
        let spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(-40, 60, -10);
        spotLight.castShadow = true;
        this.scene.add(spotLight);

      },
      initRender: function () {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth/2, window.innerHeight/2);
        this.renderer.render(this.scene, this.camera);

        let container = document.getElementById('three-demo');
        container.appendChild(this.renderer.domElement);
      },
      initCamera: function () {
        this.camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.01, 10);
        this.camera.position.set(0, 200, 100);
        this.camera.lookAt(this.scene.position);
      },
      initMesh: function () {
        let geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        let material = new THREE.MeshNormalMaterial();

        this.mesh = new THREE.Mesh(geometry, material);
        this.scene.add(this.mesh);
      }
    },
    mounted(){
      this.init();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
