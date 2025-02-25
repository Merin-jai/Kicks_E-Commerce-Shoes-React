import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginComponent from '../components/Login';
import JoinClub from '../components/JoinClub';
import '../Styles/Registerpage.css'
// same css as register from Registerpage.css
const Login = () => {
  return (
    <div className='Login-container'>
    <Header/>
    <div className='Login-content'>
      <LoginComponent/>
      <JoinClub/>
    </div>
    <Footer/>
  </div>
  )
}

export default Login