import React, { useState } from "react";
import "../Style/StyleHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";

import { NavItem } from "reactstrap";
import { Outlet, NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="wrapper-header">
        <div className="header">
          {/* Navbar per la navigazione */}
          <NavItem tag={"div"} className="navbar-container">
            <NavLink className="text-light" to="/">
              Home
            </NavLink>
            <NavLink className="text-light" to="/restaurants">
              Ristoranti
            </NavLink>
          </NavItem>
          <div className="header-login">
            {/* Stella per la dark Mode */}
            <div className="dark-mode">
              <FontAwesomeIcon
                icon={faSun}
                size="lg"
                style={{
                  color: "#ffffff",
                }}
              />
            </div>

            {/* Pulsante login */}
            <NavItem tag={"div"}>
              <NavLink className="text-light btn" to="/login">
                Login
              </NavLink>
            </NavItem>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Header;
