// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'

import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data= useLoaderData()


    // const [data,setdata] = useState([])

    // useEffect(()=>{

    //     fetch('https://api.github.com/users/sagarregmi2056')
    //     .then(res=> res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setdata(data)
    //     })
      


    // },)
  return (
   
        
    
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers:{data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    <p>location:{data.location}</p>
    <p>{data.bio}</p>
    
     <a href={data.repos_url}>repository url</a>
   
    </div>
  )
}

export default Github

export const githubinfoloader = async  ()=>{
    const response = await fetch ('https://api.github.com/users/sagarregmi2056')
    return response.json()
}