import { Paper } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Cars = (props) => {
  
  const [cars, setCars] = useState([])

  useEffect(() => {
    gett()
  }, setCars)

  const gett = async(req, res) => {
     await axios.get("http://localhost:3001/api/user/allcars").then((resp) => {
      setCars(resp.data)
    })
  }

   
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        {cars.map((item) => {
          return (
            <div key={item.id} className='card col-8 col-sm-4 col-md-4 col-lg-5 mx-5 my-2'>
              <h4 className='text-center text-uppercase text-danger'>{item.model}</h4>
              <p> Make: {item.make}</p>
              <div className="col-2 mb-2">
              <buton className="btn btn-primary"> RS: {item.price}</buton>

              </div>


            </div>
          )
        })}
      </div>
    </div>
    
   
    
    </>
  )
}

export default Cars