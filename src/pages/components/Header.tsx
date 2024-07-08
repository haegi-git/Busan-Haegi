import { Link } from "react-router-dom"
import styled from "styled-components"

const Contianer = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    background-color: ${((props)=>props.theme.colors.background)};
    justify-content: space-between;
    align-items: center;
    > a{
        font-size: 22px;
        font-weight: ${((props)=> props.theme.weight.fontBold)};
        color: ${((props)=> props.theme.colors.titleColor)};
        text-decoration: none;
        padding: 20px;
    }
    form > input{
        padding: 7px 15px;
        border: none;
        background-color: rgba(245,235,215,0.8);
        border-radius: 15px;
    }
    ul{
        padding: 15px;
        display: flex;
    }
    li{
        padding: 3px 5px;
        margin: 3px 5px;
        cursor: pointer;
        color: ${((props)=> props.theme.colors.titleColor)};
        font-weight: ${((props)=> props.theme.weight.fontBold)};
    }
`

export default function Header(){
    return(
        <Contianer>
        <Link to={'/'}>해기네 뒷간</Link>
        <form>
            <input type="text" placeholder="검색어를 입력하세요." />
        </form>
        <ul>
            <li><Link to={'/board'}>자유게시판</Link></li>
            <li>게시판</li>
            <li>게시판</li>
            <li>게시판</li>
        </ul>
        </Contianer>
    )
}