import styled from "styled-components"
import Preview from "./Preview"
import { useState } from "react"
import LoginForm from "../components/LoginForm"

const Container = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    background-color: red;
    width: 100%;
    height: 600px;
    box-sizing: border-box;
    > div:first-child{
        background-color: #FF6969;
        >h3{
            width: 100%;
            height: 50px;
            background-color: bisque;
            margin-bottom:30px;
            justify-content: center;
            display: flex;
            align-items: center;
            font-weight: 600;
        }
    }
    > div:nth-child(2){
        background-color: #C80036;
    }
`

const Contents = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
`

export default function Home(){
    const [testArr,setTestArr] = useState<string[]>(['123','123','123'])
    return(
        <Container>
            <div>
                <h3>미리보기</h3>
                <Contents>
                    {testArr.map((a,idx)=> <Preview key={idx}/>)}
                </Contents>
            </div>

            <LoginForm/>
            
        </Container>
    )
}