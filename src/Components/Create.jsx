/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
// import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import {Formik} from 'formik'
import * as Yup from 'yup';

function Create({data,setData}) {
 
  const UserSchema = Yup.object().shape({
    name:Yup.string("Name must be letters").required('* required'),
    username:Yup.string().required('* required').min(5),
    email:Yup.string().required('* required').email('Invalid Email'),
    mobile:Yup.string().required('* required').matches(/^\d{10}$/,'Invalid Mobile'),
    batch:Yup.string()

  })
  let navigate = useNavigate();

  
  return <>
  <div className="container-fluid">
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Create User</h1>
                        {/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
                    </div>
                    <div className="row">
                    <Formik  
                    initialValues={
                      {name:"",
                      username:"",
                      email:"",
                      mobile:"",
                      batch:""}}

                      validationSchema={UserSchema}

                     onSubmit={(values)=>{
                   
                   let newarray = [...data];
                   newarray.push(values);
                   setData(newarray);
                   navigate('/dashboard');

                   }}

                    >
                    
                    {({ errors,touched,handleBlur,handleSubmit,handleChange})=>(
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter Name" onBlur={handleBlur} onChange={handleChange}/>
                {errors.name && touched.name ? <div style={{color:"red"}}>{errors.name}</div>:null}
              </Form.Group>
    
              <Form.Group className="mb-3">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" name='username' placeholder="Enter User Name" onBlur={handleBlur} onChange={handleChange}/>
                {errors.username && touched.username ? <div style={{color:"red"}}>{errors.username}</div>:null}
              </Form.Group>
              
            
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email"  onBlur={handleBlur} onChange={handleChange}/>
                {errors.email && touched.email ? <div style={{color:"red"}}>{errors.email}</div>:null}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" name='mobile' placeholder="Enter Mobile" onBlur={handleBlur} onChange={handleChange}/>
                {errors.mobile && touched.mobile ? <div style={{color:"red"}}>{errors.mobile}</div>:null}
              </Form.Group>
    
              <Form.Group className="mb-3">
                <Form.Label>Batch</Form.Label>
                <Form.Control type="text" name='batch' placeholder="Enter Batch" onBlur={handleBlur} onChange={handleChange}/>
                {errors.batch && touched.batch ? <div style={{color:"red"}}>{errors.batch}</div>:null}
              </Form.Group>
    
              <Button variant="primary" type='submit'>
                Submit
              </Button>
            </Form>
          )}
                   
                    </Formik>
                 
                    </div>
  </div>
    
  </>
}

export default Create