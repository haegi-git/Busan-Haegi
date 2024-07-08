import styled from "styled-components";

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    background-color: red;
    width: 100%;
    height: 600px;
    box-sizing: border-box;
    > div:first-child{
        background-color: #FF6969;
        >h3{
            width: 100%;
            height: 50px;
            background-color: bisque;
            margin-bottom:30px;
            justify-content: center;
            display: flex;
            align-items: center;
            font-weight: 600;
        }
    }
    > div:nth-child(2){
        background-color: #C80036;
    }
`