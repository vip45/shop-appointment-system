import React, { useState } from "react";
import styles from "./Auth.module.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className={styles.auth_main}>
      <div className={styles.auth_card}>
        <h2 className={styles.auth_title}>Create Account</h2>
        <form>
          <div className={styles.auth_input_group}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className={styles.auth_input_group}>
            <label>Password</label>
            <div className={styles.auth_password_wrapper}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
              />
              <span
                className={styles.auth_eye_icon}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "🙈"}
              </span>
            </div>
          </div>

          <div className={styles.auth_input_group}>
            <label>Confirm Password</label>
            <div className={styles.auth_password_wrapper}>
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm your password"
                required
              />
              <span
                className={styles.auth_eye_icon}
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? "👁️" : "🙈"}
              </span>
            </div>
          </div>

          <div className={styles.auth_checkbox_group}>
            <input type="checkbox" id="isShop" />
            <label htmlFor="isShop">Registering as a Shop Owner?</label>
          </div>

          <button type="submit" className={styles.auth_btn}>
            Sign Up
          </button>
        </form>

        <p className={styles.auth_switch_text}>
          Already have an account? <Link to={"/signin"}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
