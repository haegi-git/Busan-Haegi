import styled from "styled-components"
import DetailsCommentForm from "./DetailsCommentForm"
import { useEffect } from "react"
import { fetchComments } from "../../api/fetchPosts"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getComments } from "../../store/features/fetch/commentsSlice"
import { RootState } from "../../store/store"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;

    header{
        margin-bottom: 20px;
    }
    ul li{
        margin-bottom: 15px;
        padding-bottom: 5px;
        border-bottom: 1px solid black;
        display: grid;
        grid-template-columns: 1fr 8fr 1fr;
    }
    ul > li > p:first-child,p:last-child{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export default function DetailsCommnet(){
    const {id} = useParams()

    const dispatch = useDispatch()
    
    const comments = useSelector((state:RootState)=> state.commentsSlice.Comments)
    useEffect(()=>{
        const loadComments = async()=>{
            try{
                const data = await fetchComments(id)

                dispatch(getComments(data))
            }catch(error){
                console.error(error)
            }
        }

        loadComments()
        
        return()=>{
            dispatch(getComments([]))
        }

    },[dispatch])
    return(
        <Container>
            <header>Comments</header>
            <div>
                <ul>
                    {comments.map((item,idx)=>{
                        return(
                        <li>
                            <p>{item.nickname}</p>
                            <p>{item.comment}</p>
                            <p>시간</p>
                        </li>
                        )
                    })}
                </ul>
            </div>
            <DetailsCommentForm/>
        </Container>
    )
}