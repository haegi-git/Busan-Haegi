import { supabase } from "../subabaseClient";

export const loginState = async () => {

    const {data: user,error} = await supabase.auth.getUser()

    if(error){
        throw new Error(error.message)
    }

    if(!user){
        throw new Error('로그인이 안되어있습니다.')
    }else{
        const userEmail = user.user.email
        const userId = user.user.id
        const userNickname = user.user.user_metadata.displayName

        return {userEmail,userId,userNickname}
    }

};
