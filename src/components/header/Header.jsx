import React from "react";
import MenuItem from "./MenuItem.jsx";
import "./header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink to={"/"} className={"nav-link"}>
        <MenuItem title="Головна" />
      </NavLink>
      <NavLink to={"/contacts"} className={"nav-link"}>
        <MenuItem title="Контакти" />
      </NavLink>
      <NavLink to={"/materials"} className={"nav-link"}>
        <MenuItem title="Матеріали" />
      </NavLink>
      <NavLink to={"/questions"} className={"nav-link"}>
        <MenuItem title="Питання" />
      </NavLink>
    </header>
  );
};

export default Header;
