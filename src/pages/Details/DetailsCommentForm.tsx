import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FormEvent } from "react"
import styled from "styled-components"
import { createComment } from "../../api/createPost"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { onChangeComment } from "../../store/features/writing/postingSlice"
import { useParams } from "react-router-dom"

const Container = styled.form`
    position: relative;
    textarea{
        border-radius: 5px;
        width: 100%;
        padding:10px 10px 3px 10px;
        box-sizing: border-box;
        resize: none;
        line-height: 1.5;
        font-size: 13px;
    }
    button{
        position: absolute;
        right: 20px;
        top:50%;
        background-color: green;
        border:none;
        border-radius: 15px;
        padding: 5px 10px;
        transform: translate(0,-50%);
        cursor: pointer;
    }
`

export default function DetailsCommentForm(){
    const dispatch = useDispatch()

    const comment = useSelector((state:RootState)=> state.posting.comment)
    const {userNickname,userId} = useSelector((state:RootState)=> state.loginState)
    const {id} = useParams()
    console.log(userNickname,userId,id)

    const handelForm = async(e: React.FormEvent) => {
        e.preventDefault()

        try{
            await createComment({
                board_id:id,
                userUid:userId,
                nickname:userNickname,
                comment:comment})
        }catch(error){
            console.error(error)
        }
    }

    return(
        <Container onSubmit={handelForm}>
            <textarea
            value={comment}
            onChange={(e)=>dispatch(onChangeComment(e.target.value))}
             name="#" id="#"></textarea>
            <button type="submit"><FontAwesomeIcon icon={faCheck} /></button>
        </Container>
    )
}