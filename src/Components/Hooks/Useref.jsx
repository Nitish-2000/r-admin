/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { useState, useEffect } from 'react'

function Useref() {
  let count = useRef(0);
 
  let[name,setName] = useState("");

  useEffect(()=>{
    count.current += 1 ;
   })
   let ref1 = useRef();
   let ref2 = useRef();
   let ref3 = useRef();
   let ref4 = useRef();

   useEffect(()=>{
        ref1.current.focus();
   },[])


   let handleSubmit = ()=>{
    let output = `${ref1.current.value}${ref2.current.value}${ref3.current.value}${ref4.current.value}`
    if(output.length===4){
       alert(`Entered otp is ${output}`)
   }
   else{
    alert(`invalid otp`)
    ref1.current.value="";
    ref2.current.value="";
    ref3.current.value="";
    ref4.current.value="";

    ref1.current.focus();


   }
   }
   



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


                        <div className="container-fluid">
                        <input type='text'ref = {ref1} onKeyUp={()=>ref2.current.focus()}></input>

                        <input type='text'ref = {ref2} onKeyUp={(e)=>{
                          if(e.key=="backspace"||"delete" && ref2.current.value=="" )
                          ref1.current.focus()
                          else
                          ref3.current.focus()}}></input>

                        <input type='text'ref = {ref3} onKeyUp={(e)=>{
                          if(e.key=="backspace"||"delete" && ref3.current.value=="" )
                          ref2.current.focus()
                          else
                          ref4.current.focus()}}></input>

                        <input type='text'ref = {ref4} onKeyUp={(e)=>{
                          if(e.key=="backspace"||"delete" && ref4.current.value=="" )
                          ref3.current.focus()
                        }}></input>
                        <button onClick={()=>handleSubmit()}>submit</button>
                             
                        </div>
                      </div>
                     

                      
  </>
}

export default Useref