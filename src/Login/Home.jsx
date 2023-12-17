import { Paper } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./home.css"
const Home = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()


    useEffect(()=> {
        gett()
     
       
       
     }, [  [data.email]]);
   

    const gett = async() => {
        try{ const ress = await axios.get("http://localhost:3001/api/user/get",  {withCredentials: true} )
          setData(ress.data)
          console.log(ress.data)
     } catch {
          navigate("/login")
     }
     }
  return (
    <>
    <div className='container'>
        <div className='row'>

            <div className="mt-5">
            <Paper elevation={10} className='card mx-auto col-8 col-md-8 col-sm-5 col-lg-5 p-0' >
          
          <div className='profilebg'>
          
     <h3 className='d-flex justify-content-center text-primary text-uppercase'>{data.username}</h3>

          </div>
          
     
     <div className="my-2 py-1">
     <h5>Email: {data.email}</h5>
      <h4>Gender: {data.gender}</h4>
      <div className='d-flex justify-content-center'>
      <i class=" justify-content-center bi bi-instagram"></i>
      <i class="bi bi-twitter-x"></i>
      <i class="bi bi-twitter"></i>
     </div>

      </div>
  </Paper>
            </div>
          
       
        </div>
   
    </div>
   
    
    </>
  )
}

export default Home