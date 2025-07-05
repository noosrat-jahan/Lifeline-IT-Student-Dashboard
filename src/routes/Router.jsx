import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

import MyDashboard from '../pages/MyDashboard';
import MyCourses from '../pages/MyCourses';
import MyOrders from '../pages/MyOrders';
import Notices from '../pages/Notices';
import Profile from '../pages/Profile';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/dashboard",
            element: <MyDashboard></MyDashboard>
        },
        {
            path: "/courses",
            element: <MyCourses></MyCourses>
        },
        {
            path: "/orders",
            element: <MyOrders></MyOrders>
        },
        {
            path: "/notice",
            element: <Notices></Notices>
        },
        {
            path: "/profile",
            element: <Profile></Profile>
        },
    ]
  },
]);

export default Router;