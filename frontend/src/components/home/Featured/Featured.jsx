import React from "react";
import styles from "./Featured.module.css";
const Featured = () => {
  return (
    <div className={styles.feature_shop + " py-3 "}>
      <p className="text-center">Featured Shops</p>
      <div className={styles.feature_shop_main}>
        <div className={styles.feature_shop_card}>
          <div className={styles.left}>
            <p>Shop Name</p>
            <ul>
              <li>Services</li>
              <li>Services</li>
              <li>Services</li>
              <li>Services</li>
            </ul>
          </div>
          <div className={styles.right}>Checkout</div>
        </div>
      </div>

      <a className="m-0 mt-4 d-inline-block text-decoration-none fs-6 " >View All</a>
    </div>
  );
};

export default Featured;
