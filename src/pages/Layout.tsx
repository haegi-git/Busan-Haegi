import styled from "styled-components"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"

const Container = styled.div`
    
`

export default function Layout(){
    return(
        <Container>
            <Header/>

            <Outlet/>
        </Container>
    )
}