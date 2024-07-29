import { supabase } from "../subabaseClient"

type updatePostType = {
    title:string,
    content:string,
    id:string,
    userUid:string
}

export const updatePost = async ({title,content,id,userUid}:updatePostType) =>{

    if(!id){
        alert('id가일치하지않음')
        return
    }

    const {data,error} = await supabase.from('board')
    .update({title,content})
    .eq('id',id)
    .eq('userUid',userUid)

    if(error){
        console.error(error)
        alert(error)
    }else{
        console.log('성공',data)
    }
}