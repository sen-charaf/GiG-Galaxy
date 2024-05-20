import { createBrowserRouter } from "react-router-dom";
import InspectCategories from "./views/InspectCategories";
import Navbar from "./components/Navbar";
import InspectService from "./views/InspectService";
import UploadService from "./views/UploadService";
import SellerProfile from "./views/SellerProfile";
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
      },
      {
        path: "upload_service",
        element: <UploadService />,
      },
      {
        path: "seller_profile",
        element: <SellerProfile />,
      }
    ],
  },
]);

export default router;
