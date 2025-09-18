import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = null;
  // const user = { role: "consumer" };
  // const user = { role: "shopOwner" };

  return (
    <nav
      className={`navbar navbar-expand-lg px-lg-5 sticky-top ${styles.navbar}`}
    >
      <div className="container-fluid">
        <div className={`navbar-brand text-white ${styles.logo}`}>AppointNow</div>

        {/* Toggle Button */}
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={`navbar-nav ms-auto ${styles.navLinks}`}>
            {/* Guest */}
            {!user && (
              <>
                <li className="nav-item">
                  <Link to={"/"} className="nav-link text-white">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/signin"} className="nav-link text-white">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/signup"} className="nav-link text-white">
                    Signup
                  </Link>
                </li>
              </>
            )}

            {/* Consumer */}
            {user?.role === "consumer" && (
              <>
                <li className="nav-item">
                  <Link to={"/"} className="nav-link text-white">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/service"} className="nav-link text-white">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/appointments"} className="nav-link text-white">
                    My Appointments
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light">Logout</button>
                </li>
              </>
            )}

            {/* Shop Owner */}
            {user?.role === "shopOwner" && (
              <>
                <li className="nav-item">
                  <Link to={"/dashboard"} className="nav-link text-white">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/services"} className="nav-link text-white">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/bookings"} className="nav-link text-white">
                    Bookings
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light">Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
