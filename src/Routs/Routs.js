import Main from "../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Login from '../pages/Login';
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";
import CourshCard from "../pages/Coourse/CourshCard";
import Faq from "../pages/Coourse/Faq";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courshcard',
                element: <CourshCard></CourshCard>


            }
        ]
    }
])