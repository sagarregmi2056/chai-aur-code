import React from 'react'
import { useState } from 'react'

const Button = () => {

    let [color,setcolor] = useState("pink");

   

    
  return (
   
   <div style={{backgroundColor:color}} className='w-full h-full'>
    <button onClick={ ()=> setcolor("red")} className= ' bg-red-700 text-black mx-90 ' >red </button>
    <br></br>
    <button onClick={ ()=> setcolor("blue")} className='bg-blue-700 text-black mt-6 ' >blue </button>
    <br></br>
    <button onClick={ ()=> setcolor("green")} className='bg-greeen text-black mt-6'>green</button>
    <br></br>
    <button onClick={ ()=> setcolor("white")} className='bg-white text-black mt-6'> white</button>
    <br></br>
    <button onClick={ ()=> setcolor("black")} className='bg-black text-black mt-6'>black</button>
    <br></br>
    <button onClick={ ()=> setcolor("yellow")} className='bg-yellow-700 text-black mt-6'> yellow</button>
   
    </div>
    
   
  )
}

export default Button