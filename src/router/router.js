import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import PostsPage from "../pages/PostsPage/MyPage";
import MyPage from "../pages/MyPage/MyPage";
import UserPage from "../pages/UserPage/UserPage";
import RoutLayout from "./RoutLayout";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RoutLayout/>}>
            <Route index element={<PostsPage/>}/>
            <Route path='my_page' element={<MyPage/>}/>
            <Route path='user_page' element={<UserPage/>}/>
        </Route>
    )

)

export default router