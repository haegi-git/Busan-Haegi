import { useEffect } from "react";
import { MainContainer } from "../../style/MainContainer";
import LoginForm from "../components/LoginForm";
import WritingForm from "./WritingForm";
import { useDispatch } from "react-redux";
import { onChangeContent, onChangeTitle } from "../../store/features/writing/postingSlice";
import { useLocation, useNavigate } from "react-router-dom";

export default function Writing(){

    const dispatch = useDispatch()

    const location = useLocation()
    const navigate = useNavigate()

    useEffect(()=>{

        return() =>{
            if(window.confirm('페이지를 벗어나겠습니까?')){
                dispatch(onChangeTitle(''))
                dispatch(onChangeContent(''))
            }else{
                navigate(location.pathname)
            }
        }
    },[])

    return(
        <MainContainer>
            <div>
                <WritingForm/>
            </div>
            <LoginForm/>
        </MainContainer>
    )
}

