import React from 'react'
import SearchResult from '../Plans/SearchResult'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Profile = () => {
  const [data, setData] = useState({email: ''})

  const navigate = useNavigate()

  useEffect(()=> {
    gett()
    
      
      
    }, []);
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
    <SearchResult />
    </>
  )
}

export default Profile