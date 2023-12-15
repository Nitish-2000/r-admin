import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard'
import Create from './Components/Create'
import Edit from  './Components/Edit'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import { useState } from 'react';
import Index from "./Components/Nested-Elements/Index"
import Accounts from "./Components/Nested-Elements/Accounts"
import Products from "./Components/Nested-Elements/Products"
import Receipts from './Components/Nested-Elements/Receipts';
import Staff from "./Components/Nested-Elements/Staff";
import Useref from "./Components/Hooks/Useref";
function App() {
 
let  [data,setData]= useState([
  {

  name:'Nitish',
  username:'nitish123',
  email:"nitishmani@gmail.com",
  mobile:"543548435154",
  batch:"India",
},
{
  name:"Ravi",
  username:"ravi123",
  email:"ravi@gmail.com",
  mobile:"54348435154",
  batch:"Kenya",
}
])
  return (
    <>
      <div id="wrapper">
      <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard data={data} setData={setData}/>}></Route>
        <Route path="/create" element={<Create data={data} setData={setData}/>}/>
        <Route path="/edit/:id" element={<Edit data={data} setData={setData}/>}/>
        <Route path="/*" element={<Navigate to='/dashboard'/>}/>
        <Route path="/nested-example" element={<Index/>}>
        <Route path="accounts" element={<Accounts/>}/>
        <Route path="product" element={<Products/>}/>
        <Route path = "receipts" element={<Receipts/>}/>
        <Route path="staff" element={<Staff/>}/>
        </Route>
        <Route path="useref" element={<Useref/>}/>
      </Routes>
      </BrowserRouter>
        
        
      </div>
    </>
  )
}

export default App
