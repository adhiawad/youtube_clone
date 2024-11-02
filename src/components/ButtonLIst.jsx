import React from 'react'
import { useSelector } from 'react-redux'

const buttonLIst= ['All','Java','C','C++','Python','News','Business','Shopping',]

function ButtonLIst() {
  const  toggle=useSelector((store)=>store.app.toggle)
  


  return (
    <div className= {` flex  p-4 transition-all duration-300 ${
            toggle 
                ? 'md:ml-64' // Sidebar expanded
                : 'md:ml-20' // Sidebar collapsed
        } ${
            toggle
                ? 'md:grid-cols-2 lg:grid-cols-3' // Fewer columns when sidebar is expanded
                : 'md:grid-cols-3 lg:grid-cols-4' // More columns when sidebar is collapsed
        }`}>
    {
        buttonLIst.map((item,index)=>{

            return(
              <div key={index}>
               <button  className='hover:bg-gray-500 px-4 py-1 rounded-lg mx-2 border border-gray-400'>{item}</button>
                </div>)
        })
    }
    </div>
  )
}

export default ButtonLIst
