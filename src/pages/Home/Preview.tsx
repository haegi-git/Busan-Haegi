import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
        border: 2px solid gray;
        width: 300px;
        height: 400px;
        background-color: antiquewhite;
        margin: auto;
        border-radius: 5px;
        a {
            border-bottom: 1px solid black;
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 10px 0px;
            text-decoration: none;
            color: ${((props)=> props.theme.colors.titleColor)}
        }
        > div > ul{
            padding: 15px;
        }
        > div > ul > li{
            border-bottom: 1px solid black;
            padding: 5px 0px;
        }
`

export default function Preview(){
    return(
        <Container>
            <Link to={'/'}>카테고리</Link>
            <div>
                <ul>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>12개</li>
                </ul>
            </div>
        </Container>
    )
}