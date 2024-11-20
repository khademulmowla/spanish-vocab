import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../layouts/MainLayOut';
import Home from '../components/home/Home';
import Instructors from '../components/instructor/Instructors';
import StartLearning from '../components/startLearning/StartLearning';
import PrivateRoute from './PrivateRoute';
import Tutorials from '../components/tutorials/Tutorials';
import AboutUs from '../components/aboutUs/AboutUs';
import Lessons from '../components/lessons/Lessons';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import MyProfile from '../components/myProfile/MyProfile';
import UpdateProfile from '../components/updateProfile/UpdateProfile';
import ForgotPassword from '../components/forgotpassword/ForgotPassword';
import ErrorPage from '../components/errorpage/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children: [
                    {
                        path: '/',
                        element: <Instructors></Instructors>,
                        loader: async () => {
                            const response = await fetch('/instructors.json'); // Path to JSON file
                            const instructors = await response.json();
                            return instructors; // Pass data to the AboutUs component
                        }
                    }
                ]
            },
            {
                path: 'startlearning',
                element: <StartLearning></StartLearning>,
                loader: async () => {
                    const response = await fetch('/vocab.json'); // Replace with the correct path to vocab.json
                    const vocabData = await response.json();
                    return vocabData; // Pass the vocab data to the component
                }
            },
            {
                path: 'tutorials',
                element: <PrivateRoute><Tutorials></Tutorials></PrivateRoute>,
                loader: async () => {
                    const response = await fetch('/tutorial.json'); // Replace with your JSON file path
                    const videos = await response.json();
                    return videos; // This will be available as a prop to the Tutorials component
                }
            },
            {
                path: 'aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'lessons/:lesson_no',  // New route for dynamic lessons
                element: <PrivateRoute><Lessons /></PrivateRoute>,
                loader: async ({ params }) => {
                    const response = await fetch('/vocab.json');  // Fetch vocab data
                    const vocabData = await response.json();
                    return vocabData.filter(item => item.Lesson_no === parseInt(params.lesson_no)); // Filter vocab based on lesson_no
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
]);

export default router;