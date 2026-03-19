import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/home/Home";
import Error from "../shared/Error";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <Error />,
    children: [
      {
        path: "*",
        Component: Error,
      },
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);

export default router;