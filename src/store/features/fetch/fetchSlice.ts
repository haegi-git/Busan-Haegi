import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostItemType } from "../../../types/types";

type FetchSliceType = {
    posts:PostItemType[],
    loading:boolean,
    error: string | null
}

const initialState:FetchSliceType = {
    posts:[],
    loading: false,
    error:null
}


export const FetchSlice = createSlice({
    name : 'FetchSlice',
    initialState,
    reducers:{
        getPosts:(state,action: PayloadAction<PostItemType[]>)=>{
            state.posts = action.payload
        }
    }
})

export default FetchSlice.reducer;
export const {
    getPosts
} = FetchSlice.actions