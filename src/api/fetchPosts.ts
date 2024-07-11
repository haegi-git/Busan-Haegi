import { supabase } from "../subabaseClient"

export const fetchPosts = async () =>{
    const { data, error } = await supabase.from('posts').select('*')

    if(error){
        throw new Error(error.message)
    }
    return data
}