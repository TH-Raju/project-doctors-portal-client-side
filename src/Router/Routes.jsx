import { createBrowserRouter } from 'react-router-dom';
import Appoinment from '../components/Appoinment/Appoinment';
import Home from '../components/Home/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Dashboard from '../dashBoard/Dashboard';
import Main from '../layout/Main';
import PrivateRoute from '../Routes/PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/appoinment',
                element: <Appoinment></Appoinment>
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }

])