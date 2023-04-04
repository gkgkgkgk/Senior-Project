import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Canvas from './components/Display'
import './App.css'
import SidePanel from './components/Sidepanel/Sidepanel'

function App() {
  const [map, setMap] = useState(0)
  return (
    <div className="App">
      <Canvas my_map={map} width={1024} height={1024}></Canvas>
      <SidePanel setMap={setMap}></SidePanel>
    </div>
  )
}

export default App
