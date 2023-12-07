import React from 'react'
import { Formik, Form, Field, ErrorMessage, validateYupSchema, FastField } from 'formik';
import { Box, Button, Card, CardContent, TextField } from '@mui/material';
import * as Yup from 'yup'
import '../Login/plans.css'

const Formikmui = () => {

    const initialValues= {
        // email: '',
        tc: false,
        title: '',
        category: '',
        method: '',
        description: '',
        startingDate: '',
        
        // password: ''
    }

    const validationSchema = Yup.object({
        // startingDate: Yup.date().required('Required*'),
        category: Yup.string().required('Required*'),
        title: Yup.string().required('Required*'),
        method: Yup.string().required('Required*'),
        description: Yup.string().required('Required*'),
    })
  return (
    <>
    <Card>
        <CardContent>
    <Formik
                
                initialValues={initialValues}
                validationSchema={validationSchema}
                // onSubmit={onSubmit}
                >
                  {/* {({values, setFieldValue}) => ( */}
             <Form>
                <Field
                  name='title' component={TextField} label="Title"/>
                   <div className='error'>
               <ErrorMessage name='title' />
               </div>   
               
              
                
                {/* <div className='error'>
                 <ErrorMessage name='file' /> 
               </div> */}

                
               <div className='button'>
                <Button variant="contained" color="primary" type='submit'>Submit</Button>
                </div>
             </Form>
                  {/* )} */}
             </Formik>
             </CardContent>
        </Card>
    </>
  )
}

export default Formikmui