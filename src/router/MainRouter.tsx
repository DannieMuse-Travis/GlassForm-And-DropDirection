import {createBrowserRouter} from "react-router-dom"
import LayOut from "../components/common/LayOut"
import HomeScreen from "../pages/HomeScreen"


export  const mainRoute = createBrowserRouter([
    {
     path:"/",
     element:<LayOut/>,
     children:[
        {
            index:true,
            element:<HomeScreen/>
        }
     ]
    }
])