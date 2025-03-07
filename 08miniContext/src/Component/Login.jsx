import React,{useState,useContext} from 'react'

import UserContext from '../Context/UserContext'

function Login() {
    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const {setUser} = useContext(UserContext)
    const handelSubmit = (e) =>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={username} onChange={(e)=>setUserName(e.target.value)} placeholder='username'/>
      <br /><br />
      <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
      <button onClick={handelSubmit}>Submit</button>
    </div>
  )
}

export default Login
