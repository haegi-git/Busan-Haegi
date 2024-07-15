import styled from "styled-components"

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
    return(
        <LoginForm>
            <input type="text" placeholder="아이디를 입력하세요." />
                    <input type="password" placeholder="비밀번호를 입력하세요." />
                    <LoginButton>로그인</LoginButton>
                    <Kakao>카카오 로그인</Kakao>
        </LoginForm>
    )
}