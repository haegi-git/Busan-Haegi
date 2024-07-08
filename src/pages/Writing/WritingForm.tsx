import { faImage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

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
    return(
        <Container action="#">
            <input type="text" placeholder="제목을 입력하세요." />
            <textarea name="#" id="#" placeholder="내용을 입력하세요."/>
            <div>
                <input type="file" name="image" id="image" />
                <label htmlFor="image"><FontAwesomeIcon icon={faImage} /></label>
                <button>작성하기</button>
            </div>
        </Container>
    )
}