import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateBook = () => {
    const [plan, setplan] = useState({
        title: '',
        description: '',
        type: ''
    })

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:3001/api/actionPlans/getOne/` + params.id).then((res) => {
            setplan({
                title: res.data.plans.title,
                 description: res.data.plans.description
            })
            console.log(res.data.title)
            console.log(res.data.description)
            console.log(res.data.plans)


        })
    }, [])
    
    const update = (e) => {
        e.preventDefault()
        axios.put("http://localhost:3001/api/actionPlans/editActionPlan/" + params.id, {
            title: plan.title,
            description: plan.description
        }).then(() => {
            navigate("/home")
        })
    }

    const onChangee = (e) => {
        setplan((prev) => ({...prev, [e.target.name]: e.target.value}))
    }
  return (
    <>

<section className="h-100 gradient-form" style={{backgroundClip: '#eee'}}>
    <div className="container py-3 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-10">
          <div className="card rounded-3 text-black">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-body p-md-5 mx-md-4">
  
                  
  
                  <form onSubmit={update}>
                    

                    
  
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="title">Email</label>
                      <input type="text" name='title' id="title" className="form-control" required
                        value= {plan.title}
                        onChange={onChangee} />
                    </div>
  
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="description">Password</label>
                      <input type="text" id="description" name='description' className="form-control" placeholder='password'
                     value= {plan.description}
                     onChange={onChangee}/>
                    </div>
  
                    <div className="text-center pt-1 mb-5 pb-1">
                      <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Update</button>
                      {/* <a className="text-muted" href="#!">Forgot password?</a> */}
                    </div>
  
  
                  </form>
  
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   
    
    </>
  )
}

export default UpdateBook