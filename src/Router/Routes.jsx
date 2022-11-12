import { createBrowserRouter } from 'react-router-dom';
import Appoinment from '../components/Appoinment/Appoinment';
import Home from '../components/Home/Home';
import Login from '../components/Login';
import Main from '../layout/Main';

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
                path: '/appoinment',
                element: <Appoinment></Appoinment>
            }
        ]
    }
])