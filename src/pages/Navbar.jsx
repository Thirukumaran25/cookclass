import React, { useState } from "react";
import "../App.css";
import image1 from "../images/Group 42.png";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <div className="bg-orange-100  lg:flex lg:pl-10 lg:gap-10 py-4 px-4">
          <div>
            <img src={image1} alt="Logo" className="h-10 lg:h-full" />
          </div>

          <div>
            <Link to="/home">
              <button onClick={() => setIsLoggedIn(false)}>HOME</button>
            </Link>

            <Link to="/login"><button className="my-10  mx-4 font-semibold text-white text-xl bg-red-800 px-4 rounded-full">
              LOGIN
            </button></Link>
            <Link to="/signup"><button>SING UP</button></Link>
          </div>
        </div>
      ) : (
        <div className="bg-orange-100  lg:flex lg:pl-10 lg:gap-10 py-4 px-4">
          <div className="flex items-center justify-between">
            <div>
              <img src={image1} alt="Logo" className="h-10 lg:h-full" />
            </div>

            <div className="lg:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`lg:flex lg:gap-10 lg:w-full mt-4 lg:mt-0 ${
              menuOpen ? "block" : "hidden"
            } lg:block`}
          >
            <ul className="flex flex-col font-semibold text-red-950 text-xl lg:flex-row items-start lg:items-center gap-4 lg:gap-20">
              <NavLink to="/home">
                <li>HOME</li>
              </NavLink>

              <li className="relative group">
                <div className="flex items-center gap-2 cursor-pointer">
                  <span>PROGRAM</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div
                  className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 z-10" /* Added z-10 */
                >
                  <Link to="/bakery">
                    <option>Bakery Business</option>
                  </Link>
                  <option>Accelerator Program</option>
                  <Link to="/cloud">
                    <option>Cloud Kitchen</option>
                  </Link>
                  <option>Accelerator</option>
                </div>
              </li>

              <li className="relative group">
                <div className="flex items-center gap-2 cursor-pointer">
                  <span>COURSES</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div
                  className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 z-10" /* Added z-10 */
                >
                  <Link to="/course">
                    <option>All Course</option>
                  </Link>
                  <Link to="/course">
                    <option>Featured Course</option>
                  </Link>
                </div>
              </li>

              <NavLink to="/about">
                <li>ABOUT</li>
              </NavLink>
              <NavLink to="/contact">
                <li>CONTACT</li>
              </NavLink>
            </ul>

            <Link to="/login">
              <button
                onClick={() => setIsLoggedIn(true)}
                className="my-10 font-semibold text-white text-xl bg-red-800 px-4 rounded-full"
              >
                LOGIN
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
