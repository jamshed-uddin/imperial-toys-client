import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Header.css";

import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex justify-between h-16  items-center px-6 lg:px-16 py-3 lg:py-0 shadow-lg fixed top-0 right-0 left-0  z-40">
      <div>
        <Link to={"/"}>
          {" "}
          <h1 className="text-4xl font-bold">Imperial Toys</h1>
        </Link>
      </div>

      <div
        className={` block lg:flex lg:w-[65%] justify-end items-center px-24  lg:px-0 py-28 lg:py-0  z-40 lg:bg-inherit  lg:static transition-all duration-700 text-center  ${
          isOpen ? "absolute top-0 right-0" : "absolute top-0 -right-96"
        } bg-slate-300 `}
      >
        <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-14 font-semibold nav-links ">
          <NavLink
            onClick={() => setOpen(false)}
            className={`link px-2 py-1 lg:py-0 ${({ isActive }) =>
              isActive ? "active" : "default"}`}
            to={"/"}
          >
            Home
          </NavLink>

          <NavLink
            to={"/alltoys"}
            onClick={() => setOpen(false)}
            className={`link px-2 py-1 lg:py-0 ${({ isActive }) =>
              isActive ? "active" : "default"}`}
          >
            All Toys
          </NavLink>
          <NavLink
            to={"/mytoys"}
            onClick={() => setOpen(false)}
            className={`link px-2 py-1 lg:py-0 ${({ isActive }) =>
              isActive ? "active" : "default"}`}
          >
            My Toys
          </NavLink>
          <NavLink
            to={"/addtoys"}
            onClick={() => setOpen(false)}
            className={`link px-2 py-1 lg:py-0 ${({ isActive }) =>
              isActive ? "active" : "default"}`}
          >
            Add Toys
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            className={`link px-2 py-1 lg:py-0 ${({ isActive }) =>
              isActive ? "active" : "default"}`}
            to={"/blogs"}
          >
            Blogs
          </NavLink>
        </div>

        <div className="mt-4 lg:mt-0  lg:ml-10 ">
          <Link
            onClick={() => setOpen(false)}
            to={"/profile"}
            className="cursor-pointer"
          >
            {/* <img
              className="w-10 rounded-full "
              src={`${
                user
                  ? "https://i.ibb.co/cDQ2DQH/user.png"
                  : "https://i.ibb.co/PCJCS96/blank.jpg"
              }`}
              alt=""
            /> */}
          </Link>
          <NavLink
            onClick={() => setOpen(false)}
            className={`link font-semibold lg:px-2 py-1 lg:py-0 ${({
              isActive,
            }) => (isActive ? "active" : "default")}`}
            to={"/login"}
          >
            Login
          </NavLink>
        </div>
      </div>

      <div className="lg:hidden z-50 text-3xl cursor-pointer">
        {isOpen ? (
          <FontAwesomeIcon onClick={() => setOpen(false)} icon={faXmark} />
        ) : (
          <FontAwesomeIcon onClick={() => setOpen(true)} icon={faBars} />
        )}
      </div>
    </div>
  );
};

export default Header;
