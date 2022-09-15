const scene = new THREE.Scene();
scene.background = new THREE.Color(0x372942);

var loader = new THREE.TextureLoader();
loader.load('../imagen/espacio3.jpg', function(texture){
    scene.background = texture;
});

//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );  



//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria

const points = [];
for ( let i = 0; i < 10; i ++ ) {
	points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
}
const geometry = new THREE.LatheGeometry( points );
const material = new THREE.MeshNormalMaterial();
const lathe = new THREE.Mesh( geometry, material );
scene.add( lathe );

camera.position.z = 30;
camera.position.x = 4;
camera.position.y = 0;


const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load();
material.matcap = matcap;
material.flatShading = true;

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

function animate(){
    requestAnimationFrame(animate) 
    lathe.rotation.y -= 0.02;
    lathe.rotation.z += 0.02;
    lathe.rotation.x += 0.02
    renderer.render(scene, camera);

    line.rotation.y -= 0.02;
    line.rotation.z += 0.02;
    line.rotation.x += 0.02;
    renderer.render(scene, camera);
    }
    animate();