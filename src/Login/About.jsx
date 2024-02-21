import { Avatar, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./card.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const About = (props) => {
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
  return (
    <div classemail="container">
    <div className="row">
      <Paper elevation={20} className="cardd col-4 mx-auto my-5">
        <div className="card-header">
        <Avatar className='mx-auto'>
      </Avatar>
        <h3 className='text-center text-capitalize text-primary'> {data.name}</h3>

        </div>
      <div className="card-body">
      
        <p>email: {data.email}</p>

      </div>
    </Paper>
        
   
    </div>
  </div>
  )
}

export default About