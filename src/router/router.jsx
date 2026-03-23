import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/home/Home";
import Error from "../shared/Error";
import Apps from "../pages/Apps/Apps";
import AppDetails from "../shared/AppDetails";
import Loading from "../shared/Loading";
import Installation from "../pages/Installation/Installation";
import AboutUs from "../pages/Extra/AboutUs";
import ContactUs from "../pages/Extra/ContactUs";
import TermsCondition from "../pages/Extra/Terms&Condition";

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
        hydrateFallbackElement: <Loading />,
        Component: Home,
      },
      {
        path: "apps",
        hydrateFallbackElement: <Loading />,
        Component: Apps
      },
      {
        path: "apps-details/:id",
        hydrateFallbackElement: <Loading />,
        loader: () => fetch(`/Application.json`),
        Component: AppDetails
      },
      {
        path: "installation",
        hydrateFallbackElement: <Loading />,
        loader: () => fetch(`/Application.json`),
        Component: Installation
      },
      {
        path: "about-us",
        hydrateFallbackElement: <Loading />,
        Component: AboutUs
      },
      {
        path: "contact-us",
        hydrateFallbackElement: <Loading />,
        Component: ContactUs
      },
      {
        path: "terms-condition",
        hydrateFallbackElement: <Loading />,
        Component: TermsCondition
      }
    ],
  },
]);

export default router;