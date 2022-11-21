import { createBrowserRouter } from 'react-router-dom';
import About from '../components/About/About';
import Appoinment from '../components/Appoinment/Appoinment';
import Home from '../components/Home/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import DisplayError from '../components/Shared/DisplayError';
import AddDoctor from '../dashBoard/AddDoctor';
import AllUsers from '../dashBoard/AllUsers';
import ManageDoctors from '../dashBoard/ManageDoctors';
import MyAppoinment from '../dashBoard/MyAppoinment';
import Payment from '../dashBoard/Payment';
import DashboardLayout from '../layout/DashboardLayout';
import Main from '../layout/Main';
import AdminRoute from '../Routes/AdminRoute';
import PrivateRoute from '../Routes/PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
                path: '/about',
                element: <About></About>
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
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppoinment></MyAppoinment>

            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoute><Payment></Payment></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }
        ]
    }

])