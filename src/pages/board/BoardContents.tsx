import styled from "styled-components"

import { BoardContentsPropsType, pageDataType } from "../../types/types"

import testImg from './../../img/KakaoTalk_20240625_092242230_01.jpg'

import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen } from "@fortawesome/free-solid-svg-icons"

import { fetchPosts } from "../../api/fetchPosts"

import { getPosts } from "../../store/features/fetch/fetchSlice"
import { RootState } from "../../store/store"
import { PageNumber } from "../../style/paginationStyle"

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

export default function BoardContents({
    boardName
}:BoardContentsPropsType){

    const {posts,loading,error} = useSelector((state:RootState)=> state.fetchItem)

    const [currentPage,setCurrentPage] = useState<number>(0)
    const itemsPerPage = 8

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const path = useLocation()

    useEffect(()=>{
        const loadPosts = async () =>{
            try{
                const data = await fetchPosts()

                dispatch(getPosts(data))
            }catch(error){
                console.error(error)
            }
        }
        loadPosts()
    },[dispatch])

    const handelPagination = (data:pageDataType) =>{
        setCurrentPage(data.selected)
    }

    const offset = currentPage * itemsPerPage;
    const currentItems = posts.slice(offset, offset + itemsPerPage)
    const pageCount = Math.ceil(posts.length / itemsPerPage)

    return(
        <Container>
            <h3>{boardName}</h3>
            {currentItems.map((item)=>{
                return(
            <BoardContent key={item.id}
            onClick={()=>navigate(`${path.pathname}/${item.id}`)}>
                <img src={testImg} alt="" />
                <h3>{item.title}</h3>
                <p>{item.content}</p>
            </BoardContent>
                )
            })}
            <PageNumber>
                <ReactPaginate
                     previousLabel={'previous'}
                    nextLabel={'next'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handelPagination}
                    containerClassName={'pagination'}
                    activeClassName={'active'}/>
                <Link to={'/writing'}>
                <FontAwesomeIcon icon={faPen} />
                </Link>
            </PageNumber>
        </Container>
    )
}