//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xA9CCE3 );
;
var loader = new THREE.TextureLoader();
loader.load('../imagen/fondocafe.jpg', function(texture){
    scene.background = texture;
});

//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );  



//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.CapsuleGeometry( 2, 3,  3, 9 );
const material = new THREE.MeshMatcapMaterial( {color: 0xF1948A} );
const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );


camera.position.z = 10;
camera.position.x = 2;
camera.position.y = 1;

const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../imagen/cafe.jpg');
material.matcap = matcap;
material.flatShading = true;

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

function animate(){
    requestAnimationFrame(animate) 
    capsule.rotation.y -= 0.03;
    capsule.rotation.z += 0.01;
    renderer.render(scene, camera);

    line.rotation.y -= 0.03;
    line.rotation.z += 0.01;
    renderer.render(scene, camera);
    }
    animate();
    