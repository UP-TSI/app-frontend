import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainDashboard from "./pages/main-dashboard/MainDashboard";
import { loader } from "./pages/main-dashboard/InfoTable";
import React from 'react';
import Login from './pages/Login/Login';
import Password from "./pages/Password/Password";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainDashboard />,
    loader: loader,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Password",
    element: <Password />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
