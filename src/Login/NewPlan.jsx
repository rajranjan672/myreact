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

import { fieldToTextField  } from 'formik-material-ui';
import axios from 'axios';
import * as Yup from 'yup'
import Swal from 'sweetalert2';
import '../Login/plans.css'
import { FormControlLabel, Slider, TextField, Checkbox } from '@mui/material';
import { useRef } from 'react';
import PreviewImage from './PreviewImage';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';


const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"]
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
  

const NewPlan = (props) => {
     const [open, setOpen] = useState(false);
     
     const fileRef = useRef(null);
     const handleOpen = () => {
      console.log("handleOpen")
      setOpen(true)
    
    };
     const handleClose = () => {
      console.log("handleclose")
      setOpen(false)}
      ;
     const [title, setTitle] = useState(null);
     const [description, setDescription] = useState(null);
     const [selectedDate, handleDateChange] = useState(new Date());
    
     const initialValues= {
        // email: '',
        
        title: '',
        category: '',
        method: '',
        description: '',
        startingDate: '',
        TC: false
        
        // password: ''
    }
    
    const onSubmit =  (values, {resetForm}) => {
        console.log('form data', values)
        axios.post('http://localhost:3001/api/actionPlans/createActionPlans', {title:
        values.title, description: values.description, category: values.category, method: values.method
        })
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
    
      
       
    

     const validationSchema = Yup.object({
        // startingDate: Yup.date().required('Required*'),
        category: Yup.string().required('Required*'),
        title: Yup.string().required('Required*'),
        method: Yup.string().required('Required*'),
        description: Yup.string().required('Required*'),
        TC: Yup.bool().oneOf([true], 'You need to accept Terms and conditions*'),
        // startingDate: Yup.string().required('Required*')
        //  password: Yup.string().required('Enter your Password*').matches(
        //      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        //      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character*"
        //  )
        //  file: Yup.mixed()
        //  .nullable()
        //  .required()
        //  .test(
        //    "FILE_SIZE",
        //    "Upload file is too big",
        //    (value) => !value || (value && value.size <= 1024*1024)
        //  )
        //  .test(
        //    "FILE_FORMAT",
        //    "Upload file has unsupported formate.",
        //    (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
        //  )
     })

      //  console.log('visited', formik.touched)
     
    

   return (
     <>
     <div>
     <Button onClick={handleOpen} className='addbtn' variant="contained" color="success">
         ADD PLAN
     </Button>
     </div>
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
             <hr />
             <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <Formik
                
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                  {/* {({values, setFieldValue}) => ( */}
             <Form>
                <div className='inputs'>
                  {/* <label htmlFor='title'>Title*</label>   */}
                <Field  className='field'
                variant="outlined"
                 type="text" 
                  id='title'
                   name='title'
                  label="Title"
                  as={TextField}
                  
                 />
                </div>
                 <div className='error'>
               <ErrorMessage name='title' />
               </div> 
               
              
               <div className='inputs'>
               <label htmlFor="category">Category*</label>

                <FastField className="field" component="select" name="category" placeholder="Selcet Category">
                  <option value=''>--Select--</option>
                  <option value="Indian">Indian</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Maxican">Maxican</option>
                  <option value="Russian">Russian</option>

                </FastField>
                </div>
                <div className='error'>
               <ErrorMessage name='category' />
               </div> 
                
                <div className='inputs'>
                
                <Field className="field"
                 type="text" 
                 id='description'
                  name='description' 
                  label="Title"
                  as={TextField}
                 />
                </div>
                <div className='error'>
                 <ErrorMessage name='description' /> 
               </div>
               
               <div className='inputs'>
                <label htmlFor="method">Method*</label>
                
                <FastField className="methods" component="textarea"
                 type="text" 
                 id='method'
                  name='method' 

                 />
                </div>
                <div className='error'>
                 <ErrorMessage name='method' /> 
               </div>
               <div className='inputs'>
                
                <Field className="field"
                 type="checkbox" 
                 id='TC'
                  name='TC' 
                  label="T&C"
                  as={FormControlLabel}
                  control={<Checkbox color='success'/>}
                 />
                </div>
                <div className='error'>
                 <ErrorMessage name='TC' /> 
               </div>
                {/* <div className='inputs'>
                <label htmlFor="password">Password*</label>
                <Field className="field"
                 type="password" 
                 id='password'
                  name='password' 
                  component={TextField}
                 />
                </div>  */}
                <div className='error'>
                 <ErrorMessage name='password' /> 
               </div>

               


               {/* <div className='inputs'>
                 <input
                 hidden
                ref={fileRef}
                type='file'
                name='image'
                onChange={(event) => {
                  setFieldValue("file", event.target.files[0])
                }}
                />
                {values.file && <PreviewImage file={values.file} /> }
               <div className='error'>
                 <ErrorMessage name='file' /> 
               </div> 
                <button onClick={() => {
                  fileRef.current.click();
                }}>Upload</button>
                <Slider color='secondary' defaultValue={50} aria-label="Default" valueLabelDisplay="on" /> */}
              
                
                {/* <div className='error'>
                 <ErrorMessage name='file' /> 
               </div> */}

                
               <div className='button'>
                <Button variant="contained" color="primary" type='submit'>Submit</Button>
                </div>
             </Form>
                  {/* )} */}
             </Formik>
             </Typography>
           </Box>
         </Fade>
       </Modal>
    
     </>
   )
}

export default NewPlan