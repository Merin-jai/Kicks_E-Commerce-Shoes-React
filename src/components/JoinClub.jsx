import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import "../Styles/JoinClub.css"; // Make sure to create and link this CSS file

const Join = () => {
  return (
    <div className="join-container">
      <div className="join-box">
        <h1 className="join-title">
          <strong>Join Kicks Club Get Rewarded Today.</strong>
        </h1>
        <p className="join-text">
          As kicks club member you get rewarded with what you love for doing what you love. 
          Sign up today and receive immediate access to these Level 1 benefits:
        </p>
        
        <ul className="join-benefits">
          <li>Free shipping</li>
          <li>A 15% off voucher for your next purchase</li>
          <li>Access to Members Only products and sales</li>
          <li>Access to adidas Running and Training apps</li>
          <li>Special offers and promotions</li>
        </ul>

        <p className="join-text">
          Join now to start earning points, reach new levels and unlock more rewards and benefits from adiClub.
        </p>

        <button className="join-btn">
          JOIN THE CLUB <FaArrowRight className="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default Join;
