import React, { useEffect, useState } from "react";
import GigGalaxy from "../assets/GigGalaxy.svg";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";
import { SelectDemo } from "./SelectDemo";
import { Outlet } from "react-router-dom";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the search logic here, such as fetching search results
    console.log("Search query:", query);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
    <div className="bg-gray-100">
      <header className=" w-full bg-white md:bg-transparent ">
        <nav className="bg-white shadow-xl lg:px-18 px-4">
          <div className="flex items-center justify-between text-base gap-8">
            <div className="space-x-40 flex items-center">
              <a
                href="/"
                className="text-2xl font-semibold flex items-center space-x-3"
              >
                <img
                  src={GigGalaxy}
                  alt="GigGalaxy"
                  className="w-24 inline-block items-center"
                />
                <span className="text-black">GiG Galaxy</span>
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
                      className="px-3 py-1 bg-primary text-white rounded-r"
                    >
                      Search
                    </button>
                  </form>
                </div>
                <li>
                  <Link
                    to="/"
                    className="py-6 px block text-base  text-gray-900 hover:text-primary first:font-medium"
                  >
                    <div className="font-bold text-md">Start a business </div>
                  </Link>
                </li>
                <li className="py-6 px block text-base text-gray-900 hover:text-primary first:font-medium">
                  <SelectDemo />
                </li>
              </ul>
            </div>

            <div className="space-x-12 hidden font-semibold lg:flex items-center">
              <a href="/" className="hidden lg:flex items-center text-primary">
                Login
              </a>
              <button className="bg-primary text-white font-semibold py-2 px-4 transition-all duration-300 rounded hover:bg-primary/80">
                Sign up
              </button>
            </div>
            {/*mobile*/}
            <div className="md:hidden"></div>
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
            {/* Search bar */}
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
