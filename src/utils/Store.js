import {configureStore} from '@reduxjs/toolkit'
import appSlice from "./appSlice"
import chatSlice from './ChatSlice'
import themeSlice from './themeSlice'
const store = configureStore({
    reducer:{
        app:appSlice,
        chat:chatSlice,
        theme:themeSlice
    }
})

export default store