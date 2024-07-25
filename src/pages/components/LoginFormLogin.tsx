import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { RootState } from "../../store/store"
import { onChangeLoginEmail, onChangeLoginPassword } from "../../store/features/loginInput/loginInputSlice"
import { login } from "../../api/login"
import { KakaoLogin, LoginFormButton, LoginFormInput } from "../../style/loginFormStyle"
import { getUserEmail, getUserId, getUserNickname } from "../../store/features/loginState/loginStateSlice"

const LoginForm = styled.form`
            display: flex;
            flex-direction: column;
`

export default function LoginFormLogin(){

    const dispatch = useDispatch()

    const {loginEmail,loginPassword} = useSelector((state:RootState)=>state.loginInput)

    const loginButton = async(e:React.FormEvent) =>{
        e.preventDefault()
        try{
            await login({email:loginEmail,password:loginPassword})
            .then((data)=>{
                console.log(data)
                dispatch(getUserEmail(data?.user.email))
                dispatch(getUserId(data?.user.id))
                dispatch(getUserNickname(data?.user.user_metadata.displayName))
            })
            alert('로긴성공')
        }catch(error){
            console.error(error)
            alert('로긴실패')
        }
    }

    return(
        <LoginForm>
            <LoginFormInput
             type="text"
              placeholder="이메일을 입력하세요."
              value={loginEmail}
              onChange={(e)=> dispatch(onChangeLoginEmail(e.target.value))}
               />
                    <LoginFormInput
                     type="password"
                      placeholder="비밀번호를 입력하세요."
                      value={loginPassword}
                      onChange={(e)=> dispatch(onChangeLoginPassword(e.target.value))} />
                    <LoginFormButton onClick={loginButton}>로그인</LoginFormButton>
                    <KakaoLogin>카카오 로그인</KakaoLogin>
        </LoginForm>
    )
}