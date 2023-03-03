import React from 'react';
import { useFormik} from 'formik';
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import './component.css';
import LoginBanner from "../data/login_banner.jpg"
import { Link } from 'react-router-dom';

function Login() {
    
    const navigate = useNavigate();

    const formdata =useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:yup.object({
            email:yup.string().required('Email is required').email(),
            password:yup.string().required('Email is required').min(6,'enter minimum 6 char').required('password is required'),

        }),
        onSubmit:(userdata)=>{
        
            axios.post("http://localhost:5000/login",userdata).then(
                (response)=>{

                        localStorage.setItem('token', response.data.token);
                }
            ).catch(err=>console.log(err))
          
            navigate('/home')
        }
        
    })

   

    return (  <>
     <div className="container-fluid bg-primary login_page p-5 " >

<div className="row justify-content-center p-5 fw-light  ">

    <div className="col-xl-6 col-lg-8 col-md-9 py-2 m-5 ms-auto ">

        <div className="card  border-0 shadow-lg ">
            <div className="card-body p-0">
               
                <div className="row">
                     <img className='img-fluid col-lg-6 col d-none d-md-block  ' src={LoginBanner} alt="none" />
                    <div className="col-lg-6 col-md p-5 align-self-center">
                       
                            <div className="text-center">
                                <h4 className="mb-4">Welcome Back!</h4>
                            </div>
                            <form className="user" autoComplete='off' onSubmit={formdata.handleSubmit}>
                        
                                <div className="form-group" >
                                    <input type="email" className="form-control form-control-user rounded-5 p-2 mb-3 text-center"
                                        id="email" aria-describedby="emailHelp"
                                        placeholder="Enter Email Address..." name='email' value={formdata.values.email} onChange={formdata.handleChange} />
                               
                                    {formdata.errors.email?<div  className='text-danger'>{formdata.errors.email}</div>:<></>}
                            
                                </div>
                                <div className="form-group">
                                    <input type="password" className=" form-control form-control-user rounded-5 p-2 my-2 text-center"
                                        id="password" placeholder="Password"
                                          name='password' value={formdata.values.password} onChange={formdata.handleChange}/>
                                 
                                 {formdata.errors.password?<div className='text-danger'>{formdata.errors.password}</div>:<></>}
                                </div>
                                <div className="form-group mb-2">
                                    <div className="custom-control custom-checkbox small ">
                                        <input type="checkbox" className="custom-control-input ms-3 me-1 " id="customCheck" />
                                        <label className="custom-control-label text-secondary" htmlFor="customCheck" >Remember
                                            Me</label>
                                    </div>
                                </div>
                                <button  className="btn btn-primary d-block rounded-pill mb-3 w-75 mx-auto " type='submit'>Login</button>
                                
                                
                                <Link to="/register" className=" btn btn-danger rounded-pill mb-3 w-75 mx-auto ">
                                    <i className="fab fa-google fa-fw"></i> register
                                </Link>
                        
                            </form>
                            
                            <div className="text-center">
                                <Link to='/#' className="small text-decoration-none" >Forgot Password?</Link>
                            </div>
                            <div className="text-center">
                                <Link  to='/register' className="small text-decoration-none" href="register.html">Create an Account!</Link>
                            </div>
                       
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>

</div>
    </>);
}

export default Login;