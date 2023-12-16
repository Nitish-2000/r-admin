/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Edit= ({data,setData}) =>{
  // console.log(data);
    const navigate = useNavigate()
  let params = useParams()
  let [name,setName] =useState("");
  let [username,setUserName] =useState("");
  let [email,setEmail] =useState("");
  let [mobile,setMobile] =useState("");
  let [batch,setBatch] =useState("")
 
//   let getName = (index)=>{
// setName(data[index].name);
// setUserName(data[index].username);
// setEmail(data[index].email);
// setMobile(data[index].mobile);
// setBatch(data[index].batch);

//  }
  // useEffect(()=>{
  //      setName(data[params.id].name)
  //      setUserName(data[params.id].username)
  //      setEmail(data[params.id].email)
  //      setMobile(data[params.id].mobile)
  //      setBatch(data[params.id].batch)
  // },[])

  const [initialValues,setInitialvalues] = useState({
    name :  data[params.id].name,
    email  : data[params.id].email,
    username  : data[params.id].username,
    mobile :  data[params.id].mobile,
    batch :  data[params.id].batch
  })

  let handleedit = ()=>{
    let newarray = [...data]
    newarray.splice(params.id,1,{
      name,
      username,
      email,
      mobile,
      batch
    })
    setData(newarray);
    navigate('/dashboard')
  }
  let editValidation =  Yup.object().shape({
     name:Yup.string().required('* Required').min(5),
     username:Yup.string().required('* required').min(5,'shouls be greater then 5 char'),
     email:Yup.string().email("not valid").required('* required'),
     mobile:Yup.string().required('* required').matches(/^\d{10}$/,'Invalid Mobile'),
     batch:Yup.string()
  })
  

  return <>
    <div className="container-fluid">
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Edit User Details</h1>
                        {/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
                    </div>
                    <div className="row"></div>

                   <Formik 
                   initialValues={initialValues}
                   validationSchema={editValidation}
                   onSubmit={(values)=>{
                    let newarray = [...data];
                    newarray.splice(params.id,1,values);
                    setData(newarray);
                    navigate('/dashboard');

                   }}
                   >
                    {({errors,touched,handleSubmit,handleBlur,handleChange,values})=>(
                      <Form onSubmit={handleSubmit}>
                  

<Form.Group className="mb-3" >
  <Form.Label>Name</Form.Label>
  <Form.Control  name = 'name' type="text" value={values.name} placeholder="Enter Name" onChange={handleChange} onBlur={handleBlur} />
  {errors.name && touched.name ? <div style={{color:"red"}}>{errors.name}</div>:null}
</Form.Group>


<Form.Group className="mb-3" >
  <Form.Label>User Name</Form.Label>
  <Form.Control name = 'username' type="text" value ={values.username} placeholder="Enter Username" onChange={handleChange} onBlur={handleBlur} />
  {errors.username && touched.username ? <div style={{color:"red"}}>{errors.username}</div>:null}
</Form.Group>

<Form.Group className="mb-3" >
  <Form.Label>Email</Form.Label>
  <Form.Control name = 'email' type="email" value={values.email} placeholder="Enter Email" onChange={handleChange} onBlur={handleBlur}/>
  {errors.email && touched.email ? <div style={{color:"red"}}>{errors.email}</div>:null}
</Form.Group>

<Form.Group className="mb-3" >
  <Form.Label>Mobile</Form.Label>
  <Form.Control name = 'mobile' type="text" value={values.mobile} placeholder="Enter mobile" onChange={handleChange} onBlur={handleBlur}/>
  {errors.mobile && touched.mobile ? <div style={{color:"red"}}>{errors.mobile}</div>:null}
</Form.Group>

<Form.Group className="mb-3" >
  <Form.Label>Batch</Form.Label>
  <Form.Control name = 'batch' type="text" value={values.batch} placeholder="Enter Batch" onChange={handleChange} onBlur={handleBlur} />
  {errors.batch && touched.batch ? <div style={{color:"red"}}>{errors.batch}</div>:null}

  
</Form.Group>



<Button variant="primary" type="submit" >
  Submit
</Button>
</Form>
                      
                    )
                    }
                   
                   </Formik>
                    </div>
  </>
}

export default Edit
