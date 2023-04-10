import { useState } from 'react'
import Canvas from './components/Display'
import './App.css'
import SidePanel from './components/Sidepanel/Sidepanel'
import PathManager from './components/PathManager'

function App() {
  const [map, setMap] = useState(0)
  const [graph, setGraph] = useState(0)
  const [paths, setPaths] = useState([])
  const pathColors = ['#8c03fc', '#fcba03', '#ba03fc', '#03f8fc', '#8c03fc', ''];


  const addPath = (path) => {
    if((paths.length) > 0){
      setPaths([...paths, path])
    }
    else {
      setPaths([path])
    }
  }

  return (
    <div className="App">
      <div className="display">
      <Canvas my_map={map} graph={graph} paths={paths} pathColors={pathColors} width={1024} height={1024}></Canvas>
      <PathManager paths={paths} pathColors={pathColors}></PathManager>
      </div>
      <SidePanel my_map={map} my_graph={graph} setMap={setMap} setGraph={setGraph} addPath={addPath} setPaths={setPaths}></SidePanel>
    </div>
  )
}

export default App
