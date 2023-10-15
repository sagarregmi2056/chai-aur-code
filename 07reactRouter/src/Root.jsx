import React from 'react'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'

const Root = () => {
  return (
   <>
    <Header/>
    {/* the outlet here is a changing proprty */}
    <Outlet/>
    <Footer/>
   </>
  )
}

export default Root