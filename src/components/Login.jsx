import React,{useState} from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {auth,googleProvider,signInWithPopup,signInWithEmailAndPassword } from '../firebase';
import {useNavigate} from 'react-router-dom';
import '../Styles/Register.css';
import '../Styles/Login.css';
// same css as register from register.css
const Login = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleEmailLogin = async () => {
        if (!email || !password) {
          alert("Please enter both email and password.");
          return;
        }
        try {
          await signInWithEmailAndPassword(auth, email, password);
          alert("Login successful!");
          navigate("/landing");
        } catch (error) {
          alert(error.message);
        }
        setEmail("");
        setPassword("");
    };
    
      // Handle Google Sign-In
    const handleGoogleSignIn = async () => {
        try {
          await signInWithPopup(auth, googleProvider);
          alert("Google Sign-In successful!");
        } catch (error) {
          alert(error.message);
        }
    };

  return (
    <div className='register-container'>
        <div className='login-box ' style={{maxWidth:"480px"}}>
            <h1 className="login-title">Login</h1>
            <label className='forgot-password'>Forgort your password?</label>
            <input type="email" placeholder="Email" className="input-field" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" className="input-field" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
            <label className="checkbox-label">
                <input type="checkbox" /> 
                <label>
                  Keep me logged in - applies to all log in options below. 
                  <a className="highlight"> More info</a>
                </label>
            </label>
            <button className="login-btn" onClick={handleEmailLogin}>
                      EMAIL LOGIN <FaArrowRight className="send-icon" />
            </button>
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
            <label className="checkbox-label">
                <label className='terms-text'>
                     By clicking 'Log In' you agree to our website Kicks
                     <a className="Lhighlight">Club Terms & Conditions, Kicks Privacy Notice</a> and 
                     <a className="Lhighlight"> Terms & Conditions</a>.
                </label>
            </label>
        </div>
    </div>
  )
}

export default Login