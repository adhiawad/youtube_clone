import {createSlice } from "@reduxjs/toolkit"
import reducer from "./appSlice"

const chatSlice=createSlice({
    name:"chat",
    initialState:{
        message:[],

    },
    reducers:{
        setMessage:(state, action)=>{
            state.message.slice(30,1)
            state.message.push(action.payload )
        }
    }
})

export const {setMessage}=chatSlice.actions
export default chatSlice.reducer