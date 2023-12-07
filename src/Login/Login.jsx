import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./register.css"
const Login = () => {

    const [data, setData] = useState({
        email: "",
        password: "",
    })
    const [data1, setData1] = useState({email: ''})
 

    const navigate = useNavigate()

    const sub = async(e) => {
        
        e.preventDefault()
         axios.post("http://localhost:3001/api/user/login", data, {withCredentials : true}).then((resp, rej) => {
        //   setData(ress.data)
        navigate("/home")
        .then(   async() => {
          try{ const ress = await axios.get("http://localhost:3001/api/user/get",  {withCredentials: true} )
            setData1(ress.data)
            console.log(ress.data)
       } catch {
           navigate("/login")
       }
       }
      )
            if(!resp) {
            alert('please enter valid email or password')

                // console.log('res',resp.data)

            } else  {

            }
            
            

         })

         
        
        
        //  navigate("/login")
    }

    const Register = () => {
        navigate("/register")
    }

  return (
    <>
    <div className='register'>
    <section className="h-100 gradient-form" style={{backgroundClip: '#eee'}}>
    <div className="container py-3 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-10">
          <div className="card rounded-3 text-black">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-body p-md-5 mx-md-4">
  
                  
  
                  <form onSubmit={sub}>
                    <p>Please Login</p>

                    
  
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
  
                    <div className="text-center pt-1 mb-5 pb-1">
                      <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Login</button>
                      {/* <a className="text-muted" href="#!">Forgot password?</a> */}
                    </div>
  
                    <div className="d-flex align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2">Don't have an account?</p>
                      <button type="button" className="btn btn-outline-danger" onClick={Register}>Register</button>
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
  </section>
    </div>
   
    </>
  )
}

export default Login