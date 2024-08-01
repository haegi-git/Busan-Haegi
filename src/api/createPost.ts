import { supabase } from "../subabaseClient";
import { CommentItemType, PostType } from "../types/types";

export const createPost = async ({title,content,userUid}:PostType) => {
    const { data,error } = await supabase
    .from('board')
    .insert([{title,content,userUid}])

    if ( error ){
        throw new Error(error.message)
    }
    return data
}

export const createComment = async ({board_id,userUid,nickname,comment}:CommentItemType) => {
    const { data,error } = await supabase
    .from('board_comment')
    .insert([{board_id,userUid,nickname,comment}])

    if ( error ){
        throw new Error(error.message)
    }
    return data
}