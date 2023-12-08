import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard'
import Create from './Components/Create'
import Edit from  './Components/Edit'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useState } from 'react';
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
        <Route path="/edit" element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
        
        
      </div>
    </>
  )
}

export default App
