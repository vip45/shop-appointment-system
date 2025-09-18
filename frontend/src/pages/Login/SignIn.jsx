import React, { useState } from "react";
import styles from "./Auth.module.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.auth_main}>
      <div className={styles.auth_card}>
        <h2 className={styles.auth_title}>Sign In</h2>
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

          <button type="submit" className={styles.auth_btn}>
            Sign In
          </button>
        </form>

        <p className={styles.auth_switch_text}>
          Don’t have an account? <Link to={"/signup"}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
