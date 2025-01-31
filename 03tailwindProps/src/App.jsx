import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componenets/Card'

function App() {
  const [count, setCount] = useState(0)
  let obj={
    username:"raj",
    age: 21,
    array:[1,2,3]
  }
  return (
    <>
      <Card someObject = {obj.array} />
      <Card abd={obj}/>
    </>
  )
}

export default App
