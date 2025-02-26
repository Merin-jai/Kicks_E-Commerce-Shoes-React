import React from "react";
// import "../styles/LandingIntro.css";
import ShoeBg from '../assests/img/image 14.png';
import Shoe1 from '../assests/img/shoe1.jpeg';
import Shoe2 from '../assests/img/shoe2.jpeg';

const LandingIntro = () => {
  return (
    <section className="landing-intro">
      {/* <div className="intro-text"> */}
        <h1 className="hero-title">
          DO IT <span className="highlight">RIGHT</span>
        </h1>
      {/* </div> */}

      <section className="hero-banner">
        {/* Left Section: Product Badge */}
          <div className="product-badge">
            <p>Nike product of the year</p>
          </div>

          {/* Hero Content */}
          <div className="hero-content">
            <div className="hero-text">
              <h2 className="h-title">NIKE AIR MAX</h2>
              <p className="hero-description">
                Nike introducing the new Air Max for everyone's comfort
              </p>
              <button className="shop-btn">SHOP NOW</button>
            </div>

            {/* Product Images */}
            <div className="hero-image">
              <img src={ShoeBg} alt="Nike Air Max" className="main-image" />
              <div className="small-thumbnails">
                <img src={Shoe1} alt="Thumbnail 1" />
                <img src={Shoe2} alt="Thumbnail 2" />
              </div>
            </div>
          </div>
      </section>
    </section>
  );
};

export default LandingIntro;
