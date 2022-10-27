import Main from "../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog/Blog";
import Login from '../pages/Login/Login';
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Login/Register";
import CourshCard from "../pages/Coourse/CourshCard";
import Faq from "../pages/Faq.js/Faq";
import CourseDetailsMap from "../pages/Coourse/CourseDetailsMap";
import CheekOut from "../pages/Coourse/CheekOut";
import PrivateRouts from "./PrivateRouts/PrivateRouts";

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


            },
            {
                path: '/coursedetailsmap/:id',
                element: <CourseDetailsMap></CourseDetailsMap>,
                loader: ({ params }) => fetch(`https://learn-with-programming-server-ten.vercel.app/course-details/${params.id}`)
            },
            {
                path: '/cheekout/:_id',
                element: <PrivateRouts><CheekOut></CheekOut></PrivateRouts>,
                loader: ({ params }) => fetch(`https://learn-with-programming-server-ten.vercel.app/course-premium/${params._id}`)
            }
        ]
    }
])