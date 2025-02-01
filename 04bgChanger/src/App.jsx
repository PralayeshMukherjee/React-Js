import { useState } from 'react'
import './App.css';

function App() {
  const [color, setColor] = useState("white");

  return (
    <div className="w-full h-screen" style={{
      backgroundColor:color
    }}>
      <button style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>green</button>
      <button style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>blue</button>
      <button style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}}>red </button>
      <button style={{backgroundColor:"olive"}} onClick={()=>{setColor("olive")}}>olive </button>
      <button style={{backgroundColor:"pink"}} onClick={()=>{setColor("pink")}}>pink </button>
      <button style={{backgroundColor:"violet"}} onClick={()=>{setColor("violet")}}>violet</button>
    </div>
  )
}

export default App
