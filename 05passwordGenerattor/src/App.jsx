import { useState, useCallback,useEffect,useRef } from 'react'
// import './App.css'
import { use } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [number,setNumber] = useState(false);
  const [character,setCharacter] = useState(false);
  const [password,setPassword] = useState("");
  const fn = ()=>{
    let pass = "";
    let characterStr = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuioplkjhgfdsazxcvbnm";
    let numberStr = "1234567890";
    if(number==true){
      characterStr += numberStr;
    }
    let specialChar = "!@#$%^&*(){}[]";
    if(character==true){
      characterStr += specialChar;
    }
    while(pass.length<=length){
      pass += characterStr.charAt(Math.floor(Math.random()*characterStr.length));
    }
    console.log(pass);
    setPassword(pass);
  }
  const passwordRef = useRef(null);
  const passwordGenerattor = useCallback(fn, [length,number,character,setPassword]);
  const copyToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password]);
  useEffect(()=>{
    passwordGenerattor();
  },[length,number,character,passwordGenerattor])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 bg-amber-50'
          placeholder='password' readOnly ref={passwordRef} />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer' onClick={copyToClipBoard}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={17} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={number} id='numberInput' onChange={(e)=>{setNumber((prevew)=>!prevew)}} />
            <label>Numbers</label>
            <input type="checkbox" defaultChecked={character} id='characterInput' onChange={(e)=>{setCharacter((prevew)=>!prevew)}} />
            <label>Special Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
