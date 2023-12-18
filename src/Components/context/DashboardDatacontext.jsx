import React from 'react'
export const dashboardDataContext = React.createContext(null)
let dashboarddata=[
    {

        color:"primary",
        title:"Earnings (Monthly)",
        icon:"fa-calendar",
        value:"$40,000"
    },
    {
        color:"success",
        title:"Earnings (Annual)",
        icon:"fa-dollar-sign",
        value:"$215,000"
    },{
        isProgress:true,
        color:"info",
        title:"Tasks",
        icon:"fa-clipboard-list",
        value:"50"
    },{
        color:"warning",
        title:"Pending Requests",
        icon:"fa-comments",
        value:"18"
    }
]
function DashboardDatacontext({children}) {
  return <dashboardDataContext.Provider value={{dashboarddata}}>
{children}
  </dashboardDataContext.Provider>
}

export default DashboardDatacontext
