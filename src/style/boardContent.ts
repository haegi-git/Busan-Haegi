import { styled } from "styled-components";


export const boardContent = styled.div`
        width: 200px;
        height: 280px;
        border: 1px solid black;
        margin: 15px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        cursor: pointer;
    > img{
        width: 200px;
        height: 200px;
    }
    > h3{
        text-align: center;
        padding: 5px 0px;
    }
    > p{
        margin:15px 5px 0px 5px;
        color:rgba(0,0,0,0.7)
    }
`