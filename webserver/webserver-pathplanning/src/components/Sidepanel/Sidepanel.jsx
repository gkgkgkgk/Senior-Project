import React, { useState } from 'react';
import "./Sidepanel.css"

function SidePanel(props) {

    const handleClickMap = () => {
        fetch('http://192.168.68.156:5000/get-map')
            .then(response => response.json())
            .then(data => { props.setMap(data) });
    }

    const handleClickGraph = () => {
        fetch('http://192.168.68.156:5000/get-prm?size=600')
            .then(response => response.json())
            .then(data => { props.setGraph(data) });
    }

    return (
        <div className="sidepanel">
            <h2>Map Preferences</h2>
            <div className='myform'>
                <div className="form-item">
                <label for="map_size">Map Size:</label>
                <input type="number" id="map_size" name="map_size" min="4" max="64" step={2}/>
                </div>
                <div className="form-item">
                <label for="cell_size">Cell Size:</label>
                <input type="number" id="cell_size" name="cell_size" step={0.05} min="0.001" max="5"/>
                </div>
                <div className="form-item">
                <label for="preset_map">Preset Map:</label>
                <select>
                    <option value="na">None</option>
                    <option value="testmap">Default Test Map</option>
                </select>
                </div>
                <div className="form-item">
                <label for="map_seed">Seed:</label>
                <input type="number" id="map_seed" name="map_seed" step={1} min="1" max="10000"/>
                </div>
            </div>
            <button className="load-button">Load Map</button>


            <h2>Graph Preferences</h2>
            <div className='myform'>
                <div className="form-item">
                <label for="prm_size">PRM Size:</label>
                <input type="number" id="prm_size" name="prm_size" min="100" max="1000" step={10}/>
                </div>
                <div className="form-item">
                <label for="knn_size">KNN:</label>
                <input type="number" id="knn_size" name="knn_size" step={1} min="2" max="10"/>
                </div>
                <div className="form-item">
                <label for="graph_seed">Seed:</label>
                <input type="number" id="graph_seed" name="graph_seed" step={1} min="1" max="10000"/>
                </div>
            </div>
            <button className="load-button">Load Graph</button>


            <h2>User Preferences</h2>
            <div className='myform'>
                <div className="form-item">
                <label for="speed_pref">Speed Weight:</label>
                <input type="number" id="speed_pref" name="speed_pref" min="0.0" max="100" step={10}/>
                </div>

                <div className="form-item">
                <label for="energy_pref">Energy Weight:</label>
                <input type="number" id="energy_pref" name="energy_pref" min="0.0" max="100" step={10}/>
                </div>

                <div className="form-item">
                <label for="safety_pref">Safety Weight:</label>
                <input type="number" id="safety_pref" name="safety_pref" min="0.0" max="100" step={10}/>
                </div>
                
            </div>

            <h2>Robot Configuration</h2>
            <div className='myform'>
                <div className="form-item">
                <label for="mass">Mass:</label>
                <input type="number" id="mass" name="mass" min="0.0" max="100"/>
                </div>
                <div className="form-item">
                <label for="width">Width:</label>
                <input type="number" id="width" name="width" min="0.0" max="100"/>
                </div>
                <div className="form-item">
                <label for="max_speed">Max Speed:</label>
                <input type="number" id="max_speed" name="max_speed" min="0.0" max="100"/>
                </div>
                <div className="form-item">
                <label for="energy">Min Energy:</label>
                <input type="number" id="energy" name="energy" min="0.0" max="100"/>
                </div>
                <div className="form-item">
                <label for="step_up">Step ⬆:</label>
                <input type="number" id="step_up" name="step_up" min="0.0" max="100"/>
                </div>
                <div className="form-item">
                <label for="step_down">Step ⬇:</label>
                <input type="number" id="step_down" name="step_down" min="0.0" max="100"/>
                </div>
                <div className="form-item">
                <label for="incline_up">Incline ⬆:</label>
                <input type="number" id="incline_up" name="incline_up" min="0.0" max="100"/>
                </div>
                <div className="form-item">
                <label for="incline_down">Incline ⬇:</label>
                <input type="number" id="incline_down" name="incline_down" min="0.0" max="100"/>
                </div>
            </div>

            <button className="load-button">Get Path</button>

            <h2>Testing</h2>
            <div className='myform'>
                <div className="form-item">
                <label for="test_count">Test Count:</label>
                <input type="number" id="test_count" name="test_count" min="0" max="1000"/>
                </div>

                <div className="form-item">
                <label for="r_map">Randomize Map</label>
                <input type="checkbox" id="r_map" name="r_map" />
                </div>

                <div className="form-item">
                <label for="r_robot">Randomize Robot</label>
                <input type="checkbox" id="r_robot" name="r_robot" />
                </div>

                <div className="form-item">
                <label for="r_user">Randomize User Prefs</label>
                <input type="checkbox" id="r_user" name="r_user" />
                </div>

                <div className="form-item">
                <label for="r_astar">Run Plain ASTAR</label>
                <input type="checkbox" id="r_astar" name="r_astar" />
                </div>
            </div>
            <button className="load-button">Run Tests</button>
        </div>
    );
}

export default SidePanel;