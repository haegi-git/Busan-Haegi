import { MainContainer } from "../../style/MainContainer"
import LoginForm from "../components/LoginForm"
import BoardContents from "./BoardContents"

export default function Board(){
    return(
        <MainContainer>
            <BoardContents boardName={'자유게시판'}/>
            <LoginForm/>
        </MainContainer>
    )
}