import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { RootState } from "../../store/store"
import { LoginFormButton } from "../../style/loginFormStyle"
import { supabase } from "../../subabaseClient"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell } from "@fortawesome/free-solid-svg-icons"
import { getUserEmail, getUserId, getUserNickname } from "../../store/features/loginState/loginStateSlice"

const Container = styled.div`
    width: 250px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  text-align: center;

        h3{
            padding: 10px;
            color: #fff;
        }
        p{
            padding: 10px;
            padding-top:0;
            color:#fff;
        }
`

const BellIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    > div{
    position: relative;
	background: #84dee6;
	border-radius: .4em;
    margin-left: 15px;
    padding: 5px 15px;
        &::after{
            content: '';
	        position: absolute;
	        left: 2px;
	        top: 50%;
	        width: 0;
	        height: 0;
	        border: 10px solid transparent;
	        border-right-color: #84dee6;
	        border-left: 0;
	        margin-top: -10px;
	        margin-left: -10px;
        }
    }
`

export const LoginUserState = () =>{

    const user = useSelector((state:RootState)=> state.loginState)

    const dispatch = useDispatch()

    const logout = () =>{
        supabase.auth.signOut()

        dispatch(getUserEmail(''))
        dispatch(getUserId(''))
        dispatch(getUserNickname(''))
      }

    return(
        <Container>
            <h3>안녕하세요 {user.userNickname}님</h3>

            <p>오늘의 운세 : 개 똥 구림 ㅋㅋ</p>

            <BellIcon>
                <FontAwesomeIcon icon={faBell}/>
                <div>!</div>
            </BellIcon>

            <LoginFormButton>내 정보</LoginFormButton>
            <LoginFormButton onClick={logout}>로그아웃</LoginFormButton>

        </Container>
    )
}