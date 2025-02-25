import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegComponent from '../components/Register'
const Register = () => {
  return (
    <div className='Register-container'>
      <Header/>
      <div className='Register-content'>
        <RegComponent/>
      </div>
      <Footer/>
    </div>
  )
}

export default Register