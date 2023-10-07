import './App.css'
import {  useState } from 'react';

const App = () => {

  // use state hook ho yo yadi variable manipulate garna xa sangai ui ma render garna lai yo use garxau

 let [counter,setcounter] = useState(12)
  // let counter = 12;
 const increase=()=>{
  // here we are incrementing value of counter
  if(20>counter){
    setcounter(counter+1)
    console.log(`clicked ${counter}`)

  }
  else{
    return setcounter(counter);
  }
  
  setcounter(counter+1)
  // console.log(`clicked ${counter}`)

  }

  const decrease=()=>{
    // console.log("value decrease vayo hai function call garyarw")
    // counter = counter-1
    // setcounter(`The decrease function call garyapaxi counter ko value yati vayo${counter}`)

    if(counter>0){
      setcounter(counter-1)
    }
    else {
      return setcounter(counter)
    }
   
  
    }

  return (
    <>
      <h1>chai aur code </h1>
      <h1>counter value suru ma {counter} xa </h1>
      <button onClick={increase}>increase the value {counter} </button>
      <br></br>
      <button onClick={decrease}>decrease value {counter}</button>
    </>
  )
}

export default App
