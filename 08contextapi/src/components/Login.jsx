import React,{useState,useContext} from 'react'

import UserContext from '../context/UserContext'


// import use state and context hook

const Login = () => {

    const [username,setusername] = useState("")
    const [password,setpassword] = useState("")

    // here set user is from context file

    const {setuser} = useContext(UserContext)

    const handlesubmit =(e)=>{
        e.preventDefault()
        setuser({username,password})
      
        
    }
  return (
    <div>
        <h2>Login</h2>

        {/* value username set garni yadi evenet e vayo vanya  change aayo vanya setusername  wala function hit hanyarw value pass garni */}
        <input type='text' value={username} onChange={(e)=>setusername(e.target.value)} placeholder='username'></input>
        <input type='text' value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='password'></input>
        <button onClick={handlesubmit}>submit</button>
    </div>
  )
}

export default Login