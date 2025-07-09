import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import MyDashboard from "../pages/MyDashboard";
import MyCourses from "../pages/MyCourses";
import MyOrders from "../pages/MyOrders";
import Notices from "../pages/Notices";
import Profile from "../pages/Profile";
import CourseDetails from "../pages/CourseDetails";
import Modules from "@/pages/Modules";
import Certificate from "@/pages/Certificate";
import RegistartionCard from "@/pages/RegistartionCard";
import ChangePass from "@/pages/ChangePass";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "/dashboard",
        element: <MyDashboard></MyDashboard>,
      },
      {
        path: "/courses",
        element: <MyCourses></MyCourses>,
      },
      {
        path: "/courses/:route/modules",
        element: <Modules></Modules>,
      },
      {
        path: "/courses/:route",
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/orders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/notice",
        element: <Notices></Notices>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/password-reset",
        element: <ChangePass></ChangePass>,
      },
      {
        path: "/certificate",
        element: <Certificate></Certificate>,
      },
      {
        path: "/registration-card",
        element: <RegistartionCard></RegistartionCard>,
      },
    ],
  },
]);

export default Router;
