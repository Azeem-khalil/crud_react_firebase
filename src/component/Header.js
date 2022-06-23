import React from 'react'
import {NavLink} from "react-router-dom";
function header() {
  return (
    <>
    <div className="container-fluid" >
<nav style={{backgroundColor: "rgb(120,120,120)"}} className="navbar navbar-expand-lg">
    <NavLink to="/" className="btn" style={{color: "white"}}>Home </NavLink>
    <NavLink to="/add" className="btn" style={{color: "white"}}>Add </NavLink>
    <NavLink to="/about" className="btn" style={{color: "white"}}>About </NavLink>
</nav>

        
    </div>
    </>)
}

export default header