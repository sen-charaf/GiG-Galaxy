import React, { useEffect, useState } from "react";
import GigGalaxy from "../assets/GigGalaxy.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";
import { SelectDemo } from "./SelectDemo";
import { Outlet } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import NotificationDropdown from "./NotificationDropdown";
import MessageDropdown from "./MessageDropdown";
import { MdMail } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import OrdersDropdown from "./OrdersDropdown";
import DropMenuLanguage from "./component/DropMenuLanguage";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useStateContext } from "@/context/ContextProvider";
import { axiosClient } from "@/api/axios";
export default function Header() {
  const navigate = useNavigate();
  const {currentUser, setCurrentUser, currentToken, setCurrentToken} = useStateContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [query, setQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Search query:", query);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const toggleOrders = () => {
    setIsOrderOpen(!isOrderOpen);
  };

  const toggleMessage = () => {
    setIsMessageOpen(!isMessageOpen);
  };

  const handleLogout = () => {
    axiosClient.post('/logout').then((res) => {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      setCurrentToken(null);
      navigate("/landingpage");
    }).catch((error) => {
      console.error(error);
    })
  };

  useEffect(() => {
    axiosClient.post('/get_current_user').then((res) => {
      setCurrentUser(res.data);
    }).catch((error) => {
      console.error(error);
    })
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    
  }, []);

  return (
    <div className="bg-gray-50">
      <header className="w-full bg-white fixed  z-10 md:bg-transparent">
        <nav className="bg-white shadow-xl lg:px-18 px-4">
          <div className="flex items-center justify-between text-base gap-8">
            <div className="space-x-12 flex items-center">
              <a
                href="/landingpage"
                className="text-2xl font-semibold flex items-center space-x-3"
              >
                <img
                  src={GigGalaxy}
                  alt="GigGalaxy"
                  className="w-24 inline-block items-center"
                />
                <span className="text-black">Gig Galaxy</span>
              </a>

              <ul className="items-center md:flex space-x-20 hidden">
                <div className="space-x-20 hidden md:flex items-center z-10">
                  <div>
                    <li>
                      <NavLinks />
                    </li>
                  </div>
                  <form onSubmit={handleSubmit} className="flex">
                    <input
                      type="text"
                      value={query}
                      onChange={handleChange}
                      placeholder="Search..."
                      className="w-[35rem] px-2 py-2.5 border border-gray-400 rounded-l focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1 bg-[#8C41F3] text-white rounded-r"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </ul>
            </div>

            <div className="space-x-5 hidden font-semibold lg:flex items-center">
              <div>
                <Link
                  to="/BecaumeSeller/Page1"
                  className="py-6 cursor-pointer block text-base text-gray-900 hover:text-[#8C41F3] first:font-medium"
                >
                  <div className="font-bold text-md">Become a seller </div>
                </Link>
              </div>
              
              {localStorage.getItem("token") ? (
                <div className="flex space-x-4 items-center">
                  {/*  <IoIosNotifications
                      size={30}
                      onClick={toggleNotification}
                      className="cursor-pointer"
                    /> */}
                  <MdMail
                    size={26}
                    onClick={toggleMessage}
                    className="cursor-pointer"
                  />
                  {/* <a href="/another-page">
                    <FaHeart size={30} className="cursor-pointer" />
                  </a> */}
                  <div className="text-lg">
                    <h1
                      onClick={toggleOrders}
                      className="hover:cursor-pointer hover:text-[#8C41F3] transition-all duration-300"
                    >
                      Orders
                    </h1>
                  </div>
                  <Link to="/edit_profile">
                    <Avatar className="size-10 mx-1">
                      <AvatarImage src={currentUser.image ? currentUser.image : ""} />
                      <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="bg-[#8C41F3] text-white font-semibold py-2 px-4  transition-all duration-300 rounded hover:bg-[#8C41F3]/80"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <a
                    href="/login"
                    className="hidden lg:flex items-center text-[#8C41F3]"
                  >
                    Login
                  </a>
                  <button className="bg-[#8C41F3] text-white font-semibold py-2 px-4 transition-all duration-300 rounded hover:bg-[#8C41F3]/80">
                    Sign up
                  </button>
                </>
              )}
            </div>
            <div className="md:hidden">
              <button
                className="text-gray-800 focus:outline-none focus:text-gray-500"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <FaTimes className="h-6 w-6 text-gray-800" />
                ) : (
                  <FaBars className="h-6 w-6 text-gray-800" />
                )}
              </button>
            </div>
          </div>
        </nav>
        {isNotificationOpen && <NotificationDropdown />}
        {isMessageOpen && <MessageDropdown setIsMessageOpen={setIsMessageOpen} />}
        {isOrderOpen && <OrdersDropdown />}
      </header>
      <Outlet />
    </div>
  );
}
