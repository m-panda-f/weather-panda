import React from "react";
import { NavLink } from "react-router-dom";

function Navabar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <h2>
            <NavLink
              className="mx-4 fw-bolder text-primary text-decoration-none"
              to="/"
            >
              <span className="me-2">🐼</span> Weather Panda
            </NavLink>
          </h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link fs-4 fw-medium mx-4" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item fs-4 fw-medium mx-4">
                <NavLink className="nav-link" to="/add">
                  Add Weather
                </NavLink>
              </li>
              <li className="nav-item fs-4 fw-medium mx-4">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navabar;
