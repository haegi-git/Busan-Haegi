import { styled } from "styled-components"

const Container = styled.div`
    form{
        width: 250px;
        border: 1px solid rgba(255,255,255,0.7);
        border-radius: 5px;
        margin: auto;
        display: flex;
        flex-direction: column;
        padding: 15px;
        margin-top:30px;
        h3{
            text-align: center;
        }
        input,button{
            padding: 10px;
            border-radius: 5px;
            margin:7px;
            font-weight: ${((props)=> props.theme.weight.fontBold)};
        }
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

export default function LoginForm(){
    return(
        <Container>
                <form action="#">
                    <h3>로그인</h3>
                    <input type="text" placeholder="아이디를 입력하세요." />
                    <input type="password" placeholder="비밀번호를 입력하세요." />
                    <LoginButton>로그인</LoginButton>
                    <Kakao>카카오 로그인</Kakao>
                </form>
            </Container>
    )
}