import React from 'react'
import Navbar from './components/Navbar'

import {createBrowserRouter,Route, RouterProvider} from 'react-router-dom'
import Body from './components/Body'
import Watch from './components/Watch'
import Feed from './components/Feed'
import { useSelector } from 'react-redux'


const router=createBrowserRouter([
    {  path:"/",
        element:<Body/>,
        children:[
          {
            path:'/',
            element:<Feed/>
          },{
          path:'/watch',
          element:<Watch/>
        }]

    }]
)
function App() {

  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div className={darkMode ? 'bg-black text-white min-h-screen' : 'bg-white text-black min-h-screen'}  >
      {/* className='bg-black text-white' */}
       <RouterProvider router={router}/>
    </div>
  )
}

export default App
