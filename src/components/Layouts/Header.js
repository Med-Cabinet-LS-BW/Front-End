import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { NavLink, Redirect } from "react-router-dom";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  return (
    <AppBar position="static">
      <div>
        <Toolbar className="AppBar">
          <NavLink className="HomeBtn" to="/home">
            <h1>MediZen</h1>
          </NavLink>
          {isLoggedIn ? (
            <nav className="nav">
              <NavLink
                onClick={() => {
                  setIsLoggedIn(false);
                  localStorage.removeItem("token");
                }}
                to="/login"
              >
                Logout
              </NavLink>
              <NavLink to="/strains">Discover</NavLink>
            </nav>
          ) : (
            <nav className="nav">
              <NavLink to="/about">About</NavLink>
              <NavLink to="/login">Login</NavLink>
            </nav>
          )}
        </Toolbar>
      </div>
    </AppBar>
  );
}

export default Header;
