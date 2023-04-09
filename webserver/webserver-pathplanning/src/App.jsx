import { useState } from 'react'
import Canvas from './components/Display'
import './App.css'
import SidePanel from './components/Sidepanel/Sidepanel'

function App() {
  const [map, setMap] = useState(0)
  const [graph, setGraph] = useState(0)
  const [paths, setPaths] = useState([])

  const addPath = (path) => {
    setPaths(paths.append(path))
  }

  return (
    <div className="App">
      <div className="display">
      <Canvas my_map={map} graph={graph} paths={paths} width={1024} height={1024}></Canvas>
      </div>
      <SidePanel my_map={map} my_graph={graph} setMap={setMap} setGraph={setGraph} addPath={setPaths}></SidePanel>
    </div>
  )
}

export default App
