import {createBrowserRouter} from "react-router-dom"
import LayOut from "../components/common/LayOut"


export  const mainRoute = createBrowserRouter([
    {
     path:"/",
     element:<LayOut/>
    }
])