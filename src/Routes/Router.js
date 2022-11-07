import { createBrowserRouter } from "react-router-dom";
import AddService from "../Components/AddService/AddService";
import Home from "../Components/Home/Home";
import Main from "../Components/Layout/Main";
import Login from "../Components/Login/Login";
import Review from "../Components/review/Review";
import Signup from "../Components/SignUp/Signup";

export const router = createBrowserRouter([

    {

        path: '/',
        element: <Main></Main>,
        errorElement: <h1>error</h1>,
        children: [

            {

                path: '/',
                element: <Home></Home>

            },
            {

                path: '/login',
                element: <Login></Login>

            },
            {

                path: '/signup',
                element: <Signup></Signup>

            },
            {

                path: '/review',
                element: <Review></Review>

            },
            {

                path: '/addservice',
                element: <AddService></AddService>

            },





        ]

    }








])