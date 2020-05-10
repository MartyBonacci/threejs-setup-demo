// get window size
var width = window.innerWidth;
var height = window.innerHeight;

document.body.style.height = `${height}px`
document.body.style.width = `${width}px`

// make new THREE renderer
var renderer = new THREE.WebGLRenderer({antialias:true})

// set scene/renderer size
renderer.setSize(width, height)

// set background color to grey
renderer.setClearColor(0x676767, 1)

// add to dom
document.body.appendChild(renderer.domElement)

// make a new scene
var scene = new THREE.Scene()

// make a camera, set it's position and add it to the scene
var camera = new THREE.PerspectiveCamera(75, width/height)
camera.position.z = 50
scene.add(camera)



// make a box
var boxGeometry = new THREE.BoxGeometry(10, 15, 20)

// make an orange material
var basicMaterial = new THREE.MeshBasicMaterial({
    color: 0xf26229,
    // make it wireframe so you can see it's 3 dimensional
    // wireframe: true
})

// make a mesh from geometry and material
var basicBox = new THREE.Mesh(boxGeometry, basicMaterial)

// add box to scene
scene.add(basicBox)

// rotate the box so you can see it's 3 dimensional
basicBox.rotation.set(0.4, 0.2, 0)

// move the box over to add some other shapes
basicBox.position.x = -30

// make phong material
var phongMaterial = new THREE.MeshPhongMaterial({
    color: 0xf26229,
})

// make lambert material
var lambertMaterial = new THREE.MeshLambertMaterial({
    color: 0xf26229,
})

var phongBox = new THREE.Mesh(boxGeometry, phongMaterial)
var lambertBox = new THREE.Mesh(boxGeometry,lambertMaterial)

scene.add(phongBox)
scene.add(lambertBox)

phongBox.rotation.set(0.4, 0.2, 0)
lambertBox.rotation.set(0.4, 0.1, 0)

lambertBox.position.x = 30

// add some lighting so you can see the color of the phong and lambert materials
var light = new THREE.PointLight(0xFFFFFF)
light.position.set(-15, 15, 60)
scene.add(light)

// render function to render the scene and display it with the camera
render = () => {
    requestAnimationFrame(render)

    // rotate phong box
    phongBox.rotation.x += 0.004
    phongBox.rotation.y += 0.002

    renderer.render(scene, camera)
}

// run render function
render();

