import { useState } from "react";
import logo from "../../assets/logo.png";
import Button from "../Button";
import MenuDesktop from "../header/MenuDesktop";
import MenuMobile from "../header/MenuMobile";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const Navbar = ({ itemCount }) => {
  const [isEmpty] = useState("");

  return (
    <div className="relative w-full border-b shadow-lg border-b-primary">
      <div className="flex items-center justify-between w-full px-8 py-8 sm:px-8 md:px-18 lg:px-32">
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active"
              : "z-50 flex items-center gap-3 cursor-pointer select-none"
          }
        >
          <img src={logo} alt="logo" className="w-10" />
          <span className="text-lg font-bold font-bungee lg:text-xl xl:text-3xl">
            P-Burger
          </span>
        </NavLink>
        <div className="hidden gap-5 md:flex">
          <MenuDesktop />
        </div>
        <div className="items-center hidden gap-3 md:flex"></div>
        <div className="relative flex items-center gap-6">
          <CartWidget className="z-50" />
          <div className="z-20 block md:hidden">
            <MenuMobile />
          </div>
          <span
            className={
              itemCount == 0
                ? "hidden"
                : "absolute w-[20px] h-[20px] text-center rounded-full border text-xs border-gray-100 bg-primary -top-3 left-3 z-20 text-white shadow-lg"
            }
          >
            {itemCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
