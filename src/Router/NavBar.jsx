import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./Navbar.css"

const NavBar = (props) => {
    const navigate = useNavigate()

    const [data, setData] = useState([])
    const [auth, setAuth] = useState(false)
     
   
  useEffect(() => {
    gett()
  }, [setData])
  
  
  const gett = async(req,res) => {
    try {
      await axios.get("http://localhost:3001/api/user/get", {withCredentials: true}).then((ress) => {
      setData(ress.data.user)
      console.log(ress.data.user)
    }).then(() => {
      setAuth(true)
      console.log(auth)
  
    })
  
    } catch {
      navigate("/login")
    }
    
  }

    const sub = async(e) => {
        
      e.preventDefault()
       axios.get("http://localhost:3001/api/user/logout", {withCredentials : true}).then((resp, rej) => {
      navigate("/login")
     
          if(!resp) {
          alert('please enter valid email or password')
          }

       }).then(() => {
        // {props.user()}
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

         <ul>
            <div className="dropdown" style={{float: "right"}}>
          <button className="dropbtn btn btn-danger text-capitalize"> <i className="bi bi-person-circle"> {data.name}</i></button>
          <div className="dropdown-content">
          <button type="button" className="btn btn-warning w-100 " onClick={sub}>Logout<i className="bi bi-arrow-{data.username}"></i></button>
          </div>
        </div>
            </ul>
     

    </div>
    
    </>
  )
}

export default NavBar