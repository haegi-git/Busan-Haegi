import { supabase } from "../subabaseClient";

export const signUp = async (email: string, password: string, nickname: string) => {

    if(!email){
        alert('이메일을 입력하세요.')
    }else if(!password){
        alert('비밀번호를 입력하세요.')
    }else if(!nickname){
        alert('닉네임을 입력하세요.')
    }else{
        const {data,error} = await supabase.auth.signUp({email,password})

    if(error){
        throw new Error(error.message);
    }

    const {error: profileError} = await supabase
    .from('profiles')
    .insert({id: data.user?.id, username: nickname,});

    if(profileError){
        throw new Error(profileError.message);
    }

    }


};
