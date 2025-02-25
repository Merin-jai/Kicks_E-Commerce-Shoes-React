import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegComponent from '../components/Register';
import JoinClub from '../components/JoinClub';
import '../Styles/Registerpage.css'
const Register = () => {
  return (
    <div className='Register-container'>
      <Header/>
      <div className='Register-content'>
        <RegComponent/>
        <JoinClub/>
      </div>
      <Footer/>
    </div>
  )
}

export default Register