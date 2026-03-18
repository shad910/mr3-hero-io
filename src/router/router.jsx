import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);

export default router;