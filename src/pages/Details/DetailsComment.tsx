import styled from "styled-components"
import DetailsCommentForm from "./DetailsCommentForm"

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
    return(
        <Container>
            <header>Comments</header>
            <div>
                <ul>
                    <li>
                        <p>이름</p>
                        <p>댓글</p>
                        <p>어제</p>
                    </li>
                    <li>댓글</li>
                    <li>댓글</li>
                    <li>댓글</li>
                </ul>
            </div>
            <DetailsCommentForm/>
        </Container>
    )
}