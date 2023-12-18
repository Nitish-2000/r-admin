/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useContext} from 'react'
import Tile from './Tile'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import  { UserDataContext } from './context/UserContext';
import { dashboardDataContext } from './context/DashboardDatacontext';
import Logout from './Hooks/Logout';
function Dashboard() {
     let logout = Logout()
    let {data,setData} = useContext(UserDataContext)

    // console.log(data);

    let {dashboarddata}= useContext(dashboardDataContext)
    const navigate = useNavigate()

    let   handleDelete = (index)=>{
      let newArray = [...data];//deep copy
      newArray.splice(index,1);
      setData(newArray);
      // data.splice(index,1);
      // console.log(data);
    }

  return <>
      <div className="container-fluid">
        
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <button  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" onClick={logout}> LogOut</button>
                    </div>
                    <div className="row">
                        {
                            dashboarddata.map((e,i)=>{
                                return <
                                Tile color={e.color}
                                icon = {e.icon}
                                title = {e.title}
                                value = {e.value}
                                isProgress = {e.isProgress}

                                key = {i}
                                />
                            }
                            )
                        }
</div>
<div className='row'>
<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>batch</th>
        </tr>
      </thead>
     <tbody>
        
          {
            
              data.map((e,i)=>{

             return <tr key ={i}>

            <td>{i+1}</td>
            <td>{e.name}</td>
            <td>{e.username}</td>
            <td>{e.email}</td>
            <td>{e.mobile}</td>
            <td>{e.batch}</td>
            <td>
            <Button variant="primary" onClick={()=>
            navigate(`/edit/${i}`)} >EDIT</Button>
             {"\t"} 
            <Button variant="danger" onClick={()=>handleDelete(i)}>DELETE</Button>
            </td>

            </tr>
              
              })
          }
              
            
          
        
       
        </tbody>
  
    </Table>

</div>
        </div>
  </>
}

export default Dashboard