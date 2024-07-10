import { supabase } from "../subabaseClient";
import { PostType } from "../types/types";

export const createPost = async ({title,content,category}:PostType) => {
    const { data,error } = await supabase
    .from('posts')
    .insert([{title,content,category}])

    if ( error ){
        throw new Error(error.message)
    }
    return data
}