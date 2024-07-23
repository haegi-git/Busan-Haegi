import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { RootState } from "../../store/store"
import { onChangeLoginEmail, onChangeLoginPassword } from "../../store/features/loginInput/loginInputSlice"
import { login } from "../../api/login"

const LoginForm = styled.form`

            display: flex;
            flex-direction: column;

        input,button{
            padding: 10px;
            border-radius: 5px;
            margin:7px;
            font-weight: ${((props)=> props.theme.weight.fontBold)};
        }
`

const LoginButton = styled.button`
    background-color: ${((props)=> props.theme.colors.titleColor)};
    color: ${((props)=> props.theme.colors.background)};
`
const Kakao = styled.button`
    background-color: #EDDA00;
    color: ${((props)=> props.theme.colors.titleColor)};
`

export default function LoginFormLogin(){

    const dispatch = useDispatch()

    const {loginEmail,loginPassword} = useSelector((state:RootState)=>state.loginInput)

    console.log(`로긴한 아이디비번 : ${loginEmail}, ${loginPassword}`)

    const loginButton = async(e:React.FormEvent) =>{
        e.preventDefault()
        try{
            await login({email:loginEmail,password:loginPassword})
            alert('로긴성공')
        }catch(error){
            console.error(error)
            alert('로긴실패')
        }
    }

    return(
        <LoginForm>
            <input
             type="text"
              placeholder="이메일을 입력하세요."
              value={loginEmail}
              onChange={(e)=> dispatch(onChangeLoginEmail(e.target.value))}
               />
                    <input
                     type="password"
                      placeholder="비밀번호를 입력하세요."
                      value={loginPassword}
                      onChange={(e)=> dispatch(onChangeLoginPassword(e.target.value))} />
                    <LoginButton onClick={loginButton}>로그인</LoginButton>
                    <Kakao>카카오 로그인</Kakao>
        </LoginForm>
    )
}