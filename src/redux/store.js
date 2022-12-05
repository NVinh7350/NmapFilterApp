import { configureStore } from '@reduxjs/toolkit'
import NmapInputSlice from '../component/NmapInput/NmapInputSlice';

const store = configureStore({ 
    reducer:{
        NmapInput : NmapInputSlice.reducer
    }
})

export default store;