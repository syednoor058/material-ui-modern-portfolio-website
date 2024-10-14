// import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/title_logo.png";

export default function Navbar() {
  const [navMenu, setNavMenu] = useState(false);
  const menuToggle = () => {
    setNavMenu(!navMenu);
  };
  return (
    <>
      <div className="w-full bg-primaryColor py-1 px-3 sm:px-5 md:px-10 lg:px-20 text-titleColor font-bodyFont hidden md:block">
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
              <span className="w-full h-[1px] bg-accentColor translate-x-[-100%] group-hover:translate-x-0 duration-300"></span>
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
              <span className="w-full h-[1px] bg-accentColor translate-x-[-100%] group-hover:translate-x-0 duration-300"></span>
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
              <span className="w-full h-[1px] bg-accentColor translate-x-[-100%] group-hover:translate-x-0 duration-300"></span>
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
              <span className="w-full h-[1px] bg-accentColor translate-x-[-100%] group-hover:translate-x-0 duration-300"></span>
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
              <span className="w-full h-[1px] bg-accentColor translate-x-[-100%] group-hover:translate-x-0 duration-300"></span>
            </NavLink>
          </div>
          <div className="flex flex-row gap-3">
            <div className="flex justify-center items-center text-titleColor hover:text-accentColor duration-300 cursor-pointer">
              <GitHubIcon />
            </div>
            <div className="flex justify-center items-center text-titleColor hover:text-accentColor duration-300 cursor-pointer">
              <LinkedInIcon />
            </div>
            <div className="flex justify-center items-center text-titleColor hover:text-accentColor duration-300 cursor-pointer">
              <FacebookIcon />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full py-1 px-3 sm:px-5 flex flex-row md:hidden gap-5 justify-between text-titleColor bg-primaryColor items-center">
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
          className={`w-[60%] h-screen bg-primaryColor text-titleColor ${
            navMenu ? "translate-x-0" : "translate-x-[-100%]"
          } duration-700 md:hidden py-16 ps-3 sm:ps-5`}
        >
          <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col gap-7">
              <div onClick={menuToggle}>
                <KeyboardBackspaceIcon />
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
                  {/* <span className="h-[1px] bg-accentColor translate-x-[-100%] group-hover:translate-x-0 duration-300"></span> */}
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
                {/* <span className="w-full h-[1px] bg-accentColor translate-x-[-100%] group-hover:translate-x-0 duration-300"></span> */}
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
                {/* <span className="w-full h-[1px] bg-accentColor translate-x-[-100%] group-hover:translate-x-0 duration-300"></span> */}
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
                {/* <span className="w-full h-[1px] bg-accentColor translate-x-[-100%] group-hover:translate-x-0 duration-300"></span> */}
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
                {/* <span className="w-full h-[1px] bg-accentColor translate-x-[-100%] group-hover:translate-x-0 duration-300"></span> */}
              </NavLink>
            </div>
            <div className="flex flex-row gap-7">
              <div className="flex justify-center items-center text-titleColor hover:text-accentColor duration-300 cursor-pointer">
                <GitHubIcon />
              </div>
              <div className="flex justify-center items-center text-titleColor hover:text-accentColor duration-300 cursor-pointer">
                <LinkedInIcon />
              </div>
              <div className="flex justify-center items-center text-titleColor hover:text-accentColor duration-300 cursor-pointer">
                <FacebookIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
