import React from 'react';
import Logo from '../assests/img/Logo-white.png';

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='frame1'>
            <div className='frame1-left'>
                <div className='f1-left-top'>
                    <h1>JOIN OUR KICKSPLUS CLUB & GET 15% OFF</h1>
                    <label>Sign up for free! Join the community.</label>
                </div>
                <div className='f1-left-down'>
                    <input type="email"/>
                    <button>SUBMIT</button>
                </div>
            </div>
            <div className='frame1-right'>
                <img src={Logo} alt="KICKS"/>
                <span className='circle'>+</span>
            </div>
        </div>
        <div className='frame2'>

        </div>
    </div>
  )
}

export default Footer