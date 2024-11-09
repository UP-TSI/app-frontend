import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainDashboard from "./pages/main-dashboard/MainDashboard";
import { loader } from "./pages/main-dashboard/InfoTable";
import Login from "./pages/login/Login";
import Password from "./pages/password/Password";

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
    path: "/password",
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
