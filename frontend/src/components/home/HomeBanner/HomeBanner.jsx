import React from "react";
import styles from "./HomeBanner.module.css";
const HomeBanner = () => {
  return <div className={styles.homebanner}>
    <h1>Simplify Your Schedule.</h1>
    <h1>Book Appointment with Ease</h1>
    <p>Your time is valueable. Let us help you manage it efficiently.</p>

    <button>Book Now</button>
  </div>;
};

export default HomeBanner;
