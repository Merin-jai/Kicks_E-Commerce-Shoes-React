import React from 'react';
import '../Styles/main_components.css';
import { TiArrowSortedDown } from "react-icons/ti";
import Logo from '../assests/img/Logo.png';
const Header = () => {
  return (
    <div className='header-container'>
        <div className='header-left'>
            <div>New Drops 🔥</div>
            <div className='Arrow'>
                <label>Men</label>
                 <TiArrowSortedDown style={{fontSize:"1vw"}}/>
            </div>
            <div className='Arrow'>
                <label>Women</label>
                 <TiArrowSortedDown style={{fontSize:"1vw"}}/>
            </div>
        </div>
        <div className='header-middle'>
          <img src={Logo}></img>

        </div>
        <div className='header-right'>
            <label>aaa</label>
        </div>
    </div>
  )
}

export default Header