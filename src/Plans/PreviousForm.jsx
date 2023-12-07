import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
// import * as Yup from 'yup';
import { TextField } from '@mui/material';
import axios from 'axios';
import * as Yup from 'yup'

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
  

const PreviousForm = () => {

     const [open, setOpen] = useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     const [title, setTitle] = useState(null);
     const [description, setDescription] = useState(null);
    
     const initialValues= {
        title: '',
        description: ''
    }

    const onSubmit =  values => {
        console.log('form data', values)
        axios.post('http://localhost:3001/api/actionPlans/createActionPlans').then(response => 
            (response.data).then(
                
            )
        )
    }

    const validate = values => {
        let errors = {}

        if(!values.title) {
            errors.title = 'required*'
        }
        if(!values.description) {
            errors.description = 'required*'
        }

        return errors
    }

     const validationSchema = Yup.object({
        title: Yup.string().required('Required'),
        description: Yup.string().required('Required')
     })

     const formik = useFormik({
        initialValues,
        onSubmit,
        // validate
        validationSchema
     })

      console.log('visited', formik.touched)


   return (
     <>
     <Button onClick={handleOpen} className='addbtn' variant="contained" color="success">
         Success
     </Button>
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
               Action Plan
             </Typography>
             <Typography id="transition-modal-description" sx={{ mt: 2 }}>
             <form onSubmit={formik.handleSubmit}>
                <div className='inputs'>
                <label htmlFor="title"> TITLE</label>
                <input
                 type="text" 
                 id='title' name=
                 'title' className='fields'
                  onChange={formik.handleChange}
                  onBlur= {formik.handleBlur}
                   value={formik.values.title} />
                </div>
                <div className='error'>
               {formik.touched.title && formik.errors.title? <div>{formik.errors.title}</div>: null}
               </div>
                <div className='inputs'>
                <label htmlFor="description">Description</label>
                <input
                 type="text" 
                 id='description'
                  name='description' onChange={formik.handleChange}
                  onBlur= {formik.handleBlur}
                   value={formik.values.description} />
                </div>
                <div className='error'>
               {formik.touched.description && formik.errors.description? <div>{formik.errors.description}</div>: null}
               </div>
                <button type='submit' disabled={formik.errors.title || formik.errors.description}>Submit</button>
             </form>
             </Typography>
           </Box>
         </Fade>
       </Modal>
    
     </>
   )
}

export default PreviousForm