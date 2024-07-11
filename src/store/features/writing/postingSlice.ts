import { createSlice } from "@reduxjs/toolkit";

export const postingSlice = createSlice({
    name : 'postingSlice',
    initialState : {
        title: '',
        content: '',
        category: ''
    },
    reducers:{
        onChangeTitle:(state,action)=>{
            state.title = action.payload
        },
        onChangeContent:(state,action)=>{
            state.content = action.payload
        },
        onChangeCategory:(state,action)=>{
            state.category = action.payload
        }
    }
})

export default postingSlice.reducer;
export const {
    onChangeTitle,
    onChangeContent,
    onChangeCategory} = postingSlice.actions