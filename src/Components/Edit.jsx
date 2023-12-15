/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
  useEffect(()=>{
       setName(data[params.id].name)
       setUserName(data[params.id].username)
       setEmail(data[params.id].email)
       setMobile(data[params.id].mobile)
       setBatch(data[params.id].batch)
  },[])
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
  

  return <>
    <div className="container-fluid">
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Edit User Details</h1>
                        {/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
                    </div>
                    <div className="row"></div>

                    <Form>

<Form.Group className="mb-3" >
  <Form.Label>Name</Form.Label>
  <Form.Control type="text" value={name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
</Form.Group>


<Form.Group className="mb-3" >
  <Form.Label>User Name</Form.Label>
  <Form.Control type="text" value ={username} placeholder="Enter Username" onChange={(e)=>setUserName(e.target.value)} />
</Form.Group>

<Form.Group className="mb-3" >
  <Form.Label>Email</Form.Label>
  <Form.Control type="email" value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
</Form.Group>

<Form.Group className="mb-3" >
  <Form.Label>Mobile</Form.Label>
  <Form.Control type="text" value={mobile} placeholder="Enter mobile" onChange={(e)=>setMobile(e.target.value)}/>
</Form.Group>

<Form.Group className="mb-3" >
  <Form.Label>Batch</Form.Label>
  <Form.Control type="text" value={batch} placeholder="Enter Batch" onChange={(e)=>setBatch(e.target.value)} />
</Form.Group>



<Button variant="primary" type="submit" onClick={handleedit}>
  Submit
</Button>
</Form>
                    </div>
  </>
}

export default Edit
