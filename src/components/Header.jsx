import React from 'react';
import '../Styles/main_components.css';
import { TiArrowSortedDown } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
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
            <IoSearch className='icons'/>
            <FaUser className='icons'/>
            <div className='circle'>
              <label>0</label>
            </div>
        </div>
    </div>
  )
}

export default Header