import React from 'react'
import Navbar from '../../Components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../Components/Footer'

const Root = () => {
  return (
    <div className=' min-h-screen flex flex-col w-full' >
        <Navbar></Navbar>
      <div className="main grow">
          <Outlet></Outlet>
      </div>
        <Footer></Footer>
      
    </div>
  )
}

export default Root
