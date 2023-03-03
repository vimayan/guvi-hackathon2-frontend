import { Link } from "react-router-dom";
import Logo from "../data/logo.png";

function Navbar() {
    return (  <>
    
    <nav className="navbar navbar-expand-md navbar-transparent ">
    <div className="container-md ">
      <Link className="navbar-brand" to="/#"><img src={Logo} alt="here logo" className='img-thumbnail bg-dark img-fluid w-50'  /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="mynavbar">
      
    
  <ul className="navbar-nav  text-start text-nowrap ">
          <li className="nav-item">
            <Link to='/#' className="nav-link">Movie</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#About">Cinema Hall</a>
          </li>
        
          <li className="nav-item">
            <a className="nav-link" href="#Contact">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Contact">Order</a>
          </li>
              
        </ul>
        <div className="input-group mx-md-3 mb-3 mb-md-auto w-50">
        <input type="text" className="form-control" placeholder="type here..." aria-label="enter mail" aria-describedby="button-addon2"/>
 
 <button className="btn btn-success" type="button" id="button-addon2">Search</button>
 
</div>

      
        <form className="d-flex mt-1 ms-auto text-nowrap">
        <button className="btn btn-outline-primary fw-bold"  type="button">User<i className="fa-solid fa-user-check ms-2"></i>
          </button> 
        </form>
       

      </div>
    </div>
  </nav>
    
    </>);
}

export default Navbar;