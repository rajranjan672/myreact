import React, { useState } from 'react'
import "../Login/register.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        gender: ""
    })

    const navigate = useNavigate()
    

    const sub = async(e) => {
        e.preventDefault()
         axios.post("http://localhost:3001/api/user/createuser", data).then((resp) => {
        //   setData(ress.data)

            console.log('res',resp.data)

         })
         navigate("/login")
    }

    const Login = () => {
        navigate("/login")
    }

  return (
    <>
    <div className='register  gradient-form'>
    <div className="container py-3">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-10">
          <div className="card rounded-3 text-black">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-body p-md-5 mx-md-4">
  

                  <form onSubmit={sub}>
                    <p>Please Register your account</p>

                    <div className="form-outline">
                      <label className="form-label" htmlFor="username">Username</label>
                      <input type="text" name='username' id="username" className="form-control" required
                        placeholder="Username" onChange={(e) => 
                        setData({...data, [e.target.name]: e.target.value })} />
                    </div>
  
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="email">Email</label>
                      <input type="email" name='email' id="email" className="form-control" required
                        placeholder="Email address" onChange={(e) => 
                        setData({...data, [e.target.name]: e.target.value })} />
                    </div>
  
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="password">Password</label>
                      <input type="password" id="password" name='password' className="form-control" placeholder='password'
                      onChange={(e) => 
                        setData({...data, [e.target.name]: e.target.value })}
                         required />
                    </div>

                      <div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" id="gender" onChange={(e) => setData({...data, [e.target.name]: "Female"})}/>
            <label className="form-check-label" htmlFor="gender">
            Female
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" id="gender" value="Male" onChange={(e) => setData({...data, [e.target.name]: "Male"})} />
            <label className="form-check-label" htmlFor="gender">
            Male
            </label>
          </div>

</div>
  
                    <div className="text-center pt-1 mb-5 pb-1">
                      <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Register</button>
                      {/* <a className="text-muted" href="#!">Forgot password?</a> */}
                    </div>
  
                    <div className="d-flex align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2">Don't have an account?</p>
                      <button type="button" className="btn btn-outline-danger" onClick={Login}>Login</button>
                    </div>
      
                  </form>
  
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 className="mb-4">We are more than just a company</h4>
                  <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </div>
     
        </div>
    </div>
    </div>
    </div>
    </div>
   
  </>
  )
}

export default Register