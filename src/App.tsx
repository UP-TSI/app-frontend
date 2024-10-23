import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import "./App.css";
import MainDashboard from "./pages/main-dashboard/MainDashboard";
import { loader } from "./pages/main-dashboard/InfoTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainDashboard />,
    loader: loader,
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
