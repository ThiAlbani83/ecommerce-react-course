import React from "react";
import { NavLink } from "react-router-dom";

const MenuDesktop = () => {
  return (
    <div>
      <ul className="flex items-center gap-10 text-sm font-medium text-red-600 font-roboto lg:text-base">
        <li className="duration-200 cursor-pointer select-none active:scale-95">
          <NavLink to={"/"}>Início</NavLink>
        </li>
        <li className="duration-200 cursor-pointer select-none active:scale-95">
          Hamburgers
        </li>
        <li className="duration-200 cursor-pointer select-none active:scale-95">
          Porções
        </li>
        <li className="duration-200 cursor-pointer select-none active:scale-95">
          Bebidas
        </li>
      </ul>
    </div>
  );
};

export default MenuDesktop;
