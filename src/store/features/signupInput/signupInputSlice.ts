import { createSlice } from "@reduxjs/toolkit";

type signupInputSliceInitialState = {
    email: string,
    password: string,
    nickname: string,
}

const initialState:signupInputSliceInitialState = {
    email: '',
    password: '',
    nickname: ''
}

export const signupInputSlice = createSlice({
    name : 'signupInputSlice',
    initialState,
    reducers:{
        onChangeEmail:(state,action)=>{
            state.email = action.payload
        },
        onChangePassword:(state,action)=>{
            state.password = action.payload
        },
        onChangeNickname:(state,action)=>{
            state.nickname = action.payload
        },
    }
})

export default signupInputSlice.reducer;
export const {
    onChangeEmail,
onChangePassword,onChangeNickname} = signupInputSlice.actions