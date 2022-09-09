import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Container, Link } from "./style";

const active = (url) => {
  return window.location.pathname.includes(url);
};

const Navbar = () => {
  return (
    <>
      <Container>
        <Link exact to={"/ "}>
          Logo
        </Link>
        <Link active={active("/home")} to={"/home"}>
          Home
        </Link>
        <Link active={active("/templates")} to={"/templates"}>
          Templates
        </Link>
        <Link active={active("/pages")} to={"/pages"}>
          Pages
        </Link>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "red" : "white" };
          }}
          to={"/elements"}
        >
          Elements
        </NavLink>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
