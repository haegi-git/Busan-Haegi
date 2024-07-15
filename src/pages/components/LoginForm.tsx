import { styled } from "styled-components"
import LoginFormLogin from "./LoginFormLogin"
import { useState } from "react"
import LoginFormSingup from "./LoginFormSingup"

const Container = styled.div`

`

const LoginWrap = styled.div`
    width: 250px;
        border: 1px solid rgba(255,255,255,0.7);
        border-radius: 5px;
        margin: auto;
        display: flex;
        flex-direction: column;
        margin-top:30px;

        div{
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
        }

`

export default function LoginForm(){

    const [singup,setSingup] = useState(true)

    return(
        <Container>

            <LoginWrap>
                <div>
                    <h3 onClick={()=>setSingup(true)}>로그인</h3>
                    <h3 onClick={()=>setSingup(false)}>회원가입</h3>
                </div>

                {singup === false ? <LoginFormSingup/> :<LoginFormLogin/> }

            </LoginWrap>
            </Container>
    )
}