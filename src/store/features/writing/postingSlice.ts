import { createSlice } from "@reduxjs/toolkit";

export const postingSlice = createSlice({
    name : 'postingSlice',
    initialState : {
        title: '',
        content: '',
        comment:''
    },
    reducers:{
        onChangeTitle:(state,action)=>{
            state.title = action.payload
        },
        onChangeContent:(state,action)=>{
            state.content = action.payload
        },
        onChangeComment:(state,action)=>{
            state.comment = action.payload
        }
    }
})

export default postingSlice.reducer;
export const {
    onChangeTitle,
    onChangeContent,
    onChangeComment} = postingSlice.actions