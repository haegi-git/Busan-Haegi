import { useDispatch, useSelector } from "react-redux"
import { styled } from "styled-components"
import { RootState } from "../../store/store"
import { signUp } from "../../api/signup"
import { onChangeEmail, onChangeNickname, onChangePassword } from "../../store/features/signupInput/signupInputSlice"

const SignForm = styled.form`

            display: flex;
            flex-direction: column;

        input,button{
            padding: 10px;
            border-radius: 5px;
            margin:7px;
            font-weight: ${((props)=> props.theme.weight.fontBold)};
        }
`

const SignButton = styled.button`
    background-color: ${((props)=> props.theme.colors.titleColor)};
    color: ${((props)=> props.theme.colors.background)};
`


export default function LoginFormSignup(){

    const dispatch = useDispatch()

    const {email,password,nickname} = useSelector((state:RootState)=> state.signupInput)

    const handelSignUp = async(e:React.FormEvent) =>{
        e.preventDefault()
        try{
            await signUp(email,password,nickname)
            alert('성공')
        }catch(error){
            console.error(error)
            
        }
    }

    return(
            <SignForm>
                    <input
                    onChange={(e)=>dispatch(onChangeEmail(e.target.value))}
                     value={email}
                      type="text"
                       placeholder="아이디를 입력하세요." />
                    <input
                    onChange={(e)=>dispatch(onChangePassword(e.target.value))}
                    value={password}
                     type="password"
                      placeholder="비밀번호를 입력하세요." />
                    <input
                    onChange={(e)=>dispatch(onChangeNickname(e.target.value))}
                    value={nickname}
                    type="text"
                     placeholder="닉네임을 입력하세요."/>

                    <SignButton onClick={handelSignUp}>회원가입</SignButton>
            </SignForm>
    )
}