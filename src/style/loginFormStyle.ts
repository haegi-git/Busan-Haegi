import styled from "styled-components";

export const LoginWrap = styled.div`
        width: 250px;
        border: 1px solid rgba(255,255,255,0.7);
        border-radius: 5px;
        margin: auto;
        display: flex;
        flex-direction: column;
        margin-top:30px;
`

export const LoginFormButton = styled.button`
            padding: 10px;
            border-radius: 5px;
            margin:7px;
            font-weight: ${((props)=> props.theme.weight.fontBold)};
            background-color: ${((props)=> props.theme.colors.titleColor)};
            color: ${((props)=> props.theme.colors.background)};
            cursor: pointer;
`

export const LoginFormInput = styled.input`
            padding: 10px;
            border-radius: 5px;
            margin:7px;
            font-weight: ${((props)=> props.theme.weight.fontBold)};
`

export const KakaoLogin = styled.button`
    padding: 10px;
    border-radius: 5px;
    margin:7px;
    font-weight: ${((props)=> props.theme.weight.fontBold)};
    background-color: #EDDA00;
    color: ${((props)=> props.theme.colors.titleColor)};
    cursor: pointer;
`