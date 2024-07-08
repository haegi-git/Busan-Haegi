import { MainContainer } from "../../style/MainContainer";
import LoginForm from "../components/LoginForm";
import WritingForm from "./WritingForm";


export default function Writing(){
    return(
        <MainContainer>
            <div>
                <WritingForm/>
            </div>
            <LoginForm/>
        </MainContainer>
    )
}