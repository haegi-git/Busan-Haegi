import Board from "./pages/board/Board"
import Details from "./pages/Details/Details"
import Home from "./pages/Home/Home"
import Layout from "./pages/Layout"
import Writing from "./pages/Writing/Writing"

const routes = [
    {
        element: <Layout/>,
        children:[
            {path: '/',element: <Home/>},

            {path: '/board',element: <Board/>},

            {path: '/writing',element: <Writing/>},

            {path: '/:path/:id', element: <Details/>},

            {path: '/update/:id', element: <Writing/>}
        ]
    }
]

export default routes