import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainDashboard from "./pages/main-dashboard/MainDashboard";
import { loader } from "./pages/main-dashboard/InfoTable";
import UserLogin from "./pages/login/UserLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainDashboard />,
    loader: loader,
  },
  {
    path: "/user-login",
    element: <UserLogin />,
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
