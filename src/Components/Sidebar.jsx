// eslint-disable-next-line no-unused-vars
import React from 'react'//code snippet is "rfce"
import {Link} from 'react-router-dom'

function Sidebar() {
  return <>
   <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
<a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
</a>

{/* <!-- Divider --> */}
<hr className="sidebar-divider my-0"/>

{/* <!-- Nav Item - Dashboard --> */}
<li className="nav-item active">
    <div className="nav-link" >
        <Link to='/dashboard'>
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span style = {{color:"white"}}>Dashboard</span>
        </Link>
        </div>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

{/* <!-- Heading --> */}
<div className="sidebar-heading">
    Interface
</div>

{/* <!-- Nav Item - Pages Collapse Menu --> */}
<li className="nav-item">
    <div className="nav-link collapsed"
        aria-expanded="true" aria-controls="collapseTwo">
       <Link to='/create'>
       <i className="fas fa-fw fa-cog"></i>
        <span style={{color:"white"}}>Add user</span>
       </Link>
    </div>
    
</li>

{/* <!-- Nav Item - Utilities Collapse Menu --> */}
<li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        <i className="fas fa-fw fa-wrench"></i>
        <span>View user</span>
    </a>
    
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

{/* <!-- Heading --> */}
<div className="sidebar-heading">
    Addons
</div>

{/* <!-- Nav Item - Pages Collapse Menu --> */}

</ul>
  </>
}

export default Sidebar