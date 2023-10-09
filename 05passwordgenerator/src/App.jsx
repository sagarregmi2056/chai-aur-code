import { useCallback, useState } from 'react'
import './App.css'


// import { for } from './../node_modules/vite/dist/node/index.d';

function App() {
  const [length, setLength] = useState(8)
  const [numberallallow, setnumberallow] = usestate(false)
  const [charallow,setcharallow] = usestate(false)
  const[password,setpassword] = useState("")
  const passwordgenerator=useCallback(()=>{
   let pass= ""
   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   if(numberallallow){
    str+="0123456789"

   }
   if(charallow){
    str+="+=;!@#$%^&*"

   }
   for (let i = 1; i <= array.length; i++) {
   let charact = Math.floor(Math.random()*str.length+1)
   const pass = str.charAt(charact)
    
   }
   setpassword(pass)

  },[length,numberallallow,charallow,setpassword])


  

  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  )
}

export default App
