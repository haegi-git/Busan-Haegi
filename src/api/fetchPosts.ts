import { supabase } from "../subabaseClient"

type fetchDetailPostType ={
    category:string,
    id:string,
}

export const fetchPosts = async () =>{
    const { data, error } = await supabase.from('board').select('*')

    if(error){
        throw new Error(error.message)
    }
    return data
}

export const fetchDetailPost = async ({category,id}:fetchDetailPostType) =>{
    const { data, error } = await supabase.from(category).select('*').eq('id',id)

    if(error){
        throw new Error(error.message)
    }
    return data
}