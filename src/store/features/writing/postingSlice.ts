import { createSlice } from "@reduxjs/toolkit";

export const postingSlice = createSlice({
    name : 'postingSlice',
    initialState : {
        title: '',
        content: '',
    },
    reducers:{
        onChangeTitle:(state,action)=>{
            state.title = action.payload
        },
        onChangeContent:(state,action)=>{
            state.content = action.payload
        },
        clearInput:(state,action)=>{
            state.title = ''
            state.content = ''
        }
    }
})

export default postingSlice.reducer;
export const {
    onChangeTitle,
    onChangeContent,
    clearInput} = postingSlice.actions