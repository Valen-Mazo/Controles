//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x372942);

var loader = new THREE.TextureLoader();
loader.load('../imagen/cuaderno.jpg', function(texture){
    scene.background = texture;
});

//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );  



//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE. IcosahedronGeometry( 3, 0 );
const material = new THREE.MeshMatcapMaterial( );
const Icosahedron  = new THREE.Mesh( geometry, material );
scene.add( Icosahedron );
 


camera.position.z = 8;
camera.position.x = 0;
camera.position.y = 0;


const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../imagen/papel.jpg');
material.matcap = matcap;
material.flatShading = true;

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

function animate(){
    requestAnimationFrame(animate) 
    Icosahedron.rotation.y -= 0.02;
    Icosahedron.rotation.z += 0.02;
    Icosahedron.rotation.x += 0.02
    renderer.render(scene, camera);

    line.rotation.y -= 0.02;
    line.rotation.z += 0.02;
    line.rotation.x += 0.02;
    renderer.render(scene, camera);
    }
    animate();