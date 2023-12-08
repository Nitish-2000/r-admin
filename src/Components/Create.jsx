/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Create({data,setData}) {
  let [name,setName] =useState("")
  let [username,setUserName] =useState("")
  let [email,setEmail] =useState("")
  let [mobile,setMobile] =useState("")
  let [batch,setBatch] =useState("")
  let navigate = useNavigate();
  console.log(batch);

  let handleSave = ()=>{
    let newarray2 = [...data];
    newarray2.push({
      name,
      username,
      email,
      mobile,
      batch
    })
    setData(newarray2);
    navigate('/dashboard')
  }

  
  return <>
  <div className="container-fluid">
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Create User</h1>
                        {/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
                    </div>
                    <div className="row">
                    <Form>

      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>

      
      <Form.Group className="mb-3" >
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" onChange={(e)=>setUserName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter mobile" onChange={(e)=>setMobile(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Enter Batch" onChange={(e)=>setBatch(e.target.value)} />
      </Form.Group>

     

      <Button variant="primary" type="submit" onClick={()=>handleSave()}>
        Submit
      </Button>
    </Form>
                    </div>
  </div>
    
  </>
}

export default Create