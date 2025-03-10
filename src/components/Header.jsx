import React,{useState,useContext} from 'react';
import '../Styles/main_components.css';
import { TiArrowSortedDown } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { CartContext } from '../context/CartContext';
import Logo from '../assests/img/Logo.png';
const Header = () => {
  const [menuOpen,setMenuOpen]=useState(false);
  const {cart} = useContext(CartContext);

  return (
    <div className='header-container'>

        {/* display the hamburger for small screens */}
        <div className='hamburger-menu' onClick={()=>setMenuOpen(!menuOpen)}>
                <RxHamburgerMenu/>
        </div> 
        {/* if menu is opened it will be displayed */}
        {/* header right */}
        <div className={`${menuOpen?"header-left-mobile":"header-left"}`}>
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


        {/* displays the logo as a image */}
        <div className='header-middle'>
          <img src={Logo} alt="KICKS"/>
        </div>
        <div className='header-right'>
            <div className='search'><IoSearch className='icons'/></div>
            <FaUser className='icons'/>
            <a className='circle' href="/cart">
              <label>{cart.length}</label>
            </a>
        </div>
    </div>
  )
}

export default Header