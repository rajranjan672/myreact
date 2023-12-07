import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage, validateYupSchema, FastField } from 'formik';
// import * as Yup from 'yup';
import { fieldToTextField, TextField,  } from 'formik-material-ui';
import axios from 'axios';
import * as Yup from 'yup'
import Swal from 'sweetalert2';
import '../Login/plans.css'
import { Tooltip } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  

const EditPlan = (props) => {
     
    const [plans, setPlans] = useState([])
    const [page, setPage] = useState(1)

     const [open, setOpen] = useState(false);
     const handleOpen = () => {
      console.log("handleOpen")
      setOpen(true)
    
    };
     const handleClose = () => {
      console.log("handleclose")
      setOpen(false)}
      ;
     const [title, setTitle] = useState(props.title);
     const [description, setDescription] = useState(props.description);
    
     

 
    
    const onSubmiit =  async(e, id) => {
      e.preventDefault()
        console.log('form data')
      await  axios.put('http://localhost:3001/api/actionPlans/editActionPlan/'+ id, title, description)
        .then (
            Swal.fire({
                title: "Success",
                text: "Plan Added",
                icon: "success",
                confirmButtonText: "OK",
                customClass: {
                    container: 'my-swal'
                  }
            })
        )
        
    }


    

   return (
     <>
          <Tooltip title="Edit" arrow>

     <button onClick={handleOpen} className='editbtn'>
          <i class="bi bi-pencil-square"></i>
         
     </button>
     </Tooltip>
     <Modal
         aria-labelledby="transition-modal-title"
         aria-describedby="transition-modal-description"
         open={open}
         onClose={handleClose}
         closeAfterTransition
         BackdropComponent={Backdrop}
         BackdropProps={{
           timeout: 500,
         }}
       >
         <Fade in={open}>
           <Box sx={style}>
             <Typography id="transition-modal-title" variant="h6" component="h2">
               Edit Plan
             </Typography>
             <hr />
             <Typography id="transition-modal-description" sx={{ mt: 2 }}>
               
                <div>
             <form onSubmit={onSubmiit}>
                <div className='inputs'>
                 <label htmlFor='title'>Title*</label> 
                <input  className='field'
                value={title}
                 type="text" 
                 id='title'
                  name='title'
                  required
                  // component={TextField}
                  onChange={(e) => {
                    setTitle(e.target.value)
                  }}
                 />
                </div>
                 <div className='error'>
               </div> 
                <div className='inputs'>
                <label htmlFor="description">Description*</label>
                
                <input  className="field"
                value={description}
                 type="text" 
                 id='description'
                  name='description' 
                  required
                  onChange={(e) => {
                    setDescription(e.target.value)
                  }}

                 />
                </div>
                <div className='error'>
               </div>
              
                <div className='error'>
               </div>
               <div className='button'>
                <Button variant="contained" color="primary" type='submit'>Submit</Button>
                </div>
             </form>
             </div>
             </Typography>
           </Box>
         </Fade>
       </Modal>
    
     </>
   )
}

export default EditPlan