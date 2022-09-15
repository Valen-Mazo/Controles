//escenario
const scene = new THREE.Scene();


scene.fog = new THREE.Fog(0xFFFFFF, 1, 6);

var loader = new THREE.TextureLoader();
loader.load('../imagen/background.jpg', function(texture){
    scene.background = texture;
});







//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );  //75 es la profundidad
//far-lejos    near- cerca


//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.BoxGeometry( 1, 1, 1 ); //lo del parentesis es el alto,ancho, profundidad
const material = new THREE.MeshMatcapMaterial(); //el mesh es para los amteriales-->para que se vean



const cube1 = new THREE.Mesh( geometry, material );
const fog = new THREE.Fog(  0x000000, 3, 300);
cube1.position.x = 0.01

scene.add( cube1 );

camera.position.z = 6;

const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../imagen/summer.jpg');
material.matcap = matcap;
material.flatShading = true;


const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

//ORBIT CONTROL
/*var control = new THREE.OrbitControls( camera, renderer.domElement);
control.minDistance = 3;
control.maxDistance = 9;*/


//POINTERLOCKCONTROLS
/* const PointerLockControls = new THREE.PointerLockControls( camera, renderer.domElement);
document.getElementById('btnplay').onclick = () =>{
    PointerLockControls.lock();
} 
*/


//cube
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshNormalMaterial()
    
    
    );
    
    cube2.position.x = 6 ;
    
    
    
    
    
    const cube3 = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshNormalMaterial()
        
        );
        cube3.position.x = -6;
        
        
        const cube4 = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE .MeshNormalMaterial()
        );
        cube4.position.x = -3;
        
        
        
        scene.add(cube1, cube2, cube3, cube4);
        
        //DragControls
        var objetos = [cube1, cube2, cube3, cube4 ]
        const controls = new THREE.DragControls( objetos, camera, renderer.domElement );
        
        const control = new THREE.DragControls(objetos, camera, renderer.domElement)
        control.deactivate();
        control.activate();
        
        control.addEventListener("hoveron",function(event){
            event.object.material.wireframe = true;
            event.object.scale.y *= 4;
        })
        
        control.addEventListener("hoveroff", function(event){
            event.object.material.wireframe = false;
            event.object.scale.y /=4;
        })
        
        
        const flyControls = new THREE.FlyControls(camera, renderer.domElement);
        flyControls.movementSpeed =50;
        flyControls.rollSpeed =0.01;
        flyControls.autoForward =false;
        flyControls.dragToLock =false;

       
         
        
        //animacion
        function animate(){
            requestAnimationFrame(animate) //request- llama el espacio completo del frame--->
            //llama a si misma la función del animación, para poder funcionar
            cube1.rotation.y += 0.03;
            cube1.rotation.z += 0.01;
            renderer.render(scene, camera);
            
           
            renderer.render(scene, camera);
            cube2.rotation.y += 0.03;
            cube2.rotation.z += 0.01;
            cube3.rotation.y += 0.03;
            cube3.rotation.z += 0.01;
            cube4.rotation.y += 0.03;
            cube4.rotation.z += 0.01;


            flyControls.update(0.5);
        

            line.rotation.y += 0.03;
            line.rotation.z += 0.01;
}
animate();


