import React from "react";
import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useStateContext } from "../context/ContextProvider";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import FlagIcon from "@mui/icons-material/Flag";
import PaidIcon from "@mui/icons-material/Paid";
import LogoutIcon from "@mui/icons-material/Logout";
import { axiosClient } from "@/api/axios";

export default function AdminSideBar() {
  const { currentUser, setCurrentUser } = useStateContext();
  const location = useLocation();
  const [menuClicked, setMenuClicked] = useState(location.pathname.slice(7));
  const navigate = useNavigate();

  /* useEffect(() => {
    axiosClient
      .post("api/get_current_user")
      .then((response) => {
        setCurrentUser(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const logoutHandler = () => {
    axiosClient
      .post("api/logout")
      .then((response) => {
        localStorage.removeItem("token");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  }; */
  return (
    <>
      <div className="flex h-screen bg-gray-50">
        <div className=" w-96 flex flex-col justify-between border-r-2 bg-[#161616] text-gray-300">
          <div className="flex flex-col  items-center ">
            <div className="mx-5 pt-2 mb-5 flex items-baseline space-x-2">
              <div className="text-2xl font-bold text-white">GiG Galaxy</div>
              <div className=" text-[0.8rem] font-semibold">Admin Page</div>
            </div>
            <div className="flex items-center justify-start  space-x-5 ml-16 mb-16 mt-4 w-full ">
              <Avatar className="w-20 h-20 ">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AV</AvatarFallback>
              </Avatar>
              <div className="text-md text-white font-semibold smb-10">
                {/* {currentUser.adminName
                ? currentUser.adminName
                : "Display Name"} */}{" "}
                Charaf Eddine
              </div>
            </div>
            <div className="w-full px-5">
              <Link
                to={"/admin/dashboard"}
                onClick={() => setMenuClicked("Dashboard")}
              >
                <div
                  className={`flex flex-row items-center
              ${
                menuClicked === "Dashboard"
                  ? "bg-white text-primary"
                  : "hover:bg-white hover:text-primary"
              }
               py-1 rounded-sm px-4`}
                >
                  <DashboardIcon fontSize="small" className="mr-1" />
                  <div className="font-semibold text-[0.9rem]">Dashboard</div>
                </div>
              </Link>
              <div className="text-[0.8rem] font-semibold text-white/60 px-2 mt-3 mb-1">
                Manage
              </div>
              <div className="h-px mb-3 mt-2 bg-white/20" />
              <Link
                to={"/admin/users"} onClick={() =>
                  setMenuClicked("Users")
                }
              >
                <div
                  className={`flex flex-row items-center py-2 
              ${
                menuClicked === "Users"
                  ? "bg-white/75 text-primary"
                  : "hover:bg-white hover:text-primary"
              }
              mb-4 py-1 rounded-sm px-4`}
                >
                  <PeopleAltIcon fontSize="small" className="mr-1" />
                  <div className="font-semibold text-[0.9rem]">Users</div>
                </div>
              </Link>
              <Link
                to={"/admin/services"} onClick={() =>
                  setMenuClicked("Services")
                }
              >
                <div
                  className={`flex flex-row items-center
              ${
                menuClicked === "Services"
                  ? "bg-white text-primary"
                  : "hover:bg-white hover:text-primary"
              }
               mb-4 py-1 rounded-sm px-4`}
                >
                  <HomeRepairServiceOutlinedIcon fontSize="small" className="mr-1" />
                  <div className="font-semibold text-[0.9rem]">Services</div>
                </div>
              </Link>
              <Link
                to={"/admin/reports"}
                onClick={() => setMenuClicked("Reports")}
              >
                <div
                  className={`flex flex-row items-center 
              ${
                menuClicked === "Reports"
                  ? "bg-white text-primary"
                  : "hover:bg-white hover:text-primary"
              }
              mb-4 py-1 rounded-sm px-4`}
                >
                  <FlagIcon fontSize="small" className="mr-1" />
                  <div className="font-semibold text-[0.9rem]">Reports</div>
                </div>
              </Link>
              <Link
                to={"/admin/payments"}
                onClick={() => setMenuClicked("Payments")}
              >
                <div
                  className={`flex flex-row items-center py-2 
              ${
                menuClicked === "Payments"
                  ? "bg-white text-primary"
                  : "hover:bg-white hover:text-primary"
              }
              mb-4 py-1 rounded-sm px-4`}
                >
                  <PaidIcon fontSize="small" className="mr-1" />
                  <div className="font-semibold text-[0.9rem]">
                    Payments
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <Link /* onClick={logoutHandler} */>
            <div className="flex flex-row items-center hover:bg-white text-white hover:text-rose-500 mb-4 py-1 rounded-sm mx-4 px-4">
              <LogoutIcon fontSize="small" className="mr-1" />
              <div>Logout</div>
            </div>
          </Link>
        </div>
        <div className="w-full overflow-y-auto overflow-x-hidden">
          <Outlet />
        </div>
      </div>
    </>
  );
}
