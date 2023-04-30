import { useState } from 'react'
import Canvas from './components/Display'
import './App.css'
import SidePanel from './components/Sidepanel/Sidepanel'
import PathManager from './components/PathManager'

function App() {
  const [map, setMap] = useState(0)
  const [graph, setGraph] = useState(0)
  const [paths, setPaths] = useState([])
  const [downloadResults, setDownloadResults] = useState(true)

  const clearPaths = () => {
    setPaths([]);
  }

  const generateResults = (results) => {
    let columns = Object.keys(results.results[0].config).concat(Object.keys(results.results[0].costs), Object.keys(results.results[0].map), Object.keys(results.results[0].prefs), 'time').join(',');
    console.log(results)
    let rows = results.results.map(r => {
      return Object.values(r.config).concat(Object.values(r.costs), Object.values(r.map), Object.values(r.prefs), r.time).join(',');
    })

    rows.unshift(columns);
    let csvString = rows.join('\n');
    console.log(rows)

    let dataUri = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvString);

    if(downloadResults){
      window.open(dataUri);
    }
  };

  const generateMapSizeResults = (results) => {
    console.log(results)
  };

  const generatePRMSizeResults = (results) => {
    console.log(results)
  };

  const pathColors = ['#8c03fc', '#fcba03', '#ba03fc', '#03f8fc', '#8c03fc', '#8c03fc', '#fcba03', '#ba03fc', '#03f8fc', '#8c03fc', '#8c03fc', '#fcba03', '#ba03fc', '#03f8fc', '#8c03fc'];


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
      <SidePanel my_map={map} my_graph={graph} setMap={setMap} setGraph={setGraph} setPRMSizeResults={generatePRMSizeResults} setMapSizeResults={generateMapSizeResults} setResults={generateResults} addPath={addPath} setPaths={setPaths} clearPaths={clearPaths} downloadResults={downloadResults} setDownloadResults={setDownloadResults}></SidePanel>
    </div>
  )
}

export default App
