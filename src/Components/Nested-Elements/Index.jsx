/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Index() {
  let[page,setPage]=useState(0);
  let Navigate= useNavigate()
  useEffect(()=>{
    Navigate('accounts')
  },[])
  return  <>

     <div className="container-fluid">
        
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                          <h1 className="h3 mb-0 text-gray-800">Index</h1>
                          <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                  className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                      </div>
                      <p>This is an example of Nested example</p>
                      <div>
                      <ul className="liststyle">
                            <li className={page===0?"active":""} onClick={()=>{
                              setPage(0)
                              Navigate('accounts')}}>Accounts</li>
                            <li className={page===1?"active":""} onClick={()=>{
                              setPage(1)
                              Navigate('staff')}}>Staff</li>
                            <li className={page===2?"active":""} onClick={()=>{
                              setPage(2)
                              Navigate('product')}}>Products</li>
                            <li className={page===3?"active":""} onClick={()=>{
                              setPage(3)
                              Navigate('receipts')}}>Receipts</li>

                        </ul>
                        <Outlet/>

                        </div>
                       
                      </div>
  </>
}

export default Index