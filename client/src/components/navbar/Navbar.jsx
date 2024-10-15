// import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/title_logo.png";

export default function Navbar() {
  const [navMenu, setNavMenu] = useState(false);
  const menuToggle = () => {
    setNavMenu(!navMenu);
  };
  return (
    <div className="font-bodyFont">
      <div className="w-full bg-primaryColor py-1 px-3 sm:px-5 md:px-10 lg:px-20 text-titleColor font-bodyFont hidden md:block fixed z-[1000] shadow-md">
        <div className="w-full flex flex-row justify-between gap-7">
          <div>
            <img className="w-14 h-14" src={logo} alt="shaed_noor_logo" />
          </div>
          <div className="flex gap-5 justify-center items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "nav-active flex flex-col group overflow-hidden"
                  : "flex flex-col group overflow-hidden"
              }
            >
              Home
              <span className="w-full h-[1px] bg-accentColor translate-x-[-102%] group-hover:translate-x-0 duration-300"></span>
            </NavLink>

            <NavLink
              to="/expertise"
              className={({ isActive }) =>
                isActive
                  ? "nav-active flex flex-col group overflow-hidden"
                  : "flex flex-col group overflow-hidden"
              }
            >
              Expertise
              <span className="w-full h-[1px] bg-accentColor translate-x-[-102%] group-hover:translate-x-0 duration-300"></span>
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive
                  ? "nav-active flex flex-col group overflow-hidden"
                  : "flex flex-col group overflow-hidden"
              }
            >
              Portfolio
              <span className="w-full h-[1px] bg-accentColor translate-x-[-102%] group-hover:translate-x-0 duration-300"></span>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "nav-active flex flex-col group overflow-hidden"
                  : "flex flex-col group overflow-hidden"
              }
            >
              About
              <span className="w-full h-[1px] bg-accentColor translate-x-[-102%] group-hover:translate-x-0 duration-300"></span>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "nav-active flex flex-col group overflow-hidden"
                  : "flex flex-col group overflow-hidden"
              }
            >
              Contact
              <span className="w-full h-[1px] bg-accentColor translate-x-[-102%] group-hover:translate-x-0 duration-300"></span>
            </NavLink>
          </div>
          <div className="flex flex-row gap-3">
            <Link
              to="https://github.com/syednoor058"
              className="flex justify-center items-center text-titleColor hover:text-accentColor duration-300 cursor-pointer"
            >
              <GitHubIcon />
            </Link>
            <Link
              to="https://www.linkedin.com/in/shaednoor/"
              className="flex justify-center items-center text-titleColor hover:text-accentColor duration-300 cursor-pointer"
            >
              <LinkedInIcon />
            </Link>
            <Link
              to="https://web.facebook.com/shaed058/"
              className="flex justify-center items-center text-titleColor hover:text-accentColor duration-300 cursor-pointer"
            >
              <FacebookIcon />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full py-1 px-3 sm:px-5 flex flex-row md:hidden gap-5 justify-between text-titleColor bg-primaryColor items-center fixed z-[1000] shadow-md">
          <div className="w-[1/3] flex justify-center items-center">
            <img className="w-10 h-10" src={logo} alt="shaed_noor_logo" />
          </div>
          <div
            className="w-[1/3] hover:text-accentColor cursor-pointer"
            onClick={menuToggle}
          >
            <MenuIcon />
          </div>
        </div>
        <div
          className={`w-[60%] h-screen overflow-y-auto bg-gray-950 text-titleColor ${
            navMenu ? "translate-x-0" : "translate-x-[-102%]"
          } duration-700 md:hidden ps-3 sm:ps-5 pt-5 pb-16 fixed z-[1000]`}
        >
          <div className="w-full h-full flex flex-col gap-20 relative">
            <div className="flex flex-col gap-2">
              <img className="w-10 h-10" src={logo} alt="shaed_noor_logo" />
              <div className="uppercase font-bold font-bodyFont text-accentColor text-2xl">
                Shaed Noor
              </div>
            </div>
            <div className="flex flex-col gap-7">
              <div
                onClick={menuToggle}
                className="absolute right-0 top-[50%] p-2 bg-accentColor rounded-sm"
              >
                <KeyboardDoubleArrowLeftIcon />
              </div>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-active flex flex-col group overflow-hidden"
                    : "flex flex-col group overflow-hidden"
                }
              >
                <div className="flex flex-col">
                  Home
                  {/* <span className="h-[1px] bg-accentColor translate-x-[-102%] group-hover:translate-x-0 duration-300"></span> */}
                </div>
              </NavLink>

              <NavLink
                to="/expertise"
                className={({ isActive }) =>
                  isActive
                    ? "nav-active flex flex-col group overflow-hidden"
                    : "flex flex-col group overflow-hidden"
                }
              >
                Expertise
                {/* <span className="w-full h-[1px] bg-accentColor translate-x-[-102%] group-hover:translate-x-0 duration-300"></span> */}
              </NavLink>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive
                    ? "nav-active flex flex-col group overflow-hidden"
                    : "flex flex-col group overflow-hidden"
                }
              >
                Portfolio
                {/* <span className="w-full h-[1px] bg-accentColor translate-x-[-102%] group-hover:translate-x-0 duration-300"></span> */}
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "nav-active flex flex-col group overflow-hidden"
                    : "flex flex-col group overflow-hidden"
                }
              >
                About
                {/* <span className="w-full h-[1px] bg-accentColor translate-x-[-102%] group-hover:translate-x-0 duration-300"></span> */}
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "nav-active flex flex-col group overflow-hidden"
                    : "flex flex-col group overflow-hidden"
                }
              >
                Contact
                {/* <span className="w-full h-[1px] bg-accentColor translate-x-[-102%] group-hover:translate-x-0 duration-300"></span> */}
              </NavLink>
            </div>
            <div className="flex flex-col gap-3">
              <div className="">Social Links:</div>
              <div className="flex flex-row gap-7">
                <Link
                  to="https://github.com/syednoor058"
                  className="flex justify-center items-center text-titleColor hover:text-accentColor duration-300 cursor-pointer"
                >
                  <GitHubIcon />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/shaednoor/"
                  className="flex justify-center items-center text-titleColor hover:text-accentColor duration-300 cursor-pointer"
                >
                  <LinkedInIcon />
                </Link>
                <Link
                  to="https://web.facebook.com/shaed058/"
                  className="flex justify-center items-center text-titleColor hover:text-accentColor duration-300 cursor-pointer"
                >
                  <FacebookIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
