/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { useState, useEffect } from 'react'

function Useref() {
  let count = useRef(0);
 
  let[name,setName] = useState("");

  useEffect(()=>{
    count.current += 1 ;
   })



  return <>
     <div className="container-fluid">
        
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                          <h1 className="h3 mb-0 text-gray-800">useRef</h1>
                          
                      </div>
                      <div className="container-fluid">
                        <input type="text"  onChange={
                          (e)=>{setName(e.target.value)
                        }} 
                          >

                          </input>
                      </div>
                        <h3>your Entered name is {name} </h3>
                        <h1>Your count value value {count.current}</h1>
                      </div>
                     

                      
  </>
}

export default Useref