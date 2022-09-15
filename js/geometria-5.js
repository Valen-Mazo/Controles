//escenario
const scene = new THREE.Scene();

scene.fog = new THREE.Fog(0xFFFFFF, 4, 10);


var loader = new THREE.TextureLoader();
loader.load('../imagen/IMAGEN-FONDO.jpg', function(texture){
    scene.background = texture;
});

//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );  



//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.SphereGeometry( 3, 15, 13 );
const material = new THREE.MeshMatcapMaterial(  );
const sphere = new THREE.Mesh( geometry, material );

scene.add( sphere );

const fog = new THREE.Fog(  0x000000, 2, 35);

camera.position.z = 8;
camera.position.x = 3;
camera.position.y = 0.01;

const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../imagen/luna.jpg');
material.matcap = matcap;
material.flatShading = true;

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

function animate(){
    requestAnimationFrame(animate) 
    sphere.rotation.y -= 0.03;
    sphere.rotation.z += 0.01;
    renderer.render(scene, camera);
    line.rotation.y -= 0.03;
    line.rotation.z += 0.01;
    renderer.render(scene, camera);
    }
    animate();