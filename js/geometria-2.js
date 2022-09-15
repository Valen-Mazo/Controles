//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x372942);

var loader = new THREE.TextureLoader();
loader.load('../imagen/fondosmadera.jpg', function(texture){
    scene.background = texture;
});

//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );  



//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.CylinderGeometry( 2, 2, 5, 7 );
const material = new THREE.MeshMatcapMaterial( {color: 0xA9CCE3 } );
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );
 


camera.position.z = 10;
camera.position.x = 2;
camera.position.y = 1;


const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../imagen/madera.jpg');
material.matcap = matcap;
material.flatShading = true;

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

function animate(){
    requestAnimationFrame(animate) 
    cylinder.rotation.y -= 0.02;
    cylinder.rotation.z += 0.02;
    cylinder.rotation.x += 0.02
    renderer.render(scene, camera);

    line.rotation.y -= 0.02;
    line.rotation.z += 0.02;
    line.rotation.x += 0.02;
    renderer.render(scene, camera);
    }
    animate();
    