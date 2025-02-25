import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import Logo from '../assests/img/Logo-white.png';
import BigLogo from '../assests/img/Group.png';

const Footer = () => {
  return (
    <div className='footer-container'>
      
      {/* Top Section */}
      <div className='frame1'>
        <div className='frame1-left'>
          <div className='f1-left-top'>
            <>
                <h1>JOIN OUR KICKSPLUS CLUB & GET 15% OFF</h1>
            </>
            <label>Sign up for free! Join the community.</label>
          </div>
          <div className='f1-left-down'>
            <input type="email" placeholder="Email address" />
            <button>SUBMIT</button>
          </div>
        </div>

        <div className='frame1-right'>
          <img src={Logo} alt="KICKS" className="logo" />
          <span className='circle' style={{color:"#4A69E2"}}>+</span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='frame2'>
        <div className='f2-top'>
          <div className='about-us'>
            <h2>About us</h2>
            <p>We are the biggest hyperstore in the universe. We got you all covered with our exclusive collections and latest drops.</p>
          </div>

          <div className='categories'>
            <h2>Categories</h2>
            <ul>
              <li>Runners</li>
              <li>Sneakers</li>
              <li>Basketball</li>
              <li>Outdoor</li>
              <li>Golf</li>
              <li>Hiking</li>
            </ul>
          </div>

          <div className='company'>
            <h2>Company</h2>
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Blogs</li>
            </ul>
          </div>

          <div className='follow-us'>
            <h2>Follow us</h2>
            <div className="social-icons">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaTiktok />
            </div>
          </div>
        </div>

        <div className='f2-bottom'>
            <img src={BigLogo} alt="KICKS"/>
        </div>
      </div>
      <div className='footer'>
        <p>© All rights reserved | Made with ❤️ by <a href="#">Woxro Technologies</a></p>
      </div>
    </div>
  );
};

export default Footer;
