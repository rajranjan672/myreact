import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from 'axios';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const NewCar = ({get}) => {

    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState({
      make: "",
      model: "",
      price: "",
    })
   
   

  
  const sub = async(e) => {
    e.preventDefault()
     axios.post("http://localhost:3001/api/car/createcar", data).then((resp) => {
       setData(resp.data)

        console.log('res',resp.data)
        handleClose()
     })
     get()
     console.log("subb")
}

    const handleClickOpen = () => {
      setOpen(true);
      console.log("open")
    };
  
    const handleClose = () => {
      setOpen(false);
      console.log("close")

    };

  

  return (
    <>
    <div className='new'>
    <Button variant='contained' className='col-3 col-sm-3 col-md-2 co-lg-2 col-xl-2' onClick={handleClickOpen}>
        Add Car
      </Button>
    </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"New Car"}</DialogTitle>
        <DialogContent>
        <form class="row g-3 needs-validation" onSubmit={sub}>
        <div className="form-floating">
                      <input type="text" name='make' id="make" className="form-control" required
                        placeholder="make" onChange={(e) => 
                        setData({...data, [e.target.name]: e.target.value})} />
                      <label className="form-label" htmlFor="make">Make</label>

                    </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" name='model' id="model" placeholder="name@example.com"
            onChange={(e) => 
              setData({...data, [e.target.name]: e.target.value})} />
              
              <label htmlFor="model">Model</label>

          </div>

          <div class="form-floating mb-3">
            <input type="number" class="form-control" name='price' id="price" placeholder="name@example.com"
            onChange={(e) => 
              setData({...data, [e.target.name]: e.target.value})} />
              
              <label htmlFor="price">Price</label>

          </div>
       

          <div>
          <button type='submit' className='btn btn-primary mx-2'>Submit</button>
          <button onClick={handleClose}>Cancle</button>
          </div>
         
          </form>
        </DialogContent>
       
      </Dialog>
    </>
  )
}

export default React.memo(NewCar)
