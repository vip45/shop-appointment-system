import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
//   const user = null; 
  const user = { role: "consumer" };
//   const user = { role: "shopOwner" };

  return (
    <nav className={`d-flex justify-content-between px-lg-5 sticky-top ${styles.navbar}`}>
      <div className={styles.logo}>AppointNow</div>

      <ul className={styles.navLinks}>
        {/* Guest */}
        {!user && (
          <>
            <li>Home</li>
            <li>Login</li>
            <li>Signup</li>
          </>
        )}

        {/* Consumer */}
        {user?.role === "consumer" && (
          <>
            <li>Home</li>
            <li>Services</li>
            <li>My Appointments</li>
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
