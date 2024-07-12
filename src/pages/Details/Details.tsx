import LoginForm from "../components/LoginForm"
import { MainContainer } from "../../style/MainContainer"
import DetailsContent from "./DetailsContent"

export default function Details(){

    return(
        <MainContainer>
            <DetailsContent/>
            <LoginForm/>
        </MainContainer>
    )
}