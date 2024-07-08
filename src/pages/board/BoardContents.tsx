import styled from "styled-components"
import { BoardContentsPropsType } from "../../types/types"

import testImg from './../../img/KakaoTalk_20240625_092242230_01.jpg'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen } from "@fortawesome/free-solid-svg-icons"

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const BoardContent = styled.div`
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

const PageNumber = styled.div`
    display: flex;
    width: 100%;
    padding: 15px;
    justify-content: center;
    position: relative;
    a{
        position: absolute;
        right: 30px;
        bottom:15px;
        color: black;
        border: 1px solid black;
        padding: 5px;
        border-radius: 15px;
    }
`
export default function BoardContents({
    boardName
}:BoardContentsPropsType){
    const testArr = [1,2,3,4,5,6,7,8]
    return(
        <Container>
            <h3>{boardName}</h3>
            {testArr.map(()=>{
                return(
            <BoardContent>
                <img src={testImg} alt="" />
                <h3>제목</h3>
                <p>미리보이는 글</p>
            </BoardContent>
                )
            })}
            <PageNumber>
                <p>1,2,3,4,5</p>
                <Link to={'/writing'}>
                <FontAwesomeIcon icon={faPen} />
                </Link>
            </PageNumber>
        </Container>
    )
}