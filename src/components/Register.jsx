import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import {auth,googleProvider,createUserWithEmailAndPassword,signInWithPopup,updateProfile} from "../firebase";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaArrowRight } from "react-icons/fa6";
import "../Styles/Register.css";

const Register = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const navigate = useNavigate();

    // Register User with Email & Password
  const handleRegister = async () => {
    if (!email || !password || !firstName || !lastName) {
      alert("Please enter all details.");
      return;
    }
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
    
        // Update user profile with first & last name
        await updateProfile(user, {
          displayName: `${firstName} ${lastName}`
        });
        console.log(auth.currentUser.displayName); // "John Doe"
      alert("Registration successful!");
      setEmail("");
      setFirstName("");
      setLastName("");
      setPassword("");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  // Sign in with Google
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google Sign-In successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="register-title">Register</h1>
        <label className="subtext">Sign up with</label>
        {/* Social Login */}
        <div className="social-login">
          <button className="social-btn" onClick={handleGoogleSignIn}>
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
        <input type="text" 
                placeholder="First Name" 
                className="input-field" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" placeholder="Last Name" className="input-field"
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} />

        {/* Gender Selection */}
        <label className="input-label">Gender</label>
        <div className="gender-options">
          <label><input type="checkbox" /> Male</label>
          <label><input type="checkbox" /> Female</label>
          <label><input type="checkbox" /> Other</label>
        </div>

        {/* Login Details */}
        <label className="input-label">Login Details</label>
        <input type="email" placeholder="Email" className="input-field" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" className="input-field" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>

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
        <button className="register-btn" onClick={handleRegister}>
          REGISTER <FaArrowRight className="send-icon" />
        </button>
      </div>
    </div>
  );
};

export default Register;
