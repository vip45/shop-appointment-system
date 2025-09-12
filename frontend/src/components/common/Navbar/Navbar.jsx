import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const user = null; 
  const user = { role: "consumer" };
//   const user = { role: "shopOwner" };

  return (
    <nav
      className={`d-flex justify-content-between px-lg-5 sticky-top ${styles.navbar}`}
    >
      <div className={styles.logo}>AppointNow</div>

      <ul className={styles.navLinks}>
        {/* Guest */}
        {!user && (
          <>
            <Link to={"/"} className="text-white text-decoration-none">
              <li>Home</li>
            </Link>
            <Link to={"/signin"} className="text-white text-decoration-none">
              <li>Login</li>
            </Link>
            <Link to={"/signup"} className="text-white text-decoration-none">
              <li>Signup</li>
            </Link>
          </>
        )}

        {/* Consumer */}
        {user?.role === "consumer" && (
          <>
            <Link to={"/"} className="text-white text-decoration-none">
              <li>Home</li>
            </Link>
            <Link to={"/service"} className="text-white text-decoration-none">
              <li>Services</li>
            </Link>
            <Link to={"/appointments"} className="text-white text-decoration-none">
            <li>My Appointments</li>
            </Link>
            <li>
              <button>Logout</button>
            </li>
          </>
        )}

        {/* Shop Owner */}
        {user?.role === "shopOwner" && (
          <>
            <li>Dashboard</li>
            <li>Services</li>
            <li>Bookings</li>
            <li>
              <button>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
