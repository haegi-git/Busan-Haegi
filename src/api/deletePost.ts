import { supabase } from "../subabaseClient"

type deletePostType = {
    id:string,
    userUid:string
}

export const deletePost = async({id,userUid}:deletePostType)=>{
    if(!userUid){
        alert('작성자가 아닙니다.')
        return
    }
    const {data,error} = await supabase.from('board')
    .delete()
    .eq('id',id)

    if(error){
        console.log(error)
    }else{
        console.log('성공')
    }
}