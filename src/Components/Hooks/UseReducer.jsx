// eslint-disable-next-line no-unused-vars
import React,{useReducer} from 'react'
import { Button } from 'react-bootstrap'

const data = {
    count:0
}


function UseReducer() {

    let reducer = (state,action)=>{
     switch(action.type){
        case 'increment':return {...state,count:state.count+1};
        case 'decrement':return {...state,count:state.count-1};
     }
    }
    let [state,dispatch] = useReducer(reducer,data)

  return <div className="container-fluid">
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Edit User Details</h1>
                        </div>
                        
                        <div>
                        <Button onClick={()=>{dispatch({type:'increment'})}}>+</Button>
                        &nbsp;
                        <span>{state.count}</span>
                        &nbsp;
                        <Button onClick={()=>{dispatch({type:'decrement'})}}>-</Button>
                        </div>
                        </div>
}



export default UseReducer
