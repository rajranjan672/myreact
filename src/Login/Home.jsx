import { Paper } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./home.css"
import PhotoUploadForm from './PhotoUploadForm';
import UserList from './UserList';
import YourComponent from './PhotoUploadForm';
const Home = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()


    useEffect(()=> {
        gett()
     
       
       
     }, [  [data.email]]);
   

    const gett = async() => {
        try{ const ress = await axios.get("http://localhost:3001/api/user/get",  {withCredentials: true} )
          setData(ress.data)
          // console.log(ress.data)
     } catch {
          navigate("/login")
     }
     }
  return (
    <>
    <div className="home">
    <div className='container'>
      <PhotoUploadForm />
      {/* <YourComponent /> */}
      <div>
      <UserList />

      </div>
        <div className='row'>

            <div className="mt-5">
            <Paper elevation={10} className='card mx-auto col-8 col-md-8 col-sm-5 col-lg-5 p-0' >
          
          <div className='profilebg'>
          
     <h3 className='d-flex justify-content-center text-primary text-uppercase'>{data.username}</h3>

          </div>
          
     
     <div className="my-2 py-1">
     <h5><span className='text-danger'>Email:</span>  {data.email}</h5>
     <h5><span className='text-danger'>Gender:</span>  {data.gender}</h5>

     <h5><span className='text-danger'>Phone:</span>  {data.phone}</h5>
     <h5><span className='text-danger'>City:</span>  {data.city}</h5>

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
    </div>
    
   
    
    </>
  )
}

export default Home