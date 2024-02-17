import { Avatar, Paper } from '@mui/material'
import React from 'react'
import "./card.css"

const About = (props) => {
  return (
    <div classemail="container">
    <div className="row">
      <Paper elevation={20} className="cardd col-4 mx-auto my-5">
        <div className="card-header">
        <Avatar className='mx-auto'>
      </Avatar>
        <h3 className='text-center text-capitalize text-primary'> {props.user.name}</h3>

        </div>
      <div className="card-body">
      
        <p>email: {props.user.email}</p>

      </div>
    </Paper>
        
   
    </div>
  </div>
  )
}

export default About