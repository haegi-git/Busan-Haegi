import { styled } from "styled-components"
import { useState } from "react"

import LoginFormLogin from "./LoginFormLogin"
import LoginFormSignup from "./LoginFormSignup"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { LoginUserState } from "./LoginUserState"
import { LoginWrap } from "../../style/loginFormStyle"

const Container = styled.div`

`

const LoginToggle = styled.div`
         display: grid;
         grid-template-columns: 1fr 1fr;
         text-align: center;
         border-bottom: 1px solid rgba(255,255,255,0.7);
          cursor: pointer;
            h3{
                padding: 15px;
            }
            h3:first-child{
                border-right: 1px solid rgba(255,255,255,0.7);;
            }
`

export default function LoginForm(){

    const [signup,setSingup] = useState(true)


    const user = useSelector((state:RootState)=> state.loginState)

    return(
        <Container>
          {user.userId ? <LoginUserState/> :
           <LoginWrap>
                <LoginToggle>
                    <h3 onClick={()=>setSingup(true)}>로그인</h3>
                    <h3 onClick={()=>setSingup(false)}>회원가입</h3>
                </LoginToggle>

                {signup === false ? <LoginFormSignup/> :<LoginFormLogin/> }
            </LoginWrap>
            }

            </Container>
    )
}