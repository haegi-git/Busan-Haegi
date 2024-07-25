import styled from "styled-components"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { loginState } from "../api/loginState"
import { userType } from "../types/types"
import { getUserEmail, getUserId, getUserNickname } from "../store/features/loginState/loginStateSlice"

const Container = styled.div`

`

export default function Layout(){

    const dispatch = useDispatch()

  useEffect(()=>{
    const getUserData = async() => {
      try{
        const {userEmail,userId,userNickname}:userType = await loginState()

      dispatch(getUserEmail(userEmail))
      dispatch(getUserId(userId))
      dispatch(getUserNickname(userNickname))
      }catch(error){

      }
    }

    getUserData()
  },[dispatch])

    return(
        <Container>
            <Header/>

            <Outlet/>
        </Container>
    )
}