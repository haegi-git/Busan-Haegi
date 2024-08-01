import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommentItemType } from "../../../types/types";

type CommentsSliceType = {
    Comments:CommentItemType[]
}

const initialState:CommentsSliceType = {
    Comments:[],
}


export const CommentsSlice = createSlice({
    name : 'CommentsSlice',
    initialState,
    reducers:{
        getComments:(state,action: PayloadAction<CommentItemType[]>)=>{
            state.Comments = action.payload
        }
    }
})

export default CommentsSlice.reducer;
export const {
    getComments
} = CommentsSlice.actions