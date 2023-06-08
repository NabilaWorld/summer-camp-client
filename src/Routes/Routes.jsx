import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Instructor from "../pages/Home/Instructor/Instructor";
import Class from "../pages/Home/Class/Class";
import Myclass from "../pages/Dashboard/Myclass/Myclass";
import DashBoard from "../Layout/DashBoard";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
          element: <SignUp></SignUp>
      },

        {
          path: '/instructor',
          element: <Instructor></Instructor>
      },

        {
          path: '/class',
          element: <Class></Class>
      },
      ]
    },

    {
      path: 'dashboard',
      element: <DashBoard></DashBoard>,
      children: [
        {
          path: 'myClass',
          element: <Myclass></Myclass>
        }
      ]
    }
  ]);