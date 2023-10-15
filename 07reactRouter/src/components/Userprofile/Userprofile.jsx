import React from 'react'

import { useParams } from 'react-router-dom'

const Userprofile = () => {

    const {userid} =useParams()
  return (

    // here it need a parameter id to display on ui soo we are using hook useparams

    <div>Userprofile:{userid}</div>
  )
}

export default Userprofile