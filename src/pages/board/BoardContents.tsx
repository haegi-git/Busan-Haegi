import styled from "styled-components"
import { BoardContentsPropsType, pageDataType, PostItemType } from "../../types/types"

import testImg from './../../img/KakaoTalk_20240625_092242230_01.jpg'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { fetchPosts } from "../../api/fetchPosts"
import { useDispatch, useSelector } from "react-redux"
import { getPosts } from "../../store/features/fetch/fetchSlice"
import { RootState } from "../../store/store"
import ReactPaginate from "react-paginate"

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
    align-items: center;
    position: relative;
    > a{
        position: absolute;
        right: 30px;
        bottom:15px;
        color: black;
        border: 1px solid black;
        padding: 5px;
        border-radius: 15px;
    }
    > .pagination{
        display: flex;
    }
    > .pagination li{
        cursor: pointer;
        margin-right: 15px;
        border: 1px solid black;
        padding: 10px;
        border-radius: 10px;
    }
    > .pagination .active{
        background-color: red;
    }
    > .pagination li:hover{
        background-color: rgba(0,0,0,0.3);
    }
`
export default function BoardContents({
    boardName
}:BoardContentsPropsType){

    const {posts,loading,error} = useSelector((state:RootState)=> state.fetchItem)

    const [currentPage,setCurrentPage] = useState<number>(0)
    const itemsPerPage = 8

    const dispatch = useDispatch()

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
            <BoardContent key={item.id}>
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