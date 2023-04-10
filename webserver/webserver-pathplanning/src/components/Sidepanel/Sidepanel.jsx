import React, { useState } from 'react';
import "./Sidepanel.css"

function SidePanel(props) {
    const [mapSize, setMapSize] = useState(32)
    const [cellSize, setCellSize] = useState(0.05)
    const [presetMap, setPresetMap] = useState("na")
    const [mapSeed, setMapSeed] = useState(123)

    const [prmSize, setPrmSize] = useState(500)
    const [knnSize, setKnnSize] = useState(5)
    const [graphSeed, setGraphSeed] = useState(123)
    const [startPos, setStartPos] = useState({x: -16, y: 15})
    const [endPos, setEndPos] = useState({x: 15, y: -16})

    const [speedPref, setSpeedPref] = useState(1)
    const [energyPref, setEnergyPref] = useState(0)
    const [safetyPref, setSafetyPref] = useState(0)

    const [mass, setMass] = useState(20)
    const [width, setWidth] = useState(0.225)
    const [maxSpeed, setMaxSpeed] = useState(3)
    const [minEnergy, setMinEnergy] = useState(500)
    const [stepUp, setStepUp] = useState(0.3)
    const [stepDown, setStepDown] = useState(0.3)
    const [inclineUp, setInclineUp] = useState(30)
    const [inclineDown, setInclineDown] = useState(30)

    const [trialCount, setTrialCount] = useState(100)
    const [randomizeMap, setRandomizeMap] = useState(false)
    const [randomizeRobot, setRandomizeRobot] = useState(false)
    const [randomizeUserPrefs, setRandomizeUserPrefs] = useState(true)
    const [randomizePositions, setRandomizePositions] = useState(false)
    const [runAstar, setRunAstar] = useState(false)



    const handleClickMap = () => {
        props.setGraph(0)
        props.setPaths([])
        let input_data = {
            mapSize,
            cellSize,
            presetMap,
            mapSeed
        };

        fetch('http://127.0.0.1:5000/get-map', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(input_data)
        }).then(response => response.json()).then(data => { console.log(data); props.setMap(data) });
    }

    const handleClickGraph = () => {
        props.setPaths([])

        let input_data = {
            prmSize,
            knnSize,
            graphSeed,
            startPos,
            endPos,
            cells: props.my_map.cells
        };

        fetch('http://127.0.0.1:5000/get-prm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(input_data)
        }).then(response => response.json()).then(data => { console.log(data); props.setGraph(data)});
    }

    const handleClickPath = () => {
        let input_data = {
            cells: props.my_map.cells,
            nodes: props.my_graph.nodes,
            startPos,
            endPos,
            speedPref,
            safetyPref, 
            energyPref,
            graphSeed,
            config: {
                mass, 
                width,
                maxSpeed,
                minEnergy,
                stepUp,
                stepDown,
                inclineUp,
                inclineDown
            }
        };

        console.log(input_data)

        fetch('http://127.0.0.1:5000/get-path', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(input_data)
        }).then(response => response.json()).then(data => { console.log(data); props.addPath(data)});
    }

    const handleClickTests = () => {
        let input_data = {
            cells: props.my_map.cells,
            nodes: props.my_graph.nodes,
            startPos,
            endPos,
            speedPref,
            safetyPref, 
            energyPref,
            graphSeed,
            config: {
                mass, 
                width,
                maxSpeed,
                minEnergy,
                stepUp,
                stepDown,
                inclineUp,
                inclineDown
            },
            test: {
                trialCount,
                randomizeMap,
                randomizePositions,
                randomizeRobot,
                randomizeUserPrefs,
                runAstar
            }
        };

        fetch('http://127.0.0.1:5000/test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(input_data)
        }).then(response => response.json()).then(data => { console.log(data);});
    }

    return (
        <div className="sidepanel">
            <h2 style={{ textAlign: 'center' }}>Preference-Based Path-Planning for Autonomous Robots</h2>
            <hr></hr>
            <h2>Map Preferences</h2>
            <div className='myform'>
                <div className="form-item">
                    <label for="map_size">Map Size:</label>
                    <input type="number" id="map_size" name="map_size" defaultValue={32} min="4" max="64" step={2} onChange={e => setMapSize(parseInt(e.target.value))} />
                </div>
                <div className="form-item">
                    <label for="cell_size">Cell Size:</label>
                    <input type="number" id="cell_size" name="cell_size" defaultValue={0.05} step={0.05} min="0.001" max="5" onChange={e => setCellSize(parseFloat(e.target.value))} />
                </div>
                <div className="form-item">
                    <label for="preset_map">Preset Map:</label>
                    <select onChange={e => setPresetMap(e.target.value)}>
                        <option value="na">None</option>
                        <option value="testmap">Default Test Map</option>
                    </select>
                </div>
                <div className="form-item">
                    <label for="map_seed">Seed:</label>
                    <input type="number" id="map_seed" name="map_seed" defaultValue={123} step={1} min="1" max="10000" onChange={e => setMapSeed(parseInt(e.target.value))} />
                </div>
            </div>
            <button className="load-button" onClick={handleClickMap}>Load Map</button>


            <h2>Graph Preferences</h2>
            <div className='myform'>
                <div className="form-item">
                    <label for="prm_size">PRM Size:</label>
                    <input type="number" id="prm_size" name="prm_size" min="100" max="1000" step={10} defaultValue={500} onChange={e => setPrmSize(parseInt(e.target.value))}/>
                </div>
                <div className="form-item">
                    <label for="knn_size">KNN:</label>
                    <input type="number" id="knn_size" name="knn_size" step={1} min="2" max="10" defaultValue={5} onChange={e => setKnnSize(parseInt(e.target.value))}/>
                </div>
                <div className="form-item">
                    <label for="graph_seed">Seed:</label>
                    <input type="number" id="graph_seed" name="graph_seed" step={1} min="1" max="10000" defaultValue={123} onChange={e => setGraphSeed(parseInt(e.target.value))}/>
                </div>
                <div className="form-item">
                    <label for="start_pos">Start Pos (x, y):</label>
                    <input id="start_pos" name="start_pos" defaultValue={'-16,15'} onChange={e => setStartPos({x: parseInt(e.target.value.split(',')[0]), y: parseInt(e.target.value.split(',')[1])})}/>
                </div>
                <div className="form-item">
                    <label for="end_pos">End Pos (x, y):</label>
                    <input id="end_pos" name="end_pos" defaultValue={'15,-16'} onChange={e => setEndPos({x: parseInt(e.target.value.split(',')[0]), y: parseInt(e.target.value.split(',')[1])})}/>
                </div>
            </div>
            <button className={"load-button " + (props.my_map? "" : "disabled-button")} onClick={handleClickGraph}>Load Graph</button>


            <h2>User Preferences</h2>
            <div className='myform'>
                <div className="form-item">
                    <label for="speed_pref">Speed Weight:</label>
                    <input type="number" id="speed_pref" name="speed_pref" min="0.0" max="100" step={10} defaultValue={1} onChange={e => setSpeedPref(parseFloat(e.target.value))}/>
                </div>

                <div className="form-item">
                    <label for="energy_pref">Energy Weight:</label>
                    <input type="number" id="energy_pref" name="energy_pref" min="0.0" max="100" step={10} defaultValue={0} onChange={e => setEnergyPref(parseFloat(e.target.value))}/>
                </div>

                <div className="form-item">
                    <label for="safety_pref">Safety Weight:</label>
                    <input type="number" id="safety_pref" name="safety_pref" min="0.0" max="100" step={10} defaultValue={0} onChange={e => setSafetyPref(parseFloat(e.target.value))}/>
                </div>

            </div>

            <h2>Robot Configuration</h2>
            <div className='myform'>
                <div className="form-item">
                    <label for="mass">Mass:</label>
                    <input type="number" id="mass" name="mass" min="0.0" max="100" defaultValue={20} onChange={e => setMass(parseFloat(e.target.value))}/>
                </div>
                <div className="form-item">
                    <label for="width">Width:</label>
                    <input type="number" id="width" name="width" min="0.0" max="100" defaultValue={0.225} onChange={e => setWidth(parseFloat(e.target.value))}/>
                </div>
                <div className="form-item">
                    <label for="max_speed">Max Speed:</label>
                    <input type="number" id="max_speed" name="max_speed" min="0.0" max="100" defaultValue={3} onChange={e => setMaxSpeed(parseFloat(e.target.value))}/>
                </div>
                <div className="form-item">
                    <label for="energy">Min Energy:</label>
                    <input type="number" id="energy" name="energy" min="0.0" max="100" defaultValue={500} onChange={e => setMinEnergy(parseFloat(e.target.value))}/>
                </div>
                <div className="form-item">
                    <label for="step_up">Step ⬆:</label>
                    <input type="number" id="step_up" name="step_up" min="0.0" max="100" defaultValue={0.3} onChange={e => setStepUp(parseFloat(e.target.value))}/>
                </div>
                <div className="form-item">
                    <label for="step_down">Step ⬇:</label>
                    <input type="number" id="step_down" name="step_down" min="0.0" max="100" defaultValue={0.3} onChange={e => setStepDown(parseFloat(e.target.value))}/>
                </div>
                <div className="form-item">
                    <label for="incline_up">Incline ⬆:</label>
                    <input type="number" id="incline_up" name="incline_up" min="0.0" max="100" defaultValue={30} onChange={e => setInclineUp(parseFloat(e.target.value))}/>
                </div>
                <div className="form-item">
                    <label for="incline_down">Incline ⬇:</label>
                    <input type="number" id="incline_down" name="incline_down" min="0.0" max="100" defaultValue={30} onChange={e => setInclineDown(parseFloat(e.target.value))}/>
                </div>
            </div>

            <button className={"load-button " + (props.my_graph? "" : "disabled-button")} onClick={handleClickPath}>Get Path</button>
            <hr></hr>
            <h2>Testing</h2>
            <div className='myform'>
                <div className="form-item">
                    <label for="test_count">Trial Count:</label>
                    <input type="number" id="test_count" name="test_count" min="0" max="1000" defaultValue={100} onChange={e => setTrialCount(parseInt(e.target.value))} />
                </div>

                <div className="form-item">
                    <label for="r_map">Randomize Map</label>
                    <input type="checkbox" id="r_map" name="r_map" onChange={e => setRandomizeMap(!randomizeMap)}/>
                </div>

                <div className="form-item">
                    <label for="r_robot">Randomize Robot</label>
                    <input type="checkbox" id="r_robot" name="r_robot" onChange={e => setRandomizeRobot(!randomizeRobot)}/>
                </div>

                <div className="form-item">
                    <label for="r_user">Randomize User Prefs</label>
                    <input type="checkbox" id="r_user" name="r_user" checked onChange={e => setRandomizeUserPrefs(!randomizeUserPrefs)}/>
                </div>

                <div className="form-item">
                    <label for="r_pos">Randomize Start/End Positions</label>
                    <input type="checkbox" id="r_pos" name="r_pos" onChange={e => setRandomizePositions(!randomizePositions)}/>
                </div>

                <div className="form-item">
                    <label for="r_astar">Run Plain ASTAR</label>
                    <input type="checkbox" id="r_astar" name="r_astar" onChange={e => setRunAstar(!runAstar)}/>
                </div>
            </div>
            <button className={"load-button " + (props.my_graph? "" : "disabled-button")} onClick={handleClickTests}>Run Tests</button>

            <hr></hr>
            <h2>Options</h2>
            <div className='myform'>
                <div className="form-item">
                    <label for="save_path">Override Paths</label>
                    <input type="checkbox" id="save_path" name="save_path" />
                </div>
            </div>
            <button className="load-button">Clear Paths</button>

        </div>
    );
}

export default SidePanel;