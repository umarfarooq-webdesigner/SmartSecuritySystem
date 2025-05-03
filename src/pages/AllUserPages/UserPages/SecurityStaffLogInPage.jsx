import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Navbar from "../../../../components/Navbar/Navbar";
import Button from "../../../../components/Button/Button";
import LockedPage from "./LockedPage";

import "./SecurityStaffLogInPageStyle.css";

const LoginPage = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const VALID_USER_ID = "bsf2100909";
  const VALID_PASSWORD = "2100909";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId === VALID_USER_ID && password === VALID_PASSWORD) {
      navigate("/main");
    } else {
      setAttempts(attempts + 1);
      setError(true);
      if (attempts + 1 >= 3) {
        navigate("/locked");
      }
    }
  };

  return (
    <>
    <Navbar />
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <p>
          {error && attempts < 3 && (
            <span style={{ color: "var(--error-red)" }}>
              Please Enter valid Information (Only {3 - attempts} Attempt left).
            </span>
          )}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className={error ? "input-error" : ""}
              required
            />
          </div>

          <div className="input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={error ? "input-error" : ""}
              required
            />
            <span className="toggle-icon" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          <Button type="submit" text="Sign In" />
        </form>
      </div>
    </div>
    
    </>
 
  );
};

export default LoginPage;
