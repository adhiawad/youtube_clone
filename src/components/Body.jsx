import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
function Body() {
  return (
    <div>
         <Navbar/>
      <div className="flex mt-16">
       
       <Sidebar />

       
       <div className="flex-1 p-6">
         {/* <Feed/> */}
        <Outlet/>
     </div>
       </div>
    </div>
  )
}

export default Body
