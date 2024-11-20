import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/home/Home";
import StartLearning from "../components/startLearning/StartLearning";
import Tutorials from "../components/tutorials/Tutorials";
import AboutUs from "../components/aboutUs/AboutUs";
import ErrorPage from "../components/errorpage/ErrorPage";
import Lessons from "../components/lessons/Lessons";
import Instructors from "../components/instructor/Instructors";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "../components/forgotpassword/ForgotPassword";
import MyProfile from "../components/myProfile/MyProfile";
import UpdateProfile from "../components/updateProfile/UpdateProfile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children: [
                    {
                        path: '/',
                        element: <Instructors></Instructors>,
                        loader: async () => {
                            const response = await fetch('/instructors.json');
                            const instructors = await response.json();
                            return instructors;
                        }
                    }
                ]
            },
            {
                path: 'startlearning',
                element: <StartLearning></StartLearning>,
                loader: async () => {
                    const response = await fetch('/vocab.json');
                    const vocabData = await response.json();
                    return vocabData;
                }
            },
            {
                path: 'tutorials',
                element: <PrivateRoute><Tutorials></Tutorials></PrivateRoute>,
                loader: async () => {
                    const response = await fetch('/tutorial.json');
                    const videos = await response.json();
                    return videos;
                }
            },
            {
                path: 'aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'lessons/:lesson_no',
                element: <PrivateRoute><Lessons /></PrivateRoute>,
                loader: async ({ params }) => {
                    const response = await fetch('/vocab.json');
                    const vocabData = await response.json();
                    return vocabData.filter(item => item.Lesson_no === parseInt(params.lesson_no));
                }
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'myprofile',
                element: <PrivateRoute> <MyProfile></MyProfile> </PrivateRoute>
            },
            {
                path: 'updateprofile',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path: 'forgotpassword',
                element: <ForgotPassword></ForgotPassword>
            }

        ],

    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])
export default router;