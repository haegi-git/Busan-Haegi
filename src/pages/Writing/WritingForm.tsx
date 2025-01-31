import { faImage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { RootState } from "../../store/store"
import { createPost } from "../../api/createPost"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { onChangeContent, onChangeTitle } from "../../store/features/writing/postingSlice"
import { updatePost } from "../../api/update"
import { useEffect, useState } from "react"
import Modal from "../components/Modal"

const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: end;
    margin: auto;
    margin-top:25px;
    input{
        width: 80%;
        margin: auto;
        padding: 20px;
        border-radius: 5px;
    }
    textarea{
        width: 80%;
        margin: auto;
        height: 300px;
        padding: 20px;
        margin-top: 15px;
        resize: none;
        border-radius: 5px;
    }
    >div{
        width: 80%;
        display: flex;
        justify-content: space-between;
        margin: auto;
        button{
            width: 100px;
            height: 50px;
            border: none;
            background-color: #fff;
            border-radius: 15px;
            margin-top: 15px;
            cursor: pointer;
        }
        svg{
            font-size: 30px;
            margin-top:15px;
            cursor: pointer;
        }
        > input{
            display: none;
        }
    }
`

export default function WritingForm(){

    const {title,content} = useSelector((state :RootState)=> state.posting)

    const userUid = useSelector((state:RootState)=> state.loginState.userId)

    const [submit,setSubmit] = useState(false)

    const dispatch = useDispatch()

    const {id} = useParams<{id?:string}>()

    const modalSubmit = (e:React.FormEvent) =>{
        e.preventDefault()
        setSubmit(!submit)
    }

    useEffect(()=>{
        if(!id){
            dispatch(onChangeTitle(''))
            dispatch(onChangeContent(''))
        }

        return () =>{
            
        }
    },[])


    if(!id){
        return(
            <>
            <Container action="#" onSubmit={modalSubmit}>
                <input
                    value={title}
                    type="text"
                    placeholder="제목을 입력하세요."
                    onChange={(e)=> dispatch(onChangeTitle(e.target.value))} />
                <textarea
                    name="#"
                    id="#"
                    placeholder="내용을 입력하세요."
                    value={content}
                    onChange={(e)=>dispatch(onChangeContent(e.target.value))}/>
                <div>
                    <input type="file" name="image" id="image" />
                    <label htmlFor="image"><FontAwesomeIcon icon={faImage} /></label>
                    <button type="submit">작성하기</button>
                </div>
            </Container>
            {submit === true ? <Modal
            submit={setSubmit}
            title={title}
            content={content}
            id={id}
            userUid={userUid}/>
             : null}
            </>
        )
    }else{
        return(
            <>
            <Container action="#" onSubmit={modalSubmit}>
                <input
                    value={title}
                    type="text"
                    placeholder="제목을 입력하세요."
                    onChange={(e)=> dispatch(onChangeTitle(e.target.value))} />
                <textarea
                    name="#"
                    id="#"
                    placeholder="내용을 입력하세요."
                    value={content}
                    onChange={(e)=>dispatch(onChangeContent(e.target.value))}/>
                <div>
                    <input type="file" name="image" id="image" />
                    <label htmlFor="image"><FontAwesomeIcon icon={faImage} /></label>
                    <button type="submit">수정하기</button>
                </div>
            </Container>
            {submit === true ? <Modal
            submit={setSubmit}
            title={title}
            content={content}
            id={id}
            userUid={userUid}/>
             : null}
            </>
        )
    }

}