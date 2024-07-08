import Home from "./pages/Home/Home"
import Layout from "./pages/Layout"

const routes = [
    {
        element: <Layout/>,
        children:[
            {path: '/',element: <Home/>}
        ]
    }
]

export default routes