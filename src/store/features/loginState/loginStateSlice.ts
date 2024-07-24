import { createSlice } from "@reduxjs/toolkit";

type loginStateSliceInitialState = {
    userEmail: string,
    userNickname: string,
    userId:string
}

const initialState:loginStateSliceInitialState = {
    userEmail: '',
    userNickname: '',
    userId:''
}

export const loginStateSlice = createSlice({
    name : 'loginStateSlice',
    initialState,
    reducers:{
        getUserEmail:(state,action)=>{
            state.userEmail = action.payload
        },
        getUserNickname:(state,action)=>{
            state.userNickname = action.payload
        },
        getUserId:(state,action)=>{
            state.userId = action.payload
        }
    }
})

export default loginStateSlice.reducer;
export const {
    getUserEmail,getUserNickname,getUserId} = loginStateSlice.actions