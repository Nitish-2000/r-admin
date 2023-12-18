import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard'
import Create from './Components/Create'
import Edit from  './Components/Edit'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
// import { useState } from 'react';
import Index from "./Components/Nested-Elements/Index"
import Accounts from "./Components/Nested-Elements/Accounts"
import Products from "./Components/Nested-Elements/Products"
import Receipts from './Components/Nested-Elements/Receipts';
import Staff from "./Components/Nested-Elements/Staff";
import Useref from "./Components/Hooks/Useref";
import UseReducer from './Components/Hooks/UseReducer';
import UserContext from './Components/context/UserContext';
import DashboardDatacontext from './Components/context/DashboardDatacontext';
import LoginPage from './Components/Hooks/LoginPage';
function App() {
 
// let  [data,setData]= useState([
//   {

//   name:'Nitish',
//   username:'nitish123',
//   email:"nitishmani@gmail.com",
//   mobile:"543548435154",
//   batch:"India",
// },
// {
//   name:"Ravi",
//   username:"ravi123",
//   email:"ravi@gmail.com",
//   mobile:"54348435154",
//   batch:"Kenya",
// }
// ])
  return (
    <>
      <div id="wrapper">
      <BrowserRouter>
      
      <Routes>
        <Route path="/dashboard" element={ 
        <UserContext>
         <DashboardDatacontext>
         <Sidebar/><Dashboard/>
         </DashboardDatacontext>
        </UserContext>}></Route>
        <Route path="/create" element={
          <UserContext>
            <Sidebar/><Create/>
          </UserContext>
        }/>
        <Route path="/edit/:id" element={
          <UserContext>
            <Sidebar/><Edit/>
          </UserContext>
        }/>
        <Route path="/*" element={<Navigate to='/dashboard'/>}/>
        <Route path="/nested-example" element={<Index/>}>
        <Route path="accounts" element={<><Sidebar/><Accounts/></>}/>
        <Route path="product" element={<><Sidebar/><Products/></>}/>
        <Route path = "receipts" element={<><Sidebar/><Receipts/></>}/>
        <Route path="staff" element={<><Sidebar/><Staff/></>}/>
        </Route>
        <Route path="useref" element={<><Sidebar/><Useref/></>}/>
        <Route path='/usereducer' element={<><Sidebar/><UseReducer/></>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
      </BrowserRouter>
        
        
      </div>
    </>
  )
}

export default App
