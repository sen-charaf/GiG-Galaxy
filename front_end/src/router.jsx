import { createBrowserRouter } from "react-router-dom";
import InspectCategories from "./views/InspectCategories";
import Navbar from "./components/Navbar";
import InspectService from "./views/InspectService";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "categories",
        element: <InspectCategories />,
      },
      {
        path: "service",
        element: <InspectService />,
      }
    ],
  },
]);

export default router;
