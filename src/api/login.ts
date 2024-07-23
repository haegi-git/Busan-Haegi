import { supabase } from "../subabaseClient"

type loginType = {
    email:string,
    password:string
}

export const login = async({email,password}:loginType) =>{
    
    if(!email){
        alert('이메일을 입력해주세요.')
    }else if(!password){
        alert('비밀번호를 입력해주세요.')
    }else{
        const {data,error} = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if(error){
            throw new Error(error.message)
        }
        return data
    }
}