var scene, renderer, camera, controls, cube;
document.getElementById('files').addEventListener('change',
    getData,
    false);
init();

var terrainData = []
var loadedData = false

function init() {
    renderer = new THREE.WebGLRenderer();

    //this is to get the correct pixel detail on portable devices
    renderer.setPixelRatio(window.devicePixelRatio);

    //and this sets the canvas' size.
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.BasicShadowMap
    document.body.appendChild(renderer.domElement);

    scene = new THREE.Scene();

    light = new THREE.AmbientLight(0xffffff, 0.2)
    scene.add(light)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    scene.add(directionalLight);
    // camera = new THREE.PerspectiveCamera(
    //     70,                                         //FOV
    //     window.innerWidth / window.innerHeight,     //aspect
    //     1,                                          //near clipping plane
    //     100                                         //far clipping plane
    // );
    let width = 160
    let height = 90
    camera = new THREE.OrthographicCamera(width / - 2, width / 2, height / 2, height / - 2, 1, 1000);

    camera.position.set(1, 10, 30);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.rotateSpeed = .7;
    controls.enableDamping = true;
    controls.dampingFactor = .05;

    window.addEventListener('resize', function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }, false);

    animate();
}

function animate() {
    if (loadedData) {
        generateMap()
        loadedData = false
    }
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

function generateMap() {
    let minHeight = terrainData[0].z
    for (let i = 0; i < terrainData.length; i++) {
        if (terrainData[i].z <= minHeight) {
            minHeight = terrainData[i].z
        }
    }

    terrainData.map(cell => {
        let height = (cell.z + Math.abs(minHeight)) * 3
        let box = new THREE.Mesh(
            new THREE.BoxGeometry(1, height, 1),
            new THREE.MeshPhongMaterial()
        );

        scene.add(box);
        box.position.set(cell.x, (height / 2), cell.y)

        // var outlineMaterial1 = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });
        // var outlineMesh1 = new THREE.Mesh(new THREE.BoxGeometry(1, height, 1), outlineMaterial1);
        // scene.add(outlineMesh1);
        // outlineMesh1.position.set(cell.x, (height / 2), cell.y)
    })
}

function getData(input) {
    let reader = new FileReader();
    let file = input.target.files[0];

    reader.readAsText(file);
    reader.onload = function () {
        result = reader.result.split("\n")

        for (var i = 0; i < result.length; i++) {
            let data = result[i].split(",")
            if (data[0] == "CELL") {
                terrainData.push({ x: Number(data[1]), y: Number(data[2]), z: Number(data[3]) })
            }
        }
        loadedData = true
    };
}