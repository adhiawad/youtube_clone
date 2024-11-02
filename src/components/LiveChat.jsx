import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import store from '../utils/Store'
import { setMessage } from '../utils/ChatSlice'
import { generateRandomMessage, generateRandomName } from '../utils/helper'

function LiveChat() {

  const message=useSelector((store)=>store.chat.message)
  const dispatch=useDispatch()
  useEffect(()=>{
   const timer= setInterval(()=>{
      dispatch(setMessage({name:generateRandomName(),message:generateRandomMessage(10)}))
    },3000)

    return (()=>{
      clearInterval(timer)
    })
  })

  return (
    <>
        <div className='px-4 py-2'>
            {
              message.map((item,idx)=>{
                return(
                  <ChatMessage key={idx} item={item}/>
                )
              })
            }


           
          
        </div>
    
    </>
  )
}

export default LiveChat
