import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FormEvent } from "react"
import styled from "styled-components"

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

    const handelForm = (e: FormEvent) => {
        e.preventDefault()
    }

    return(
        <Container onClick={handelForm}>
            <textarea name="#" id="#"></textarea>
            <button><FontAwesomeIcon icon={faCheck} /></button>
        </Container>
    )
}