import { createSlice } from "@reduxjs/toolkit";

type locationSliceInitialState = {
    locationState:string
}

const initialState:locationSliceInitialState = {
    locationState: ''
}

export const locationSlice = createSlice({
    name : 'locationSlice',
    initialState,
    reducers:{
        handleLocation:(state,action)=>{
            state.locationState = action.payload
        }
    }
})

export default locationSlice.reducer;
export const {
    handleLocation
} = locationSlice.actions