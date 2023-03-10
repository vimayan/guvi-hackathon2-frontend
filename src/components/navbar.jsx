import React from 'react';
import Logo from "../data/logo.png";
import { useNavigate } from "react-router-dom";
import './component.css';

function Navbar({viewMovies,viewCinemaHall}) {
 
  

  const navigate =useNavigate();


  const admin = localStorage.getItem('admin')==="true"?true:false




  const logout = ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    navigate("/")
  }

const adminAccess = () =>{
  navigate("/settings")
}


    return (  <>
    
    <nav className="navbar navbar-expand-lg navbar-transparent ">
    <div className="container-md ">
      <a className="navbar-brand" href="/home" ><img src={Logo} alt="here logo" className='img-thumbnail bg-dark img-fluid w-50'  /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="mynavbar">
      
    
  <ul className="navbar-nav  text-start text-nowrap ">
          <li className="nav-item">
          <a className="nav-link" href="/home#Movies" onClick={viewMovies} >Movie</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/home#Cinemahall" onClick={viewCinemaHall} >Cinema Hall</a>
          </li>
        
          <li className="nav-item">
            <a className="nav-link" href="/home">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/home">Order</a>
          </li>
              
        </ul>
        <div className="input-group mx-md-3 mb-3 mb-md-auto w-50">
        <input type="text" className="form-control" placeholder="type here..." aria-label="enter mail" aria-describedby="button-addon2"/>
 
          <button className="btn btn-success" type="button" id="button-addon2">Search</button>
 
</div>

      
        <form className="d-flex mt-1 ms-auto text-nowrap">
        <button className="btn btn-outline-primary fw-bold" onClick={logout} type="button">log out<i className="fa-solid fa-user-check ms-2"/>
          </button> 
          {admin?<button className="btn btn-primary fw-bold ms-1 gear" onClick={adminAccess} type="button"><i className="fa-solid fa-gear"/>
          </button>:<></>} 
        </form>
       

      </div>
    </div>
  </nav>
    
    </>);
}

export default Navbar;