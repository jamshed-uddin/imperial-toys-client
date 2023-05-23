import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AllToys from "./pages/others/allToys";
import ErrorPage from "./pages/others/errorPage";
import Home from "./Home/Home";
import Login from "./pages/userManagement/Login";
import MyToys from "./pages/others/MyToys";
import AddToys from "./pages/others/AddToys";
import Blogs from "./pages/others/Blogs";
import Register from "./pages/userManagement/Register";
import AuthProvider from "./pages/userManagement/AuthProvider";
import ToyDetails from "./pages/others/ToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "mytoys",
        element: <MyToys></MyToys>,
      },
      {
        path: "addtoys",
        element: <AddToys></AddToys>,
      },
      {
        path: "toydetails/:toyId",
        element: <ToyDetails></ToyDetails>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
