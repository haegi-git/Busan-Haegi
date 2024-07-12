import { useParams } from "react-router-dom"
import styled from "styled-components"

import testImg from './../../img/KakaoTalk_20240625_092242230_01.jpg'
import longImg from './../../img/PC_ginseng_banner.jpg'

import { useEffect, useState } from "react"
import { fetchDetailPost } from "../../api/fetchPosts"
import { PostItemType } from "../../types/types"

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

    const [detailData,setDetailData] = useState<PostItemType>()

    useEffect(()=>{
        if(path && id){
            const loadPost = async (path:string,id:string)=>{
                try{
                    const data = await fetchDetailPost({category:path,id})

                    setDetailData(data[0])
                }catch(error){
                    console.error(error)
                }
            }
            loadPost(path,id)
        }
    },[path,id])

    console.log(detailData)

    if(detailData){
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
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse aspernatur alias explicabo, earum hic sed dolorum dolores. Sed repudiandae eligendi, debitis laboriosam iure eius culpa voluptate unde expedita corporis ex!

                    </p>
                </div>
            </ContentBox>
            <ButtonWrap>
                <button>
                    수정하기
                </button>
                <button>
                    삭제하기
                </button>
            </ButtonWrap>
        </Container>
        )
    }

    return(
        <h1>로딩중</h1>
    )
}