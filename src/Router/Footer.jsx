import React from 'react'
// import { useHistory } from 'react-router-dom'
import { useNavigate, BrowserRouter } from "react-router-dom";

const Footer = () => {

    let navigate = useNavigate();

  const home =() => {
    navigate("/");
  }

  const about =() => {
    navigate("/about");
  }

  const profile =() => {
    navigate("/profile/none");
  }
  return (
    <div  className='footer'>
      <p className='footer_nav' onClick={home}>Home</p>
      <p className='footer_nav' onClick={about}>About</p>
      <p className='footer_nav' onClick={profile}>Profile</p>
      
      </div>
  )
}

export default Footer