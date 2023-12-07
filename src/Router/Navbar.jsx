// import React from 'react'
// import {NavLink} from "react-router-dom"
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Button from 'react-bootstrap/Button';

const Navbar = ({ name, ...props }) => {
  const [isNav, setIsNav] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  
  const navigate = useNavigate()

  const [data, setData] = useState([])
 const a = axios.defaults.withCredentials = true



  useEffect(() => {

     gett()
    
}, [data.email])


const logout = () => {
  axios.get("http://localhost:3001/api/user/logout")
  navigate("/login")
  
}
 const gett = async() => {
   try{ const ress = await axios.get("http://localhost:3001/api/user/get",  {withCredentials: true} )
    setData(ress.data)
    console.log(ress.data)
    console.log(ress.data.username)
    setIsNav(true)
} catch {
   navigate("/login")
}
}
  return (


    <>
    
      {isNav && (<div className='navbar '>
        
      <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon className='menuicon text-white'/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'} d-flex justify-content-between`}>
         <ul >
             <li><NavLink to="/home" className=" nav-item" onClick={handleShowNavbar}>Home</NavLink></li>

             {/* <li><NavLink to="/profile/none" className=" text-danger nav-item" onClick={handleShowNavbar}>Profile</NavLink></li> */}
             <li><NavLink to="/about" className=" nav-item" onClick={handleShowNavbar}>About Us</NavLink></li>
{/* <button className='btn btn-primary align-right' onClick={logout}>Logout</button> */}

             </ul>
            <ul className='d-flex '>
            
           

         </ul>
         </div>
         {/* <li className='logout '> */}
             {/* <button className="dropbtn ">{data.username}</button> */}

{/* <li><NavLink to="/register" className="nav-item">Register</NavLink></li> */}
{/* <li><NavLink to="/login" className="nav-item">Login</NavLink></li> */}


  
             {/* </li> */}

             <ul>
    <div className="dropdown" style={{float: "right"}}>
  <button className="dropbtn">{data.username}</button>
  <div className="dropdown-content">
   <button type="button" className="btn btn-warning" onClick={logout}>Logout<i className="bi bi-arrow-{data.username}"></i></button>
    <NavLink to="/profile/none" className="profile"><i className="bi bi-person-circle"> Profile</i></NavLink>
     <a href="#">Link 3</a> 
  </div>
</div>
    </ul>
     </div> )}
    
     </>

  )



}
  


export default Navbar