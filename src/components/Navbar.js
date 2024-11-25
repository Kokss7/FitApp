import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const location = useLocation();

  // Check if the current path is "/"
  const isHomePage = location.pathname === "/";
  return (
    <div className="container-xxl position-relative p-0" id="home">
      <nav
        className={`navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 nav-click ${
          isHomePage ? "navbar-home" : "navbar-about"
        }`}
      >
        <Link to={"/"} className="navbar-brand p-0">
          <h1 className="m-0">FitApp</h1>
          {/* <img src="img/logo.png" alt="Logo"/> */}
        </Link>
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarCollapse">
            <div className="navbar-nav mx-auto py-0">
              <Link to={"/"} className="nav-item nav-link active">
                Home
              </Link>
              <Link to={"/about"} className="nav-item nav-link ">
                About
              </Link>
              <Link to={"/features"} className="nav-item nav-link">
                Feature
              </Link>
              <Link to={"/pricing"} className="nav-item nav-link">
                Pricing
              </Link>
              <Link to={"/review"} className="nav-item nav-link">
                Review
              </Link>
              <Link to={"/contact"} className="nav-item nav-link">
                Contact
              </Link>
            </div>
            <Link
              to={"/trial"}
              className="btn btn-primary-gradient rounded-pill py-2 px-4 ms-3 d-none d-lg-block"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
