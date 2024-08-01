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
    const { data, error } = await supabase
    .from('board')
    .select('*')
    .eq('id',id)

    if(error){
        throw new Error(error.message)
    }
    return data
}

export const fetchComments = async(board_id:string|undefined)=>{
    const {data,error} = await supabase
    .from('board_comment')
    .select('*')
    .eq('board_id',board_id)

    if(error){
        throw new Error(error.message)
    }
    return data
}