
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import { useNavigate, BrowserRouter, Route, Routes, Outlet, Navigate } from "react-router-dom";

import axios from 'axios';
import Register from './Login/Register';
import "@fontsource/roboto";
import "../src/index.css";
import "./App.css";
import Login from './Login/Login';
import Cars from './Login/Cars';
import NavBar from './Router/NavBar';
import About from './Login/About';



function App() {

  const [data, setData] = useState([])
  const navigate = useNavigate()
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

  
  return (
    
    <>
    <div>
      {auth && (<NavBar user = {data}/>)}
    
      <Routes>
       <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/cars" defaults element={<Cars user = {data} />} />
        <Route path='/login' element={<Login user = {data}/>}  />
        <Route path='/about' element={<About user = {data}/>}  />

        
        <Route path="/register" element={<Register />} />
        
      </Routes>

    </div>
     <>
     </>
     <Outlet />
    </>
  );
}

export default App;
