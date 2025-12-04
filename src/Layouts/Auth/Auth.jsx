import React from 'react'
import Navbar from '../../Components/Navbar'
import { Outlet } from 'react-router'

const Auth = () => {
  return (
   <div className=' min-h-screen flex flex-col' >
     <div className="main grow ">
        <Navbar></Navbar>
        <main className='mx-auto '>
            <Outlet></Outlet>
        </main>
      </div>
      
    </div>
  )
}

export default Auth
