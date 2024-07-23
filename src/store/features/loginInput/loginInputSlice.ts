import { createSlice } from "@reduxjs/toolkit";

type loginInputInitialState = {
    loginEmail: string,
    loginPassword: string,
}

const initialState:loginInputInitialState = {
    loginEmail: '',
    loginPassword: '',
}

export const loginInputSlice = createSlice({
    name : 'loginInputSlice',
    initialState,
    reducers:{
        onChangeLoginEmail:(state,action)=>{
            state.loginEmail = action.payload
        },
        onChangeLoginPassword:(state,action)=>{
            state.loginPassword = action.payload
        },
    }
})

export default loginInputSlice.reducer;
export const {
    onChangeLoginEmail,
onChangeLoginPassword,} = loginInputSlice.actions