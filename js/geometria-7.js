//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x372942);

var loader = new THREE.TextureLoader();
loader.load('../imagen/fondoespacio.jpg', function(texture){
    scene.background = texture;
});

//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );  



//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.TorusGeometry( 6, 1, 8, 20 );
const material = new THREE.MeshMatcapMaterial( );
const torus = new THREE.Mesh( geometry, material );
scene.add( torus );
 


camera.position.z = 19;
camera.position.x = 4;
camera.position.y = 0;


const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../imagen/metalizada.jpg');
material.matcap = matcap;
material.flatShading = true;

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

function animate(){
    requestAnimationFrame(animate) 
    torus.rotation.y -= 0.02;
    torus.rotation.z += 0.02;
    torus.rotation.x += 0.02
    renderer.render(scene, camera);

    line.rotation.y -= 0.02;
    line.rotation.z += 0.02;
    line.rotation.x += 0.02;
    renderer.render(scene, camera);
    }
    animate();