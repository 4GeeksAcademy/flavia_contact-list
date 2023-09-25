import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light">
      <Link to="/">
        <i className="fa-solid fa-address-book fa-2xl"></i>
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <button className="addButton">Add new contact</button>
        </Link>
      </div>
    </nav>
  );
};
