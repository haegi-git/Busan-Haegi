import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostItemType } from "../../../types/types";

type DetailItemSliceType = {
    posts:PostItemType[],
    loading:boolean,
    error: string | null
}

const initialState:DetailItemSliceType = {
    posts:[],
    loading: false,
    error:null
}


export const DetailItemSlice = createSlice({
    name : 'DetailItemSlice',
    initialState,
    reducers:{
        getPosts:(state,action: PayloadAction<PostItemType[]>)=>{
            state.posts = action.payload
        }
    }
})

export default DetailItemSlice.reducer;
export const {
    getPosts
} = DetailItemSlice.actions