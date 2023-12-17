import { Paper } from '@material-ui/core'
import { Avatar } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import avtar from "./avtar.jpg"
import CountUp from 'react-countup';
import Typing from 'react-typing-animation';
const MyProfile = () => {
    const [data, setData] = useState([])


    useEffect(()=> {
        gett()
     
       
       
     }, [  [data.email]]);
   

    const gett = async() => {
        try{ const ress = await axios.get("http://localhost:3001/api/user/get",  {withCredentials: true} )
          setData(ress.data)
          console.log(ress.data)
     } catch {
        //  navigate("/login")
     }
     }
  return (
    <>
    <div className="about">
    <div className='container'>
        <div className='row'>
          
        <Paper elevation={10} className=' mx-auto col-8 col-md-8 col-sm-6 col-lg-6 p-0' >
          
            <div className='profilebg'>
            <div className=' d-flex justify-content-center'>
            <Avatar
        alt="Remy Sharp"
        src={avtar}
        sx={{ width: 100, height: 100 }}
      />
        </div>
       <h3 className='d-flex justify-content-center text-primary text-uppercase'>{data.username}</h3>

            </div>
            
       
        <div className='counter h-25 d-block'>
        <CountUp style={{color: "red", fontWeight: ""}} className='d-flex py-4 justify-content-center'  end={100} duration={4} prefix='Points: '/>

        </div>
        <h5>Email: {data.email}</h5>
        <h5>Address: Hauz Khus, New Delhi</h5>
        <div className='d-flex justify-content-center'>
        <i class=" justify-content-center bi bi-instagram"></i>
        <i class="bi bi-twitter-x"></i>
        <i class="bi bi-twitter"></i>
        </div>
    </Paper>
        </div>
   
    </div>
    </div>
   
    
    </>
  )
}

export default MyProfile