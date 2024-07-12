import { styled } from "styled-components";

export const PageNumber = styled.div`
display: flex;
width: 100%;
padding: 15px;
justify-content: center;
align-items: center;
position: relative;
> a{
    position: absolute;
    right: 30px;
    bottom:15px;
    color: black;
    border: 1px solid black;
    padding: 5px;
    border-radius: 15px;
}
> .pagination{
    display: flex;
}
> .pagination li{
    cursor: pointer;
    margin-right: 15px;
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
}
> .pagination .active{
    background-color: red;
}
> .pagination li:hover{
    background-color: rgba(0,0,0,0.3);
}
`