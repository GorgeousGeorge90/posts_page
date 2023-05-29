import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import UserPage from "../pages/UserPage/UserPage";
import RoutLayout from "./RoutLayout";
import PostsPage from "../pages/PostsPage/PostsPage";
import AboutPage from "../pages/AboutPage/AboutPage";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RoutLayout/>}>
            <Route index element={<PostsPage/>}/>
            <Route path='about' element={<AboutPage/>}/>
            <Route path='user_page' element={<UserPage/>}/>
        </Route>
    )

)

export default router