import Board from "./pages/board/Board"
import Home from "./pages/Home/Home"
import Layout from "./pages/Layout"
import Writing from "./pages/Writing/Writing"

const routes = [
    {
        element: <Layout/>,
        children:[
            {path: '/',element: <Home/>},

            {path: '/board',element: <Board/>},

            {path: '/writing',element: <Writing/>}
        ]
    }
]

export default routes