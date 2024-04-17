import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Test from "../pages/Test";

export const pages = [
    {
        path: "/",
        label: "Hem",
        element: <Home />,
    },
    {
        path: "/test",
        label: "Test",
        element: <Test />,
    },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: pages,
  },
]);