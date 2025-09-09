import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h3>AppointNow</h3>
          <p>© 2025 AppointNow. All rights reserved.</p>
        </div>

        <div className={styles.right}>
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Login</li>
            <li>Signup</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
