import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"

import testImg from './../../img/KakaoTalk_20240625_092242230_01.jpg'
import longImg from './../../img/PC_ginseng_banner.jpg'

import { useEffect, useState } from "react"
import { fetchDetailPost } from "../../api/fetchPosts"
import { PostItemType } from "../../types/types"
import DetailsCommnet from "./DetailsComment"
import { useDispatch, useSelector } from "react-redux"
import { onChangeContent, onChangeTitle } from "../../store/features/writing/postingSlice"
import { RootState } from "../../store/store"
import { deletePost } from "../../api/deletePost"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    `
const TitleBox = styled.div`
    padding: 20px;
    background-color: gray;
`

const ContentBox = styled.div`
    background-color: green;
        display: grid;
        grid-template-columns: 1fr 2fr;
        > div:first-child{
            padding: 20px;
        }
        img{
            width: 100%;
        }
        > div:last-child{
            padding: 20px;
            padding-left: 0;
        }

`

const ButtonWrap = styled.div`

`

export default function DetailsContent(){

    const {path,id} = useParams<{path?: string, id?: string}>()
    // params로 어느 카테고리에 어느 아이템에 들어왔는지 확인

    const [detailData,setDetailData] = useState<PostItemType>()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    console.log(detailData)
    useEffect(()=>{
        if(path && id){
            // 조건문으로 감싸놓은 이유는 타입 에러가 계속 발생하기 때문
            const loadPost = async (path:string,id:string)=>{
                try{
                    const data = await fetchDetailPost({category:path,id})
                    // fetchDetailPost라는 함수를 fetchPosts.ts에 생성
                    // 인자로 카테고리와 id를 받아
                    // supabase에 원하는 테이블에 원하는 id값을 가진 아이템만
                    // 받아옴 (이렇게 만든 이유는 새로고침 또는 url을 타고 들어왔을 때에도 데이터를 받아오기 위함)

                    setDetailData(data[0])
                    // detailData에 계속 배열 안에 객체로 저장이되어
                    // 화면에 뿌려줄 때 에러가 발생하는걸 막기위해
                    // 객체로 나오게 끔 [0]번째 요소만 선택
                }catch(error){
                    console.error(error)
                }
            }
            loadPost(path,id)
        }
    },[path,id])

    const updatePage = () =>{
        dispatch(onChangeTitle(detailData?.title))
        dispatch(onChangeContent(detailData?.content))
        navigate(`/update/${id}`)
    }

    const deletebutton = ()=>{
        if(window.confirm('정말 지우시겠습니까?')){
            const handleDelete = async() =>{
                if(detailData){
                    try{
                        await deletePost({id:detailData?.id,userUid:detailData.userUid})
                    }catch(error){
                        console.error(error)
                    }
                }
            }
            handleDelete()
        }else{

        }
    }

    

    if(detailData){
        // type에러를 방지하기위해 조건문으로 렌더링
        return(
            <Container>

                <TitleBox>
                    <h1>{detailData.title}</h1>
                </TitleBox>

                <ContentBox>
                    <div>
                        <img src={testImg} alt="" />
                    </div>
                    <div>
                        <p>
                            {detailData.content}

                        </p>
                    </div>
                </ContentBox>

                <ButtonWrap>
                    <button onClick={updatePage}>
                        수정하기
                    </button>
                    <button onClick={deletebutton}>
                        삭제하기
                    </button>
                </ButtonWrap>

                <DetailsCommnet/>

        </Container>
        )
    }

    return(
        <h1>로딩중</h1>
    )
}