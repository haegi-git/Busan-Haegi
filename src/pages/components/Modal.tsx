import styled from "styled-components"
import { createPost } from "../../api/createPost"
import { useNavigate } from "react-router-dom"
import { updatePost } from "../../api/update"

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0,0,0,0.7);
    z-index: 100;
    top:0;
    left: 0;
    > div{
        width: 300px;
        height: 150px;
        background-color: aqua;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        >p{
            margin-bottom: 15px;
        }
        >div{
            width: 100%;
            display: flex;
            justify-content: center;
            >button{
                width: 30%;
                height: 40px;
                margin:0px 10px;
                cursor: pointer;
            }
        }
    }
`

type ModalType = {
    submit: React.Dispatch<React.SetStateAction<boolean>>;
    title:string,
    content:string,
    id:string | undefined,
    userUid:string,
}

export default function Modal({submit,title,content,id,userUid}:ModalType){

    const navigate = useNavigate()

    const handelSubmit = async(e:React.FormEvent) =>{
        e.preventDefault()
        try {
            await createPost({title,content,userUid})

            navigate('/board')
        } catch(error){
            console.error('Error',error)
            alert('실패')
        }
    }

    const handelUpdate = async(e:React.FormEvent)=>{
        e.preventDefault()

        try{
            await updatePost({title,content,id,userUid})
            navigate('/')
        }catch(error){
            console.error(error)
        }

    }
    
    return(

        <Container>

            <div>
                <p>작성하시겠습니까?</p>
                <div>
                {id === undefined ?
                <button onClick={handelSubmit}>네</button> :
                <button onClick={handelUpdate}>수정하기</button>}

                <button onClick={()=>submit(false)}>아니오</button>
                </div>
            </div>

        </Container>
    )
}