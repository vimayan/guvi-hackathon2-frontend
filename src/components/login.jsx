import React, { useEffect } from 'react';
import { useFormik} from 'formik';
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './component.css';
import LoginBanner from "../data/login_banner.jpg"
import { Link } from 'react-router-dom';

import { LoginAction } from '../action/showAction';
import { useDispatch } from 'react-redux';


function Login() {
    const dispatch = useDispatch();
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
        
            axios.post("https://guvi-hackathon2-backend-vva7.onrender.com/login",userdata).then(
                 (response)=>{
                  
                   if(response.data.token){
                     dispatch(LoginAction(response.data));
                        localStorage.setItem('token', response.data.token);
                        localStorage.setItem('admin',response.data.admin)
                      
                        navigate('/home');}
                        else{alert(response.data)}
                }
            ).catch(err=>{console.log(err);})
          
        
        }
        
    })





    useEffect(()=>{
        const jwtToken = localStorage.getItem('token');
        if(jwtToken){
            navigate('/home');
        }
    },[navigate])

   

    return (  <>
     <div className="container-fluid bg-primary login_page" >

<div className="row  fw-light h-100  ">

    <div className="col-xl-6 col-lg-7 col-md-8 col-sm-9 col-12 ms-auto my-auto ">

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
