import React, { useEffect, useState } from "react";
import GigGalaxy from "../assets/GigGalaxy.svg";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";
import { SelectDemo } from "./SelectDemo";
import { Outlet } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import NotificationDropdown from './NotificationDropdown';
import MessageDropdown from './MessageDropdown'
import { MdMail } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import OrdersDropdown from "./OrdersDropdown";
import DropMenuLanguage from "./component/DropMenuLanguage";

export default function Header() {
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
    localStorage.removeItem('auth_token');
    setIsLoggedIn(false);
  };

  useEffect(() => {
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
      <header className="w-full bg-white  z-10 md:bg-transparent">
        <nav className="bg-white shadow-xl lg:px-18 px-4">
          <div className="flex items-center justify-between text-base gap-8">
            <div className="space-x-40 flex items-center">
              <a href="/" className="text-2xl font-semibold flex items-center space-x-3">
                <img src={GigGalaxy} alt="GigGalaxy" className="w-24 inline-block items-center" />
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
                <li>
                  <Link
                    to="/"
                    className="py-6 px block text-base text-gray-900 hover:text-[#8C41F3] first:font-medium"
                  >
                    <div className="font-bold text-md">Start a business </div>
                  </Link>
                </li>
                <li className="py-6 px block text-base text-gray-900 first:font-medium">
                  <DropMenuLanguage />
                </li>
              </ul>
            </div>

            <div className="space-x-14 hidden font-semibold lg:flex items-center">
              {isLoggedIn ? (
                <>
                  <IoIosNotifications size={30} onClick={toggleNotification} className="cursor-pointer" />
                  <MdMail size={30} onClick={toggleMessage} className="cursor-pointer" />
                  <a href="/another-page">
                    <FaHeart size={30} className="cursor-pointer" />
                  </a>
                  <div className="text-xl">
                    <h1 onClick={toggleOrders} className="hover:cursor-pointer hover:text-[#8C41F3] transition-all duration-300">
                      Orders
                    </h1>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="bg-[#8C41F3] text-white font-semibold py-2 px-4  transition-all duration-300 rounded hover:bg-[#8C41F3]/80"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <a href="/login" className="hidden lg:flex items-center text-[#8C41F3]">
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
        {isMessageOpen && <MessageDropdown />}
        {isOrderOpen && <OrdersDropdown />}
      </header>
      <Outlet />
    </div>
  );
}
