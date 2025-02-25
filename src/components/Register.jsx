import React from "react";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaArrowRight } from "react-icons/fa6";
import "../Styles/Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="register-title">Register</h1>
        <label className="subtext">Sign up with</label>
        {/* Social Login */}
        <div className="social-login">
          <button className="social-btn">
            <FcGoogle className="google-icon" />
          </button>
          <button className="social-btn">
            <FaApple className="apple-icon" />
          </button>
          <button className="social-btn">
            <FaFacebook className="facebook-icon" />
          </button>
        </div>

        <p className="subtext or-text">OR</p>

        {/* Name Fields */}
        <label className="input-label">Your Name</label>
        <input type="text" placeholder="First Name" className="input-field" />
        <input type="text" placeholder="Last Name" className="input-field" />

        {/* Gender Selection */}
        <label className="input-label">Gender</label>
        <div className="gender-options">
          <label><input type="checkbox" /> Male</label>
          <label><input type="checkbox" /> Female</label>
          <label><input type="checkbox" /> Other</label>
        </div>

        {/* Login Details */}
        <label className="input-label">Login Details</label>
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />

        <p className="password-info">
          Minimum 8 characters with at least one uppercase, one lowercase, one special character, and a number
        </p>

        {/* Terms & Conditions */}
        <label className="checkbox-label">
          <input type="checkbox" /> 
          <label>
            By clicking 'Log In' you agree to our website Kicks
            <a className="highlight">Club Terms & Conditions, Kicks Privacy Notice</a> and 
            <a className="highlight"> Terms & Conditions</a>.
          </label>
        </label>

        <label className="checkbox-label">
          <input type="checkbox" /> 
          <label>
            Keep me logged in - applies to all log in options below. 
            <a className="highlight"> More info</a>
          </label>
        </label>

        {/* Register Button */}
        <button className="register-btn">
          REGISTER <FaArrowRight className="send-icon" />
        </button>
      </div>
    </div>
  );
};

export default Register;
