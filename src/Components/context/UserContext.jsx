import React from 'react'
import { useState } from 'react'
export let UserDataContext = React.createContext(null)

function UserContext({children}) {
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
      },{
        name:"Savi",
        username:"savi123",
        email:"savi@gmail.com",
        mobile:"54348435154",
        batch:"Somalia",
      }
      ])
  return <UserDataContext.Provider value={{data,setData}}>
{children}
  </UserDataContext.Provider>
}

export default UserContext