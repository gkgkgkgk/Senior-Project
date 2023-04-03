var scene, renderer, camera, controls, cube;
document.getElementById('files').addEventListener('change',
    getData,
    false);
init();

var terrainData = []
var paths = []
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
    scene.background = new THREE.Color(0xffffff);

    // light = new THREE.AmbientLight(0xffffff, 0.1)
    // scene.add(light)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 0); //default; light shining from top
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    directionalLight.castShadow = true
    // camera = new THREE.PerspectiveCamera(
    //     70,                                         //FOV
    //     window.innerWidth / window.innerHeight,     //aspect
    //     1,                                          //near clipping plane
    //     100                                         //far clipping plane
    // );
    let width = 320
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
    window.addEventListener("keydown", event => {
        console.log("screenshot!")
        if (event.key === " ") {
            renderer.render(scene, camera);
            const dataURL = renderer.domElement.toDataURL();

            const link = document.createElement("a");

            link.href = dataURL;
            link.download = "scene.png";

            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
        }
    });
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

    minHeight -= 0.001
    let box_mat = new THREE.MeshStandardMaterial({ color: 0xfffffff })

    terrainData.map(cell => {
        let height = (cell.z + Math.abs(minHeight)) * 3
        let box = new THREE.Mesh(
            new THREE.BoxGeometry(1, height, 1),
            box_mat
        );
        box.castShadow = true; //default is false
        box.receiveShadow = false;

        scene.add(box);
        box.position.set(cell.x, (height / 2), cell.y)

        // var outlineMaterial1 = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });
        // var outlineMesh1 = new THREE.Mesh(new THREE.BoxGeometry(1, height, 1), outlineMaterial1);
        // scene.add(outlineMesh1);
        // outlineMesh1.position.set(cell.x, (height / 2), cell.y)
    })


    let colors = [0x008cff, 0xef3b3f, 0x5b9d3f]

    paths.map((path, i) => {
        let points = []
        path.points.map(point => {
            let cell = terrainData.filter(cell => {
                if (cell.x == point.x && point.y == cell.y) {
                    return cell
                }
            })[0]
            let z = (cell.z + Math.abs(minHeight)) * 3.5
            points.push(new THREE.Vector3(point.x, z, point.y))
        })

        const material = new MeshLineMaterial({ color: colors[i], sizeAttenuation: 1, lineWidth: 0.25 });

        const linePoints = new THREE.BufferGeometry().setFromPoints(new THREE.CatmullRomCurve3(points).getPoints(50));
        const line = new MeshLine();
        line.setGeometry(linePoints);
        const mesh = new THREE.Mesh(line, material);
        scene.add(mesh);
    })
}

function getData(input) {
    let reader = new FileReader();
    file = input.target.files[0];

    reader.readAsText(file);
    reader.onload = function () {
        result = reader.result.split("\n")

        for (var i = 0; i < result.length; i++) {
            let data = result[i].split(",")
            if (data[0] == "CELL") {
                terrainData.push({ x: Number(data[1]), y: Number(data[2]), z: Number(data[3]) })
            } else if (data[0] == "POINT") {
                if (paths.length <= Number(data[1])) {
                    let path = { path: Number(data[1]), points: [{ x: Number(data[2]), y: Number(data[3]) }] }
                    paths.push(path)
                } else {
                    paths[Number(data[1])].points.push({ x: Number(data[2]), y: Number(data[3]) })
                }
            }
        }
        loadedData = true
    };
}