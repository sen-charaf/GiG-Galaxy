import { createBrowserRouter } from "react-router-dom";
import InspectCategories from "./views/InspectCategories";
import Navbar from "./components/Navbar";
import InspectService from "./views/InspectService";
import UploadService from "./views/UploadService";
import SellerProfile from "./views/SellerProfile";
import { Edit } from "lucide-react";
import EditProfile from "./views/EditProfile";
import LoginPage from "./views/LoginPage";
import SignupPage from "./views/SignupPage";
import VerificationPage from "./views/VerificationPage";
import ChatPage from "./views/ChatPage";
import AdminSideBar from "./components/AdminSideBar";
import AdminDashboard from "./views/AdminDashboard";
import AdminUsers from "./views/AdminUsers";
import AdminReports from "./views/AdminReports";
import AdminPayments from "./views/AdminPayments";
import AdminServices from "./views/AdminServices";
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
      },
      {
        path: "edit_profile",
        element: <EditProfile />,
      },
      {
        path: "chat",
        element: <ChatPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminSideBar />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "users",
        element: <AdminUsers />,
      },
      {
        path: "reports",
        element: <AdminReports />,
      },
      {
        path: "payments",
        element: <AdminPayments />,
      },
      {
        path: "services",
        element: <AdminServices />
      }
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "signup",
    element: <SignupPage />,
  },
  {
    path: "/verify_email?",
    element: <VerificationPage />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

export default router;
