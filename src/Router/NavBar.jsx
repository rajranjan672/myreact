import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./Navbar.css"
import { Avatar } from '@mui/material'

const NavBar = (props) => {
    const navigate = useNavigate()

    const sub = async(e) => {
        
      e.preventDefault()
       axios.get("http://localhost:3001/api/user/logout", {withCredentials : true}).then((resp, rej) => {
      navigate("/login")
     
          if(!resp) {
          alert('please enter valid email or password')

          } else  {

          }

       }).then(() => {
        {props.user()}
       })

       
      
      
  }
   

  return (
    <>
    <div className='navbar'>
    <div>
         <ul >
             <li><NavLink to="/cars" className=" nav-item">Cars</NavLink></li>

             <li><NavLink to="/about" className=" nav-item">About</NavLink></li>

             </ul>
            <ul className='d-flex '>

         </ul>
         </div>
         <div className=' justify-content-end col-2'>
        <div className='card d-flex justify-content-between'>
          <Avatar>

          </Avatar>
        <span className=' text-capitalize'>{props.user.name}</span>
        
        </div>


    </div>
    <button className="btn btn-secondary" onClick={sub}>Logout</button>

    </div>
    
    </>
  )
}

export default NavBar