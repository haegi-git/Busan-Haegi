import { useDispatch, useSelector } from "react-redux"
import { styled } from "styled-components"
import { RootState } from "../../store/store"
import { signUp } from "../../api/signup"
import { onChangeEmail, onChangeNickname, onChangePassword } from "../../store/features/signupInput/signupInputSlice"

import { LoginFormButton, LoginFormInput } from "../../style/loginFormStyle"

const SignForm = styled.form`
            display: flex;
            flex-direction: column;
`


export default function LoginFormSignup(){

    const dispatch = useDispatch()

    const {email,password,nickname} = useSelector((state:RootState)=> state.signupInput)

    const handelSignUp = async(e:React.FormEvent) =>{
        e.preventDefault()
        try{
            await signUp(email,password,nickname)
            alert('회원가입성공')
        }catch(error){
            console.error(error)
        }
    }

    return(
            <SignForm>
                    <LoginFormInput
                    onChange={(e)=>dispatch(onChangeEmail(e.target.value))}
                     value={email}
                      type="text"
                       placeholder="아이디를 입력하세요." />
                    <LoginFormInput
                    onChange={(e)=>dispatch(onChangePassword(e.target.value))}
                    value={password}
                     type="password"
                      placeholder="비밀번호를 입력하세요." />
                    <LoginFormInput
                    onChange={(e)=>dispatch(onChangeNickname(e.target.value))}
                    value={nickname}
                    type="text"
                     placeholder="닉네임을 입력하세요."/>

                    <LoginFormButton onClick={handelSignUp}>
                        회원가입
                    </LoginFormButton>
            </SignForm>
    )
}