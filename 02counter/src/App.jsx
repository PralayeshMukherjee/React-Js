import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  let [counter,setCounter] = useState(0) 
  // let counter = 0;
  function addValue(){
    if(counter+1>20){
      return;
    }
    counter = counter+1;
    setCounter(counter)
    console.log(counter);
  }
  const remvoeValue = () =>{
    if(counter-1<0){
      return;
    }
    counter = counter-1;
    setCounter(counter)
    console.log(counter);
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br /><br />
      <button onClick={remvoeValue}>remove value {counter}</button>
    </>
  )
}

export default App
